const list = document.getElementById("list");
const box = document.querySelector(".box");

async function logJSONData() {
  list.innerHTML = "Loading content..."; // Display loading message

  const response = await fetch(
    "https://api.coingecko.com/api/v3/exchange_rates"
  );
  const jsonData = await response.json();
  const data = jsonData.rates;

  const Api = Object.values(data).map((data) => {
    return `<li class="listItems">
    <div class="listBox"></div>

        <div class="listData">
              <h5 class="f-md mb-2">Rate: ${data.value}</h5>
              <h6 class="f-sm mb-1">Crypto name: ${data.name}</h6>
              <h6 class="f-sm">Crypto unit: ${data.unit}</h6>
        </div>
    </li>`;
  });
  list.innerHTML = Api.join(""); // Replace loading message with API data
  console.log(data);
}

logJSONData();

box.addEventListener("scroll", function () {
  const scrollPosition = box.scrollTop;
  const boxHeight = box.offsetHeight;
  const contentHeight = box.scrollHeight;

  if (scrollPosition + boxHeight >= contentHeight) {
    alert("no more record to be shown");
  }
});
