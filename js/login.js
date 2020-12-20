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
}

function setErrorFor(input, message) {
    const formItem = input.parentElement;
    const small = formItem.querySelector('small');
    const errors = document.getElementById("errors")
    // display error message
    small.innerText = message;

    // add error class
    formItem.className = 'form-item error';
}

function setSuccessFor(input) {
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

// when email and password match give call to weather API using jQuery
function getWeather() {
    $.ajax(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=9iHAYolfpIZFCHqIL7BaOaFBQ2ddua08&metric=true`).done(reqListener).fail(noWeather);
}

// using jQuery what to do with the api
function reqListener(data) {
    // const showWeather = document.getElementById('weather');
    // showWeather.innerHTML = ""; 

    const container = $("#weather")[0];
    container.style.color = "white";
    container.innerHTML = "";

    function appendData(data) {
        var mainContainer = document.getElementById("weather");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = 'Date: ' + data[i].date + ' ' + data[i].lastName;
            mainContainer.appendChild(div);
        }
    }

    for (const [key, value] of Object.entries(data)) {
        const dateWeather = document.getElementById('weatherDate');
        const maxWeather = document.getElementById('weatherMax');
        const minWeather = document.getElementById('weatherMin');
        const dayWeather = document.getElementById('weatherDay');
        const nightWeather = document.getElementById('weatherNight');

        dateWeather.textContent = `${key}: ${value}`;
        maxWeather.textContent = `${key}: ${value}`;
        minWeather.textContent = `${key}: ${value}`;
        dayWeather.textContent = `${key}: ${value}`;
        nightWeather.textContent = `${key}: ${value}`;
    }



    /*
        const dateWeather = document.getElementById('weatherDate');
        const maxWeather = document.getElementById('weatherMax');
        const minWeather = document.getElementById('weatherMin');
        const dayWeather = document.getElementById('weatherDay');
        const nightWeather = document.getElementById('weatherNight');
    
        showWeather.textContent = Object.keys(data.DailyForecasts);
        // DailyForecasts / Date 
        dateWeather.innerText = data.DailyForecasts.Date;
        // DailyForecasts / Temperature / Maximum
        maxWeather.innerText = data.DailyForecasts.Temperature.Maximum.Value;
        // DailyForecasts / Temperature / Minimum
        minWeather.innerText = data.DailyForecasts.Temperature.Minimum.Value;
        // DailyForecasts / Day / PrecipitationType
        dayWeather.innerText = data.DailyForecasts.Day.PrecipitationType;
        // DailyForecasts / Night / PrecipitationType
        nightWeather.innerText = data.DailyForecasts.Night.PrecipitationType;
    
        // showWeather.textContent = Object.keys(showWeather);
        //   
        // showName.textContent = data.keys(data.keys(Headline));
    */
}

// api failed
function noWeather() {
    const showWeather = $("#weather")[0];
    showWeather.textContent = "Something went wrong...Can not find the weather."
}