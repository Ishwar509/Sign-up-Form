const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const mail = document.querySelector('#mail');
const phoneNumber = document.querySelector('#phoneNumber');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const mailError = document.querySelector('#mail + .error');
const phoneNumberError = document.querySelector('#phoneNumber + .error');
const passwordError = document.querySelector('#password + .error');
const confirmPasswordError = document.querySelector('#confirm-password + .error');


const emptyFirstNameMessage = 'Please enter your first name';
const emptyLastNameMessage = 'Please enter your last name';
const emptyMailMessage = 'Please enter your E-mail';
const emptyPhoneMessage = 'Please enter your Phone Number';
const emptyPasswordMessage = 'Please enter a password';

firstName.setCustomValidity(emptyFirstNameMessage);
lastName.setCustomValidity(emptyLastNameMessage);
mail.setCustomValidity(emptyMailMessage);
phoneNumber.setCustomValidity(emptyPhoneMessage);
password.setCustomValidity(emptyPasswordMessage);

firstName.addEventListener('input', () => {
    firstName.value = firstName.value.trim();

    if(firstName.validity.valueMissing){
        firstName.setCustomValidity(emptyFirstNameMessage);
    }
    else{
        firstName.setCustomValidity('');
    }
});

lastName.addEventListener('input', () => {
    lastName.value = lastName.value.trim();

    if(lastName.validity.valueMissing){
        lastName.setCustomValidity(emptyLastNameMessage);
    }
    else{
        lastName.setCustomValidity('');
    }
});

mail.addEventListener('input', () => {

    if(mail.validity.valueMissing){
        mail.setCustomValidity(emptyMailMessage);
        mailError.textContent = '';
        return;
    }
    if(mail.validity.patternMismatch){
        mail.setCustomValidity('Invalid Format');
        mailError.textContent = 'Please match the proper format';
        return;
    }

    mail.setCustomValidity('');
    mailError.textContent = '';
});

phoneNumber.addEventListener('input', () => {
    if(phoneNumber.validity.valueMissing){
        phoneNumber.setCustomValidity(emptyPhoneMessage);
        phoneNumberError.textContent = '';
        return;
    }
    if(phoneNumber.validity.patternMismatch){
        phoneNumber.setCustomValidity('Invalid Format');
        phoneNumberError.textContent = 'Please match the proper format';
        return;
    }

    phoneNumber.setCustomValidity('');
    phoneNumberError.textContent = '';
});

password.addEventListener('input', () => {
    if(password.validity.valueMissing){
        password.setCustomValidity(emptyPasswordMessage);
        passwordError.textContent = '';
        return;
    }
    if(password.validity.tooShort){
        password.setCustomValidity('Password length must be between 8 - 16 characters');
        passwordError.textContent = 'Password is too short';
        return;
    }

    password.setCustomValidity('');
    passwordError.textContent = '';
});

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value !== password.value){
        confirmPasswordError.textContent = 'Password does not match'
        confirmPassword.setCustomValidity('Password does not match');
        return;
    }
    
    confirmPasswordError.textContent = '';
    confirmPassword.setCustomValidity('');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(form.reportValidity()){
        alert("Form submitted");
    }
});