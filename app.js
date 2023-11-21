
const registrationForm = document.querySelector('form');
registrationForm.addEventListener('submit', check);


function check(event) {
    event.preventDefault();

    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const errorMessage = document.querySelector('.error');

    if (password !== confirmPassword) {
        errorMessage.style.visibility = 'visible';
    }
    else {
        alert("Registration Successfull");
        errorMessage.style.visibility = 'hidden';
    }
}