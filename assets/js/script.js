// All times for the coloring by changing the classes.
var nineAmEl = document.getElementById("9am")
var tenAmEl = document.getElementById("10am")
var elevenAmEl = document.getElementById("11am")
var twelvePmEl = document.getElementById("12pm")
var onePmEl = document.getElementById("1pm")
var twoPmEl = document.getElementById("2pm")
var threePmEl = document.getElementById("3pm")
var fourPmEl = document.getElementById("4pm")
var fivePmEl = document.getElementById("5pm")
var timeEventEl = document.querySelectorAll(".timeEvent")


var SaveBtnEl = $(".saveBtn")

// Has time for formatting for the day 
var now = moment().format("dddd, MMMM Do");
var timeEl = document.querySelector("#currentDay");
var time = moment().format("hh a")

// Displays the current day at the top.
timeEl.textContent = now

// Save Button For the floppy disk to the local storage.
SaveBtnEl.on("click", function() {
    var savedText = $(timeEventEl).val();
    console.log(savedText);
    var textId = $(".timeEvent").attr("id");
    localStorage.setItem(textId, savedText)
})

// All of these if statments add a certain class to add the grey, green, or red coloring.
if (time == "09 am"){
    nineAmEl.classList.add("current")
} else{
    nineAmEl.classList.remove("current")
    nineAmEl.classList.add("past")
}

if (time == "10 am"){
    tenAmEl.classList.add("current")
} else if (time == "09 am"){
    tenAmEl.classList.remove("current")
    tenAmEl.classList.add("future")
} else {
    tenAmEl.classList.remove("future")
    tenAmEl.classList.add("past")
}

if (time == "11 am"){
    elevenAmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am"){
    elevenAmEl.classList.remove("current")
    elevenAmEl.classList.add("future")
} else {
    elevenAmEl.classList.remove("future")
    elevenAmEl.classList.add("past")
}

if (time == "12 pm"){
    twelvePmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am"){
    twelvePmEl.classList.remove("current")
    twelvePmEl.classList.add("future")
} else {
    twelvePmEl.classList.remove("future")
    twelvePmEl.classList.add("past")
}

if (time == "01 pm"){
    onePmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am" || time == "12 am"){
    onePmEl.classList.remove("current")
    onePmEl.classList.add("future")
} else {
    onePmEl.classList.remove("future")
    onePmEl.classList.add("past")
}


if (time == "02 pm"){
    twoPmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am" || time == "12 am" || time == "01 pm"){
    twoPmEl.classList.remove("current")
    twoPmEl.classList.add("future")
} else {
    twoPmEl.classList.remove("future")
    twoPmEl.classList.add("past")
}


if (time == "03 pm"){
    threePmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am" || time == "12 am" || time == "01 pm" || time == "02 pm") {
    threePmEl.classList.remove("current")
    threePmEl.classList.add("future")
} else {
    threePmEl.classList.remove("future")
    threePmEl.classList.add("past")
}


if (time == "04 pm"){
    fourPmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am" || time == "12 am" || time == "01 pm" || time == "02 pm" || time == "03 pm" ){
    fourPmEl.classList.remove("current")
    fourPmEl.classList.add("future")
} else {
    fourPmEl.classList.remove("future")
    fourPmEl.classList.add("past")
}


if (time == "05 pm"){
    fivePmEl.classList.add("current")
} else if (time == "09 am" || time == "10 am" || time == "11 am" || time == "12 am" || time == "01 pm" 
|| time == "02 pm" || time == "03 pm" || time == "04 pm"){
    fivePmEl.classList.remove("current")
    fivePmEl.classList.add("future")
} else {
    fivePmEl.classList.remove("future")
    fivePmEl.classList.add("past")
}

// Shows the local storage to the individual 
function showStorage() {
    $(".timeEvent").each(function (){
        var textId = $(this).attr("id")
        var textValue = localStorage.getItem(textId)
        $(this).val(textValue, textId)
    })
}

// Shows local storage and shows in text boxes.
console.log(localStorage)
showStorage();