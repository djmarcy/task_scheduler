// Set variables
let m = moment();
let currentHour = m.format("HH")
let timeTracker = $("#currentDay")
let scheduleTime =  $(".row")

console.log(scheduleTime)

// Control schedule rows to display the correct color
let time = 0
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
    console.log(scheduleTime)
}

// Control function for save button
    function saveSchedule() {

        // Store which box the input is being entered into
        let schedule = JSON.parse(localStorage.getItem("dataKey")) || [];

        // Store which save button was clicked

        // Ensure on refresh that saved information is being output to correct input box — set input default to whatever's in local storage?
    
    }

    //Retrieve what's stored in Local Storage upon page load
    document.getElementById('header').value = window.localStorage['header'];

    function saveScore() {
        let hallOfFame = JSON.parse(localStorage.getItem("dataKey")) || [];
      
        let topScores = {
          Initials: document.getElementById("high-score-initials").value,
          Score: timeLeft,
        };
      
        hallOfFame.push(topScores);
      
        localStorage.setItem("dataKey", JSON.stringify(hallOfFame));
      
        for (let i = 0; i < hallOfFame.length; i++) {
          $("#top-scores").append(
            "<li class='scores'>" +
              hallOfFame[i].Initials +
              " — " +
              hallOfFame[i].Score +
              "</li>"
          );
        }
    }

    function action() {
        window.localStorage['header'] = document.getElementById('header').value;
    }

    function action2() {
        
    }

timeTracker.text("It is currently " + m.format("hh:mm A") + " on " + m.format("L"))

addEventListener.scheduleTime("click", saveSchedule);