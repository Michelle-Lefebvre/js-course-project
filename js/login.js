// reference video for form validation: https://www.youtube.com/watch?v=rsd4FNGTRBw

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

// validate user inputs
function checkInputs() {
    // get user values
    const emailValue = email.value.trim();
    const passwardValue = password.value.trim();

    // validate email
    if (emailValue === "admin@yopmail.com") {
        setSuccessFor(email);
    }

    if (emailValue === "" || emailValue === null) {
        setErrorFor(email, 'Email address must be filled in!');
    } else {
        setErrorFor(email, 'Part 2: Email should be: admin@yopmail.com');
    }

    // password
    if (passwardValue === "adminyopmail") {
        setSuccessFor(password);
    }

    if (passwardValue === '' || passwardValue === null) {
        setErrorFor(password, 'Password must be filled in!');
    } else if (passwardValue.length < 6) {
        setErrorFor(password, 'Password length must be at least 6 characters!');
    } else {
        setErrorFor(password, 'Password must be: adminyopmail');
    }


}

function setErrorFor(input, message) {
    const formItem = input.parentElement;
    const small = formItem.querySelector('small');
    const errors = document.getElementById("errors")
    // display error message
    small.innerText = message;

    // add error class
    formItem.className = 'form-item error';
    errors.textContent = "Error! Please complete the form!";
}

function setSuccessFor() {
    const formItem = input.parentElement;
    formItem.className = 'form-item success';
}

// ****************   Message  Date  Time  ******************** /
// display message
const todayMsg = document.getElementById("todayMsg");
const message = todayMsg.textContent = "in init";

// get today's date & store in variable
const today = new Date();

// display current date
const todayDate = document.getElementById("todayDate");
todayDate.innerHTML = `${today.toDateString()}`;

/** Reference NOTE: to get the time displaying moving seconds without reloading the entire page every second I found this then formatted it with .toLocaleTimeString()
 https://www.plus2net.com/javascript_tutorial/clock-toggle.php 
 */
function currentTime() {
    var refresh = 1000; // refresh every second
    time = setTimeout('displayTime()', refresh)
};

function displayTime() {
    const today = new Date().toLocaleTimeString('en-US');
    document.getElementById("todayTime").innerHTML = today;
    const displaySeconds = currentTime();
}