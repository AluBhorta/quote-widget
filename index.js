const axios = require("axios");

const api =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
// const quotes = [];
const quoteElem = document.getElementById("quote");
const quoterElem = document.getElementById("quoter");
// let counter = 0;

function updateQuote() {
  // console.log(counter);
  axios
    .get(api)
    .then(res => {
      const { title, content } = res.data[0];
      quoteElem.innerHTML = content;
      quoterElem.textContent = title;
      // counter++;
    })
    .catch(err => console.log(err));
}

updateQuote();
setInterval(updateQuote, 5000);
