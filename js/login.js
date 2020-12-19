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

/** Reference NOTE: to get the time displaying moving seconds without reloading the entire page every second I found this and formatted it
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





// function tickingTime() {
//     time = new Date();
//     const activeTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
// }

// if (email === "admin@yopmail.com" && password === "adminyopmail") {

// }

