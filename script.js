//load in earlier time block input values from local storage if they exist
var inputValues = ["", "", "", "", "", "", "", "", ""];
if (localStorage.getItem("inputValuesSto")) {
    inputValues = JSON.parse(localStorage.getItem("inputValuesSto"));
};

//show current date using moment.js
var currentDay = $("#currentDay")[0];
currentDay.textContent = moment().format("dddd, MMMM Do");

//setting color scheme of time blocks based on time
//creating objects to store time block elements and relate a string value representing their hour for use in moment.js comparisons
var nine = {
    spot: $("#nine")[0],
    btnSpot: $("#nineBtn")[0],
    num: "09"
};
var ten = {
    spot: $("#ten")[0],
    btnSpot: $("#tenBtn")[0],
    num: "10"
};
var eleven = {
    spot: $("#eleven")[0],
    btnSpot: $("#elevenBtn")[0],
    num: "11"
};
var twelve = {
    spot: $("#twelve")[0],
    btnSpot: $("#twelveBtn")[0],
    num: "12"
};
var one = {
    spot: $("#one")[0],
    btnSpot: $("#oneBtn")[0],
    num: "13"
};
var two = {
    spot: $("#two")[0],
    btnSpot: $("#twoBtn")[0],
    num: "14"
};
var three = {
    spot: $("#three")[0],
    btnSpot: $("#threeBtn")[0],
    num: "15"
};
var four = {
    spot: $("#four")[0],
    btnSpot: $("#fourBtn")[0],
    num: "16"
};
var five = {
    spot: $("#five")[0],
    btnSpot: $("#fiveBtn")[0],
    num: "17"
};

//put them all in an array for use in a for loop
var all = [nine, ten, eleven, twelve, one, two, three, four, five];

//datey is a base string for setting up comparisons using moment.js
var datey = moment().format("YYYY-MM-DD ");
//rn is the current date and hour
var rn = moment().format("YYYY-MM-DD HH");

//loop through all the time blocks and set their colors using moment.js time comparisons, also set input values and add event listeners to save buttons
for (i = 0; i < all.length; i++) {
    dateyCurrent = datey + all[i].num;
    if (moment(rn).isBefore(dateyCurrent)) {
        all[i].spot.setAttribute("class", "col-10 future");
    };
    if (!(moment(rn).isBefore(dateyCurrent))) {
        all[i].spot.setAttribute("class", "col-10 past");
    }
    if (moment(rn).isSame(dateyCurrent)) {
        all[i].spot.setAttribute("class", "col-10 present");
    };
    //set time block input values to what was saved in local storage
    all[i].spot.setAttribute("value", inputValues[i]);
};

nine.btnSpot.addEventListener("click", function() {saveInput(nine.spot, 0)})
ten.btnSpot.addEventListener("click", function() {saveInput(ten.spot, 1)})
eleven.btnSpot.addEventListener("click", function() {saveInput(eleven.spot, 2)})
twelve.btnSpot.addEventListener("click", function() {saveInput(twelve.spot, 3)})
one.btnSpot.addEventListener("click", function() {saveInput(one.spot, 4)})
two.btnSpot.addEventListener("click", function() {saveInput(two.spot, 5)})
three.btnSpot.addEventListener("click", function() {saveInput(three.spot, 6)})
four.btnSpot.addEventListener("click", function() {saveInput(four.spot, 7)})
five.btnSpot.addEventListener("click", function() {saveInput(five.spot, 8)})


function saveInput(spotty, num) {
    inputValues[num] = spotty.value;
    localStorage.setItem("inputValuesSto", JSON.stringify(inputValues));
}
