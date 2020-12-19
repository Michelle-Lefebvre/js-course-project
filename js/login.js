// get user inputs and store in variables
// const emailAddress = document.getElementById("e-mail");
// const email = emailAddress.value;

// const pass = document.getElementById("pass");
// const password = pass.value;

// display message
const todayMsg = document.getElementById("todayMsg");
const message = todayMsg.textContent = "in init";

// get today's date & store in variable
const today = new Date();

// display current date
const todayDate = document.getElementById("todayDate");
todayDate.innerHTML = `${today.toDateString()}`;


function time() {
    var refresh = location.reload(1000); // refresh every second
    time = setTimeout('displayTime()', refresh)
};

function displayTime() {
    document.getElementById("todayTime").innerHTML = today.toLocaleTimeString('en-US');
}

displayTime(); // calling function stopped the time from flashing every second






// function tickingTime() {
//     time = new Date();
//     const activeTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
// }

// if (email === "admin@yopmail.com" && password === "adminyopmail") {

// }

