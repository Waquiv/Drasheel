// let frm = document.getElementById('form');
// console.log(frm);
// Initialize the countdown timer with 60 seconds
let countdown = 5;
let min=9;

function submitBtn() {
    let formElement = document.getElementById("form");
    formElement.remove();
    console.log(formElement);
}

function conv(num) {
    if(num<10){
        console.log('h');
        return ('0'+num);
    
    }
    else{return  num;}
}

// Function to update and display the countdown
function updateCountdown() {
    // Display the current countdown value
    // console.log(countdown);

    // Update the text content of the element with id "sec"
    document.getElementById("sec").textContent = conv(countdown);
    document.getElementById("min").textContent = conv(min);

    // Decrement the countdown value
    countdown--;

    // Check if countdown has reached 0, if so, stop the countdown
    if (countdown < 0) {
        clearInterval(timer);
        console.log("Countdown reached 0, countdown stopped.");
    }
    if(countdown==0){
        countdown=60;
        min--;
    }
}

// Call the updateCountdown function every 1000ms (1 second)
let timer = setInterval(updateCountdown, 1000);
