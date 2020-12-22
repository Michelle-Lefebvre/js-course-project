// ****************   FORM  ******************** /
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
    } else if (emailValue === "" || emailValue === null) {
        setErrorFor(email, 'Email address must be filled in!');
    } else {
        setErrorFor(email, 'Part 2: Email must be: admin@yopmail.com');
    }

    // password
    if (passwardValue === "adminyopmail") {
        setSuccessFor(password);
    } else if (passwardValue === '' || passwardValue === null) {
        setErrorFor(password, 'Password must be filled in!');
    } else if (passwardValue.length < 6) {
        setErrorFor(password, 'Password length must be at least 6 characters!');
    } else {
        setErrorFor(password, 'Part 2: Password must be: adminyopmail');
    }

    // when both email & password match call API
    if (emailValue === "admin@yopmail.com" && passwardValue === "adminyopmail") {
        getWeather();
    }
}

// display error messages for user input
function setErrorFor(input, message) {
    const formItem = input.parentElement;
    const small = formItem.querySelector('small');
    let errors = document.getElementById("errors")
    // display error message
    small.innerText = message;
    errors.textContent = "Error! Please complete the form!";
    // add error class
    formItem.className = 'form-item error';
}
// user input is correct
function setSuccessFor(input) {
    const formItem = input.parentElement;
    formItem.className = 'form-item success';
}

// ****************   Message  Date  Time  ******************** /
// display message
const todayMsg = document.getElementById("todayMsg");
const message = todayMsg.textContent = '"in init"';
todayMsg.style.color = "#2ecc71";

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
    time = setTimeout('displayTime()', refresh);
};

function displayTime() {
    const today = new Date().toLocaleTimeString('en-US');
    document.getElementById("todayTime").innerHTML = today;
    const displaySeconds = currentTime();
}

// ****************   API CALL    ******************** /
// when email and password match give call to weather API using jQuery
function getWeather() {
    $.ajax(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=9iHAYolfpIZFCHqIL7BaOaFBQ2ddua08&metric=true`).done(reqListener).fail(noWeather);
}

// using jQuery what to do with the api
function reqListener(data) {
    // clear error message
    let errors = document.getElementById("errors");
    errors.textContent = "";

    const showWeather = document.getElementById('weather');
    showWeather.innerHTML = "";

    const dateWeather = document.querySelector('.weatherDate');
    const maxWeather = document.querySelector('.weatherMax');
    const minWeather = document.querySelector('.weatherMin');
    const dayWeather = document.querySelector('.weatherDay');
    const nightWeather = document.querySelector('.weatherNight');

    // DailyForecasts / Date 
    for (let i = 0; i < data.DailyForecasts.length; i++) {
        dateWeather.innerText = data.DailyForecasts[i].Date;
        maxWeather.innerText = `${data.DailyForecasts[i].Temperature.Maximum.Value}C`;
        minWeather.innerText = `${data.DailyForecasts[i].Temperature.Minimum.Value}C`;
        dayWeather.innerText = data.DailyForecasts[i].Day.PrecipitationType;
        nightWeather.innerText = data.DailyForecasts[i].Night.PrecipitationType;
    }
}

// api failed
function noWeather() {
    const showWeather = $("#weather")[0];
    showWeather.textContent = "Something went wrong...Can not find the weather.";
}