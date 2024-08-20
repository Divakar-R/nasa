document.addEventListener("DOMContentLoaded", () => {
  const dataContainer = document.getElementById("dataContainer");
  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; // NASA API

  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(`Failed to fetch data from ${url}:`, error);
      });
  }

  function displayData(data) {
    const card = document.createElement("div");
    card.className = "col-md-12";

    card.innerHTML = `
            <div class="card">
                <img src="${data.url}" class="card-img-top" alt="NASA Astronomy Picture">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.explanation}</p>
                </div>
            </div>
        `;

    dataContainer.appendChild(card);
  }

  fetchData(apiUrl).then((data) => {
    if (data) {
      displayData(data);
    }
  });
});
