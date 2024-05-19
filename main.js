const form = document.forms[0];
const firstName = form.elements['first-name'];
const lastName = form.elements['last-name'];
const email = form.elements['email'];
const message = form.elements['message'];
const radioBoxes = form.elements['query'];
const checkBox = form.elements['checkbox'];
const successBox = document.querySelector('.success');

// get errors
const firstNameError = document.querySelector(".first-name-error");
const lasttNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const notValidEmail = document.querySelector(".not-valid");
const queryError = document.querySelector('.choose-query');
const messageError = document.querySelector('.message-error');
const consentError = document.querySelector('.consent');

function checkEmpty(field, error) {
    if (field.value == "") {
        error.classList.add("show");
        field.style.borderColor = '#d94545';
        setTimeout(function() {
            error.classList.remove("show");
            field.style.borderColor = '#87a3a6';
        }, 3000);
        return false;
    }
    return true;
}

function checkEmail(email, error) {
    if (email.value == "") {
        error.classList.add("show");
        email.style.borderColor = '#d94545';
        setTimeout(function() {
            error.classList.remove("show");
            error.textContent = "This field is required";
            email.style.borderColor = '#87a3a6';
        }, 3000);
        return false;
    } else if (email.value.indexOf('@') == -1) {
        email.style.borderColor = '#d94545';
        error.classList.add('show');
        error.textContent = "Please enter a valid email address";
        setTimeout(function() {
            error.classList.remove("show");
            email.style.borderColor = '#87a3a6';
        }, 3000);
        return false;
    } 
    return true;
}

function isChecked(box, error) {
    if (!box.checked) {
        error.classList.add('show');
        setTimeout(function() {
            error.classList.remove("show");
        }, 3000);
        return false;
    }
    return true;
}

function isQuerySelected(boxes, error) {
    let test = false;
    boxes.forEach(box => {
        if (box.checked) {
            test = true;
            return;
        }
    });
    if (!test) {
        error.classList.add('show');
        setTimeout(function() {
            error.classList.remove("show");
        }, 3000);
        return false;
    }
    return true;
}

form.addEventListener("submit", function(e) {
    if (!checkEmpty(firstName, firstNameError) ||
    !checkEmpty(lastName, lasttNameError) ||
    // !checkEmpty(email, emailError) ||
    !checkEmail(email, notValidEmail) ||
    !isQuerySelected(radioBoxes, queryError) ||
    !checkEmpty(message, messageError) ||
    !isChecked(checkBox, consentError)) {
        e.preventDefault();
    } else {
        e.preventDefault();
        e.target.reset();
        successBox.classList.add("show");
        setTimeout(function(){
            successBox.classList.remove("show");
        }, 4000);
    }
});

