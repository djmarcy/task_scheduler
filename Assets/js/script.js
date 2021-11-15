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

    localStorage.setItem("9 A.M.", JSON.stringify(input));

}
document.getElementById("save9").addEventListener("click", saveSchedule9)
 
function saveSchedule10() {

    let input = {
        Event: document.getElementById("input10").value
    }

    localStorage.setItem("10 A.M.", JSON.stringify(input));

}
document.getElementById("save10").addEventListener("click", saveSchedule10)
 
function saveSchedule11() {

    let input = {
        Event: document.getElementById("input11").value
    }

    console.log(document.getElementById("input11").textContent)
    localStorage.setItem("11 A.M.", JSON.stringify(input));

}
document.getElementById("save11").addEventListener("click", saveSchedule11)
 
function saveSchedule12() {

    let input = {
        Event: document.getElementById("input12").value
    }

    console.log(document.getElementById("input9").textContent)
    localStorage.setItem("12 P.M.", JSON.stringify(input));

}
document.getElementById("save12").addEventListener("click", saveSchedule12)
 
function saveSchedule13() {

    let input = {
        Event: document.getElementById("input13").value
    }

    console.log(document.getElementById("input9").textContent)
    localStorage.setItem("1 P.M.", JSON.stringify(input));

}
document.getElementById("save13").addEventListener("click", saveSchedule13)
 
function saveSchedule14() {

    let input = {
        Event: document.getElementById("input14").value
    }

    console.log(document.getElementById("input9").textContent)
    localStorage.setItem("2 P.M.", JSON.stringify(input));

}
document.getElementById("save14").addEventListener("click", saveSchedule14)
 
function saveSchedule15() {

    let input = {
        Event: document.getElementById("input15").value
    }

    console.log(document.getElementById("input9").textContent)
    localStorage.setItem("3 P.M.", JSON.stringify(input));

}
document.getElementById("save15").addEventListener("click", saveSchedule15)
 
function saveSchedule16() {

    let input = {
        Event: document.getElementById("input16").value
    }

    console.log(document.getElementById("input16").textContent)
    localStorage.setItem("4 P.M.", JSON.stringify(input));

}
document.getElementById("save16").addEventListener("click", saveSchedule16)
 
function saveSchedule17() {

    let input = {
        Event: document.getElementById("input17").value
    }

    console.log(document.getElementById("input17").textContent)
    localStorage.setItem("5 P.M.", JSON.stringify(input));

}
document.getElementById("save17").addEventListener("click", saveSchedule17)

