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

const todayTime = document.getElementById("todayTime");
todayTime.innerHTML = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;

function tickingTime() {
    const time = new Date();
    time = time.toUTCString();
    const activeTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
}

// if (email === "admin@yopmail.com" && password === "adminyopmail") {

// }

