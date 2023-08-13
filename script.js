
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateClock, 1000);

const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function get_quote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
    quote.innerHTML = data.content + "<br>" + "<br>";
    author.innerHTML = "- " + data.author + "<br>" + "<br>";
}
get_quote(api_url);


quote.addEventListener("click", function () {
  get_quote(api_url);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    get_quote(api_url);
  }
});