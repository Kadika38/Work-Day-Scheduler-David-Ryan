//show current date using moment.js
var currentDay = $("#currentDay")[0];
currentDay.textContent = moment().format("dddd, MMMM Do");

//setting color scheme of time blocks based on time
//creating objects to store time block elements and relate a string value representing their hour for use in moment.js comparisons
var nine = {
    spot: $("#nine")[0],
    val: "09"
};
var ten = {
    spot: $("#ten")[0],
    val: "10"
};
var eleven = {
    spot: $("#eleven")[0],
    val: "11"
};
var twelve = {
    spot: $("#twelve")[0],
    val: "12"
};
var one = {
    spot: $("#one")[0],
    val: "13"
};
var two = {
    spot: $("#two")[0],
    val: "14"
};
var three = {
    spot: $("#three")[0],
    val: "15"
};
var four = {
    spot: $("#four")[0],
    val: "16"
};
var five = {
    spot: $("#five")[0],
    val: "17"
};

//put them all in an array for use in a for loop
var all = [nine, ten, eleven, twelve, one, two, three, four, five];

//datey is a base string for setting up comparisons using moment.js
var datey = moment().format("YYYY-MM-DD ");
//rn is the current date and hour
var rn = moment().format("YYYY-MM-DD HH");

//loop through all the time blocks and set their colors using moment.js time comparisons
for (i = 0; i < all.length; i++) {
    dateyCurrent = datey + all[i].val;
    console.log(moment(rn).isSameOrBefore(dateyCurrent));
    if (moment(rn).isBefore(dateyCurrent)) {
        all[i].spot.setAttribute("class", "col-10 future");
    };
    if (!(moment(rn).isBefore(dateyCurrent))) {
        all[i].spot.setAttribute("class", "col-10 past");
    }
    if (moment(rn).isSame(dateyCurrent)) {
        all[i].spot.setAttribute("class", "col-10 present");
    };
};
