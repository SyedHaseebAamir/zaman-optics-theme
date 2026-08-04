import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourcePath = "C:/Users/lenovo/Downloads/Pakistan_Contact_Lens_Competitive_Analysis.xlsx";
const outputDir = "C:/Users/lenovo/Desktop/Zaman-Optics/outputs/contact-lenses";
const outputPath = path.join(outputDir, "Shopify_Contact_Lenses_Draft_Import.csv");
const previewPath = path.join(outputDir, "contact-lenses-preview.png");

const sourceBlob = await FileBlob.load(sourcePath);
const sourceWorkbook = await SpreadsheetFile.importXlsx(sourceBlob);
const sourceSheet = sourceWorkbook.worksheets.getItem("Shopify Product Upload");
const sourceValues = sourceSheet.getUsedRange(true).values;
const sourceHeaders = sourceValues[0].map((value) => String(value ?? ""));
const sourceRows = sourceValues
  .slice(1)
  .map((row) => Object.fromEntries(sourceHeaders.map((header, index) => [header, row[index] ?? ""])))
  .filter((row) => {
    const handle = String(row.Handle ?? "").trim();
    return handle !== "" && handle !== "Legend:";
  });

const productHeaders = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Product Category",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Option2 Name",
  "Option2 Value",
  "Option3 Name",
  "Option3 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare-at Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Variant Barcode",
  "Image Src",
  "Image Position",
  "Image Alt Text",
  "Gift Card",
  "SEO Title",
  "SEO Description",
  "Status",
];

const ascii = (value) =>
  String(value ?? "")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .trim();

const cleanSku = (sku, option1, option2) => {
  const shade = `${option1} ${option2}`.toLowerCase();
  if (shade.includes("grey-blue")) return ascii(sku).replace(/-GRE$/, "-GBL");
  if (shade.includes("green-hazel")) return ascii(sku).replace(/-GRE$/, "-GHZ");
  if (shade.includes("brown-honey")) return ascii(sku).replace(/-BRO$/, "-BHN");
  if (shade.includes("grey")) return ascii(sku).replace(/-GRE$/, "-GRY");
  if (shade.includes("green")) return ascii(sku).replace(/-GRE$/, "-GRN");
  return ascii(sku);
};

const typeConfig = {
  "Power Lens": {
    productType: "Power Contact Lenses",
    lensTag: "Lens Type: Power",
    titleSuffix: "Clear Power Contact Lenses",
  },
  "Toric Lens": {
    productType: "Toric Contact Lenses",
    lensTag: "Lens Type: Toric",
    titleSuffix: "Toric Contact Lenses",
  },
  "One Day Colour Lens": {
    productType: "Fashion Contact Lenses",
    lensTag: "Lens Type: Fashion",
    titleSuffix: "One-Day Fashion Contact Lenses",
  },
};

const firstRows = new Map();
for (const row of sourceRows) {
  const handle = ascii(row.Handle);
  if (!firstRows.has(handle)) firstRows.set(handle, row);
}

