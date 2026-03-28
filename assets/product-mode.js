/**
 * PRODUCT MODE - Prescription Workflow Handler
 * 
 * Manages the multi-step prescription form:
 * - Step progression (previous/next/submit)
 * - Form validation
 * - Data persistence across steps
 * - Step indicator updates
 * - Integration with product-form submission
 */

if (!customElements.get('prescription-workflow')) {
  customElements.define(
    'prescription-workflow',
    class PrescriptionWorkflow extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.formElement = this.querySelector('.prescription-form__form');
        this.currentStep = 1;
        this.totalSteps = 4;
        this.steps = [];
        this.stepButtons = {};
        this.nextButton = null;
        this.prevButton = null;
        this.submitButton = null;
        this.stepsIndicator = null;
      }

      connectedCallback() {
        this.initializeElements();
        this.attachEventListeners();
        this.updateStepDisplay();
      }

      /**
       * Initialize all DOM references
       */
      initializeElements() {
        // Get all steps
        this.steps = Array.from(
          this.form.querySelectorAll('[data-step]')
        );

        // Get buttons
        this.nextButton = this.form.querySelector('[data-action="next"]');
        this.prevButton = this.form.querySelector('[data-action="prev"]');
        this.submitButton = this.form.querySelector('[data-action="submit"]');

        // Get step indicator
        this.stepsIndicator = this.parentElement.querySelector('.prescription-steps');
      }

      /**
       * Attach event listeners to form elements
       */
      attachEventListeners() {
        if (this.nextButton) {
          this.nextButton.addEventListener('click', (e) => this.handleNextStep(e));
        }

        if (this.prevButton) {
          this.prevButton.addEventListener('click', (e) => this.handlePrevStep(e));
        }

        // Update review on step 4 when form data changes
        this.form.addEventListener('change', (e) => this.handleFormChange(e));
        this.form.addEventListener('input', (e) => this.handleFormChange(e));

        // Handle form submission
        if (this.form.tagName === 'FORM') {
          this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
      }

      /**
       * Handle next step button click
       */
      handleNextStep(e) {
        e.preventDefault();

        // Validate current step before proceeding
        if (!this.validateCurrentStep()) {
          this.showStepError();
          return;
        }

        // Clear any previous errors
        this.clearStepError();

        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
          this.updateStepDisplay();

          // Update review section if moving to step 4
          if (this.currentStep === 4) {
            this.updateReviewSection();
          }

          // Scroll to top of form for mobile
          this.scrollToForm();
        }
      }

      /**
       * Handle previous step button click
       */
      handlePrevStep(e) {
        e.preventDefault();

        if (this.currentStep > 1) {
          this.currentStep--;
          this.updateStepDisplay();
          this.clearStepError();
          this.scrollToForm();
        }
      }

      /**
       * Validate current step's required fields
       */
      validateCurrentStep() {
        const currentStepElement = this.form.querySelector(
          `[data-step="${this.currentStep}"]`
        );

        if (!currentStepElement) return true;

        // Get all required inputs in current step
        const requiredInputs = currentStepElement.querySelectorAll(
          'input[required], select[required]'
        );

        if (requiredInputs.length === 0) return true;

        // Validate each required input
        let isValid = true;
        requiredInputs.forEach((input) => {
          if (!input.checkValidity()) {
            input.classList.add('is-invalid');
            isValid = false;
          } else {
            input.classList.remove('is-invalid');
          }
        });

        return isValid;
      }

      /**
       * Show error message for current step
       */
      showStepError() {
        const errorWrapper = this.form.querySelector(
          '.product-form__error-message-wrapper'
        );
        const errorMessage = this.form.querySelector(
          '.product-form__error-message'
        );

        if (errorWrapper && errorMessage) {
          errorMessage.textContent = this.getStepErrorMessage();
          errorWrapper.removeAttribute('hidden');
        }
      }

      /**
       * Clear error message
       */
      clearStepError() {
        const errorWrapper = this.form.querySelector(
          '.product-form__error-message-wrapper'
        );

        if (errorWrapper) {
          errorWrapper.setAttribute('hidden', '');
        }
      }

      /**
       * Get error message for current step
       */
      getStepErrorMessage() {
        const messages = {
          1: 'Please fill in all required prescription fields (SPH and PD)',
          2: 'Please select a lens type and material',
          3: 'Please select at least one option to continue',
          4: 'Please review your information',
        };

        return messages[this.currentStep] || 'Please complete this step';
      }

      /**
       * Update step display (show/hide steps, update buttons)
       */
      updateStepDisplay() {
        // Hide all steps
        this.steps.forEach((step) => {
          step.removeAttribute('aria-hidden');
          step.classList.remove('is-active');
          step.setAttribute('hidden', '');
        });

        // Show current step
        const currentStepElement = this.form.querySelector(
          `[data-step="${this.currentStep}"]`
        );
        if (currentStepElement) {
          currentStepElement.classList.add('is-active');
          currentStepElement.removeAttribute('hidden');
          currentStepElement.removeAttribute('aria-hidden');
        }

        // Update button visibility
        this.updateButtons();

        // Update step indicator
        this.updateStepIndicator();
      }

      /**
       * Update button visibility based on current step
       */
      updateButtons() {
        const isFirstStep = this.currentStep === 1;
        const isLastStep = this.currentStep === this.totalSteps;

        if (this.prevButton) {
          if (isFirstStep) {
            this.prevButton.setAttribute('hidden', '');
          } else {
            this.prevButton.removeAttribute('hidden');
          }
        }

        if (this.nextButton) {
          if (isLastStep) {
            this.nextButton.setAttribute('hidden', '');
          } else {
            this.nextButton.removeAttribute('hidden');
          }
        }

        if (this.submitButton) {
          if (isLastStep) {
            this.submitButton.removeAttribute('hidden');
          } else {
            this.submitButton.setAttribute('hidden', '');
          }
        }
      }

      /**
       * Update step indicator visual state
       */
      updateStepIndicator() {
        if (!this.stepsIndicator) return;

        const stepItems = this.stepsIndicator.querySelectorAll(
          '.prescription-steps__item'
        );

        stepItems.forEach((item, index) => {
          const stepNumber = index + 1;

          item.classList.remove('is-current', 'is-completed');

          if (stepNumber === this.currentStep) {
            item.classList.add('is-current');
          } else if (stepNumber < this.currentStep) {
            item.classList.add('is-completed');
          }
        });
      }

      /**
       * Handle form field changes to sync to review section
       */
      handleFormChange(e) {
        const input = e.target;

        // Only update review if we're past step 1
        if (this.currentStep >= 4 && input.name) {
          this.updateReviewSection();
        }
      }

      /**
       * Update the review section (Step 4) with current form data
       */
      updateReviewSection() {
        const reviewSection = this.form.querySelector(
          '.prescription-step--4'
        );

        if (!reviewSection) return;

        // Map of form field names to review display field
        const fieldMappings = {
          'attributes[OD SPH]': 'od-sph',
          'attributes[OS SPH]': 'os-sph',
          'attributes[PD]': 'pd',
          'attributes[Lens Type]': 'lens-type',
          'attributes[Lens Material]': 'lens-material',
        };

        // Update each review field
        Object.entries(fieldMappings).forEach(([formFieldName, reviewField]) => {
          const formInput = this.form.querySelector(
            `[name="${formFieldName}"]`
          );
          const reviewElement = reviewSection.querySelector(
            `[data-field="${reviewField}"]`
          );

          if (formInput && reviewElement) {
            const value = formInput.value || '-';
            reviewElement.textContent = value;
          }
        });
      }

      /**
       * Handle form submission
       */
      handleFormSubmit(e) {
        // Let the product-form element handle the actual submission
        // This just validates the final step
        if (!this.validateCurrentStep()) {
          e.preventDefault();
          this.showStepError();
        }
      }

      /**
       * Scroll to form top for mobile users
       */
      scrollToForm() {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
          const offset = this.offsetTop - 100;
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  );
}

/**
 * Enhance product-form element for prescription mode
 * Intercept submission to validate prescription data
 */
if (customElements.get('product-form')) {
  const OriginalProductForm = customElements.get('product-form');

  customElements.define(
    'product-form',
    class ProductFormEnhanced extends OriginalProductForm {
      onSubmitHandler(evt) {
        // Check if this is a prescription form
        const isPrescriptionForm = this.classList.contains(
          'prescription-form'
        );

        if (isPrescriptionForm) {
          // Additional validation for prescription forms
          const requiredFields = this.form.querySelectorAll(
            'input[required], select[required]'
          );

          let hasErrors = false;
          requiredFields.forEach((field) => {
            if (!field.checkValidity()) {
              field.classList.add('is-invalid');
              hasErrors = true;
            }
          });

          if (hasErrors) {
            evt.preventDefault();
            return;
          }
        }

        // Call original submission handler
        super.onSubmitHandler(evt);
      }
    }
  );
}
