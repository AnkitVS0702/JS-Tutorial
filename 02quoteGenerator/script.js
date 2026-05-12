const QUOTE_API = "https://dummyjson.com/quotes/random";
const quote = document.querySelector("blockquote");
const author = document.querySelector("span");

async function generateQuote() {
    const data = await fetch(QUOTE_API);
    const obj = await data.json();
    quote.innerHTML = obj.quote;
    author.innerHTML = obj.author;
    console.log("Ankit");
}

function tweet() {
    window.open(" https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Tweet window",
        "width=600, height=300");
}

generateQuote();