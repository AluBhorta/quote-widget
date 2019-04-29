const axios = require("axios");

//
// variables and elements
//
let intervalTime = 4000;
let interval;
let play = true;
const allQuotes = [];
let currentQuoteIndex = -1;

const quoteElem = document.getElementById("quote");
const quoterElem = document.getElementById("quoter");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevQuoteBtn = document.getElementById("prev-btn");
const nextQuoteBtn = document.getElementById("next-btn");
const intervalTimeInput = document.getElementById("intervalTimeInput");
const intervalSubmitBtn = document.getElementById("intervalSubmitBtn");

//
// functions
//
function handleUpdateQuote() {
  axios
    .get(
      `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${Date()}`
    )
    .then(res => {
      if (play) {
        const { title, content } = res.data[0];
        allQuotes.push({ quote: content, quoter: title });
        currentQuoteIndex++;

        displayCurrentQuote();
      }
    })
    .catch(err => alert(err));
}

function displayCurrentQuote() {
  quoteElem.innerHTML = allQuotes[currentQuoteIndex].quote;
  quoterElem.textContent = allQuotes[currentQuoteIndex].quoter;
}

//
// event handlers
//
playPauseBtn.addEventListener("click", () => {
  play = !play;
  playPauseBtn.innerHTML = play ? "PAUSE" : "PLAY";
});

prevQuoteBtn.addEventListener("click", () => {
  if (currentQuoteIndex > 0) {
    currentQuoteIndex--;
    displayCurrentQuote();
  }
});

nextQuoteBtn.addEventListener("click", () => {
  if (currentQuoteIndex < allQuotes.length - 1) {
    currentQuoteIndex++;
    displayCurrentQuote();
  }
});

intervalSubmitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (
    intervalTimeInput.value !== "" &&
    typeof parseInt(intervalTimeInput.value) === "number"
  ) {
    intervalTime = intervalTimeInput.value;
    intervalTimeInput.value = "";
    clearInterval(interval);
    interval = setInterval(() => {
      if (play) {
        handleUpdateQuote();
      }
    }, intervalTime);
  }
});

//
// MAIN
//

// first update
handleUpdateQuote();
intervalTimeInput.value = intervalTime;

// setting intervals
interval = setInterval(() => {
  if (play) {
    handleUpdateQuote();
  }
}, intervalTime);