const outputRows = [];
for (const row of sourceRows) {
  const handle = ascii(row.Handle);
  const first = firstRows.get(handle);
  const isFirst = row === first;
  const sourceType = ascii(first.Type);
  const config = typeConfig[sourceType];
  if (!config) throw new Error(`Unsupported product type for ${handle}: ${sourceType}; source=${JSON.stringify(first)}`);

  const vendor = ascii(first.Vendor);
  const option1Name = ascii(row["Option1 Name"]);
  const option1Value = ascii(row["Option1 Value"]);
  const option2Name = ascii(row["Option2 Name"]);
  const option2Value = ascii(row["Option2 Value"]);
  const tone = sourceType === "One Day Colour Lens" ? option1Value : "";
  const pricingConfirmed = ascii(first["Pricing Basis"]).startsWith("Client-confirmed");

  let title = `${vendor} ${config.titleSuffix}`;
  if (tone) title += ` - ${tone}`;

  const tags = [
    "Contact Lenses",
    `Brand: ${vendor}`,
    config.lensTag,
    "Draft Import",
    pricingConfirmed ? "Pricing: Client Confirmed" : "Pricing: Confirm Before Publish",
  ];
  if (sourceType === "One Day Colour Lens") {
    tags.push("Fashion Lenses", "Wear Type: One Day", `Tone: ${tone}`);
  }
  if (sourceType === "Power Lens") tags.push("Prescription", "Transparent", "Power Range: -0.50 to -4.00");
  if (sourceType === "Toric Lens") tags.push("Astigmatism", "Prescription Setup Required");

  const seoDescription = ascii(first["Body (HTML)"]).replace(/<[^>]+>/g, "").slice(0, 300);
  const values = {
    Handle: handle,
    Title: isFirst ? title : "",
    "Body (HTML)": isFirst ? `<p>${ascii(first["Body (HTML)"])}</p>` : "",
    Vendor: isFirst ? vendor : "",
    "Product Category": "",
    Type: isFirst ? config.productType : "",
    Tags: isFirst ? tags.join(", ") : "",
    Published: isFirst ? "FALSE" : "",
    "Option1 Name": option1Name,
    "Option1 Value": option1Value,
    "Option2 Name": option2Name,
    "Option2 Value": option2Value,
    "Option3 Name": "",
    "Option3 Value": "",
    "Variant SKU": cleanSku(row["Variant SKU"], option1Value, option2Value),
    "Variant Grams": 0,
    "Variant Inventory Tracker": "shopify",
    "Variant Inventory Qty": Number(row["Variant Inventory Qty"] || 0),
    "Variant Inventory Policy": "deny",
    "Variant Fulfillment Service": "manual",
    "Variant Price": Number(row["Variant Price (PKR)"] || 0),
    "Variant Compare-at Price": "",
    "Variant Requires Shipping": "TRUE",
    "Variant Taxable": "TRUE",
    "Variant Barcode": "",
    "Image Src": "",
    "Image Position": "",
    "Image Alt Text": "",
    "Gift Card": "FALSE",
    "SEO Title": isFirst ? title : "",
    "SEO Description": isFirst ? seoDescription : "",
    Status: "draft",
  };
  outputRows.push(productHeaders.map((header) => values[header] ?? ""));
}

const csvCell = (value) => {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};
const csvText = [productHeaders, ...outputRows].map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(outputPath, `\uFEFF${csvText}`, "utf8");

const verifyWorkbook = await Workbook.fromCSV(csvText, { sheetName: "Shopify Import" });
const verifySheet = verifyWorkbook.worksheets.getItem("Shopify Import");
verifySheet.freezePanes.freezeRows(1);
verifySheet.showGridLines = false;
verifySheet.getRange("A1:AF101").format.font = { name: "Arial", size: 10, color: "#1D1D1F" };
verifySheet.getRange("A1:AF1").format = {
  fill: "#0F766E",
  font: { name: "Arial", size: 10, bold: true, color: "#FFFFFF" },
  wrapText: true,
};
verifySheet.getRange("A1:AF101").format.autofitColumns();
verifySheet.getRange("A:A").format.columnWidth = 28;
verifySheet.getRange("B:B").format.columnWidth = 38;
verifySheet.getRange("C:C").format.columnWidth = 55;
verifySheet.getRange("G:G").format.columnWidth = 50;

const skuIndex = productHeaders.indexOf("Variant SKU");
const handles = outputRows.map((row) => row[0]);
const skus = outputRows.map((row) => row[skuIndex]);
const duplicateSkus = skus.filter((sku, index) => skus.indexOf(sku) !== index);
if (new Set(handles).size !== 20) throw new Error(`Expected 20 products, found ${new Set(handles).size}`);
if (outputRows.length !== 100) throw new Error(`Expected 100 variants, found ${outputRows.length}`);
if (duplicateSkus.length) throw new Error(`Duplicate SKUs remain: ${[...new Set(duplicateSkus)].join(", ")}`);
if (outputRows.some((row) => row[productHeaders.indexOf("Status")] !== "draft")) throw new Error("Non-draft status found");

const inspection = await verifyWorkbook.inspect({
  kind: "table",
  range: "Shopify Import!A1:L16",
  include: "values",
  tableMaxRows: 16,
  tableMaxCols: 12,
  maxChars: 5000,
});
const preview = await verifyWorkbook.render({
  sheetName: "Shopify Import",
  range: "A1:L18",
  scale: 1,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

console.log(JSON.stringify({
  outputPath,
  previewPath,
  products: new Set(handles).size,
  variants: outputRows.length,
  uniqueSkus: new Set(skus).size,
  draftRows: outputRows.filter((row) => row[productHeaders.indexOf("Status")] === "draft").length,
  inspection: inspection.ndjson,
}));
