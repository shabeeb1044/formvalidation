document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const submitBtn = document.querySelector('.submit-btn');
    const messageBoxContainer = document.getElementById('message-box-container');
    hideAllErrorMessages();
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const formData = getFormData();
            console.log('Form data:', formData);

            showSuccessMessage()
            // Here you can send the formData to your server or perform other actions
            
            // Hide all error messages and reset form after successful validation
            resetForm();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate First Name
        const firstName = document.querySelector('input[name="firstName"]');
        const firstNameError = document.querySelector('.first-name-errr');
        if (!firstName.value.trim()) {
            firstNameError.style.display = 'block';
            isValid = false;
        } else {
            firstNameError.style.display = 'none';
        }

        // Validate Last Name
        const lastName = document.querySelector('input[name="lastName"]');
        const lastNameError = document.querySelector('.last-name-err');
        if (!lastName.value.trim()) {
            lastNameError.style.display = 'block';
            isValid = false;
        } else {
            lastNameError.style.display = 'none';
        }

        // Validate Email
        const email = document.querySelector('input[name="email"]');
        const emailError = document.querySelector('.email-err');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Query Type
        const queryTypes = document.querySelectorAll('input[name="queryType"]');
        const queryError = document.querySelector('.query-err');
        if (!Array.from(queryTypes).some(radio => radio.checked)) {
            queryError.style.display = 'block';
            isValid = false;
        } else {
            queryError.style.display = 'none';
        }

        // Validate Message
        const message = document.querySelector('#message');
        const messageError = document.querySelector('.error-message');
        if (!message.value.trim()) {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        // Validate Consent
        const consent = document.querySelector('input[type="checkbox"]');
        const consentError = document.querySelector('.err-contacte');
        if (!consent.checked) {
            consentError.style.display = 'block';
            isValid = false;
        } else {
            consentError.style.display = 'none';
        }

        return isValid;
    }

    function getFormData() {
        return {
            firstName: document.querySelector('input[name="firstName"]').value.trim(),
            lastName: document.querySelector('input[name="lastName"]').value.trim(),
            email: document.querySelector('input[name="email"]').value.trim(),
            queryType: document.querySelector('input[name="queryType"]:checked').nextElementSibling.textContent.trim(),
            message: document.querySelector('#message').value.trim(),
            consent: document.querySelector('input[type="checkbox"]').checked
        };
    }

    function hideAllErrorMessages() {
        const errorMessages = document.querySelectorAll('.first-name-errr, .last-name-err, .email-err, .query-err, .error-message, .err-contacte');
        errorMessages.forEach(errorMsg => {
            errorMsg.style.display = 'none';
        });
    }

    function resetForm() {
        form.reset();
        hideAllErrorMessages();
    }


    function showSuccessMessage() {
        messageBoxContainer.classList.remove('d-none');
        setTimeout(() => {
            messageBoxContainer.classList.add('d-none');
        }, 5000); // Hide after 5 seconds
    }
});