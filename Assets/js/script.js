// Set variables
let m = moment();
let currentHour = m.format("HH");
let timeTracker = $("#currentDay");
let scheduleTime =  $(".row");
let saveBtn = document.getElementsByClassName(".save-btn")


//Set time
timeTracker.text("It is currently " + m.format("hh:mm A") + " on " + m.format("L"));

// Control schedule rows to display the correct color
let time = 0;
for (i = 0; i < scheduleTime.length; i++) {

    let scheduleTime =  $(".row")[time].id
    let row = $(".row")[time]

    if ( parseInt(currentHour) < parseInt(scheduleTime) ) {
        row.style.backgroundColor = "#3cb371";
    } else if ( parseInt(currentHour) > parseInt(scheduleTime) ) {
        row.style.backgroundColor = "#f8674f";
    } else if ( parseInt(currentHour) == parseInt(scheduleTime) ) {
        row.style.backgroundColor = "transparent";
    }

  time++
}

// Control functions for save buttons & attach event listeners
function saveSchedule9() {

    let input = {
        Event: document.getElementById("input9").value
    }

    localStorage.setItem("9", JSON.stringify(input));

}
document.getElementById("save9").addEventListener("click", saveSchedule9)
var input9 = localStorage.getItem("9")
input9 = JSON.parse(input9)
input9 = input9.Event
document.getElementById("input9").value = input9
 
function saveSchedule10() {

    let input = {
        Event: document.getElementById("input10").value
    }

    localStorage.setItem("10", JSON.stringify(input));

}
document.getElementById("save10").addEventListener("click", saveSchedule10)
var input10 = localStorage.getItem("10")
input10 = JSON.parse(input10)
input10 = input10.Event
document.getElementById("input10").value = input10
 
function saveSchedule11() {

    let input = {
        Event: document.getElementById("input11").value
    }

    console.log(document.getElementById("input11").textContent)
    localStorage.setItem("11", JSON.stringify(input));

}
document.getElementById("save11").addEventListener("click", saveSchedule11)
var input11 = localStorage.getItem("11")
input11 = JSON.parse(input11)
input11 = input11.Event
document.getElementById("input11").value = input11
 
function saveSchedule12() {

    let input = {
        Event: document.getElementById("input12").value
    }

    console.log(document.getElementById("input12").textContent)
    localStorage.setItem("12", JSON.stringify(input));

}
document.getElementById("save12").addEventListener("click", saveSchedule12)
var input12 = localStorage.getItem("12")
input12 = JSON.parse(input12)
input12 = input12.Event
document.getElementById("input12").value = input12
 
function saveSchedule13() {

    let input = {
        Event: document.getElementById("input13").value
    }

    console.log(document.getElementById("input13").textContent)
    localStorage.setItem("1", JSON.stringify(input));

}
document.getElementById("save13").addEventListener("click", saveSchedule13)
var input13 = localStorage.getItem("1")
input13 = JSON.parse(input13)
input13 = input13.Event
document.getElementById("input13").value = input13
 
function saveSchedule14() {

    let input = {
        Event: document.getElementById("input14").value
    }

    console.log(document.getElementById("input14").textContent)
    localStorage.setItem("2", JSON.stringify(input));

}
document.getElementById("save14").addEventListener("click", saveSchedule14)
var input14 = localStorage.getItem("2")
input14 = JSON.parse(input14)
input14 = input14.Event
document.getElementById("input14").value = input14
 
function saveSchedule15() {

    let input = {
        Event: document.getElementById("input15").value
    }

    console.log(document.getElementById("input15").textContent)
    localStorage.setItem("3", JSON.stringify(input));

}
document.getElementById("save15").addEventListener("click", saveSchedule15)
var input15 = localStorage.getItem("3")
input15 = JSON.parse(input15)
input15 = input15.Event
document.getElementById("input15").value = input15
 
function saveSchedule16() {

    let input = {
        Event: document.getElementById("input16").value
    }

    console.log(document.getElementById("input16").textContent)
    localStorage.setItem("4", JSON.stringify(input));

}
document.getElementById("save16").addEventListener("click", saveSchedule16)
var input16 = localStorage.getItem("4")
input16 = JSON.parse(input16)
input16 = input16.Event
document.getElementById("input16").value = input16
 
function saveSchedule17() {

    let input = {
        Event: document.getElementById("input17").value
    }

    console.log(document.getElementById("input17").textContent)
    localStorage.setItem("5", JSON.stringify(input));

}
document.getElementById("save17").addEventListener("click", saveSchedule17)
var input17 = localStorage.getItem("5")
input17 = JSON.parse(input17)
input17 = input17.Event
document.getElementById("input17").value = input17