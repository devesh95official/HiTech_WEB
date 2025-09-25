// DOM Element
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const autEl = document.getElementById("aut");

const apiUrl = `https://api.api-ninjas.com/v1/quotes`;
const apiKey = "api key!!";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const getJoke = async () => {
    try {
        quoteEl.innerText = "Loading...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        const quote = data[0].quote;
        const author = data[0].author;
        console.log(quote);
        quoteEl.innerText = quote;
        autEl.innerText=author;
    } catch (error) {
        quoteEl.innerText = "An error happened, try again later.";
        console.log(error);
    }
};
getJoke();

btnEl.addEventListener("click", getJoke);
