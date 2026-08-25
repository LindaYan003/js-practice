const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formMessage = document.getElementById('form-message');

function login(username,{ delay = 500, failureRate = 0.2 } = {}) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < failureRate) {
                reject(new Error('Network request failed'));
            } else {
                resolve(username+'logged in');
            }
        }, delay);
    });
}
function validateField(input, errorEl) {
    if (!input.checkValidity()) {
        errorEl.textContent = input.validationMessage; 
        input.classList.add('invalid');
        return false;
    } else {
        errorEl.textContent = '';
        input.classList.remove('invalid');
        return true;
    }
}
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isEmailValid = validateField(emailInput, emailError);
    const isPasswordValid = validateField(passwordInput, passwordError);

    if (!isEmailValid || !isPasswordValid) {

        formMessage.textContent = 'Please fix the errors above.';
        formMessage.classList.add('error');
        return;
    }

    formMessage.textContent = 'Signing in...';

    try {
        const message = await.login(emailInput);

        formMessage.textContent = ('Login success'+message);
        formMessage.classList.add('success');
        return;

    } catch (error) {

        formMessage.textContent = 'Login failed, please try again later';
        formMessage.classList.add('error');
        return;
    }
 
});
