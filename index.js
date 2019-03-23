const axios = require("axios");

const quoteElem = document.getElementById("quote");
const quoterElem = document.getElementById("quoter");

function updateQuote() {
  axios
    .get(
      `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${Date()}`
    )
    .then(res => {
      const { title, content } = res.data[0];
      quoteElem.innerHTML = content;
      quoterElem.textContent = title;
    })
    .catch(err => console.log(err));
}

updateQuote();
setInterval(updateQuote, 4000);
