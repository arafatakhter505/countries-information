const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("col");
    countryDiv.innerHTML = `
    <div class="card">
        <img src= ${country.flags.png} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text">Capital: ${
              country.capital ? country.capital[0] : "No Capital"
            }</p>
            <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
            country.cca2
          }">
            More Details
          </button>

          <!-- Modal -->
          <div class="modal fade" id="${
            country.cca2
          }" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${
                    country.name.common
                  }</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src= ${
                    country.flags.png
                  } class="card-img-top mb-3" alt="..." />
                  <p>Capital: ${
                    country.capital ? country.capital[0] : "No Capital"
                  }</p>
                  <p>Independent: ${
                    country.independent == true ? "Yes" : "No"
                  }</p>
                  <p>Region: ${country.region}</p>
                  <p>Start Of Week: ${country.startOfWeek}</p>
                  <p>Population: ${country.population}</p>
                  <a href=${
                    country.maps.googleMaps
                  } target="_blank">Google Map</a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

document.getElementById("search-btn").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if (searchText !== "") {
    fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      .then((res) => res.json())
      .then((data) => displaySearch(data));
  }
});

const displaySearch = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  countriesContainer.textContent = ``;
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("col");
    countryDiv.innerHTML = `
    <div class="card">
        <img src= ${country.flags.png} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text">Capital: ${
              country.capital ? country.capital[0] : "No Capital"
            }</p>
            <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${
            country.cca2
          }">
            More Details
          </button>

          <!-- Modal -->
          <div class="modal fade" id="${
            country.cca2
          }" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">${
                    country.name.common
                  }</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src= ${
                    country.flags.png
                  } class="card-img-top mb-3" alt="..." />
                  <p>Capital: ${
                    country.capital ? country.capital[0] : "No Capital"
                  }</p>
                  <p>Independent: ${
                    country.independent == true ? "Yes" : "No"
                  }</p>
                  <p>Region: ${country.region}</p>
                  <p>Start Of Week: ${country.startOfWeek}</p>
                  <p>Population: ${country.population}</p>
                  <a href=${
                    country.maps.googleMaps
                  } target="_blank">Google Map</a>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};

loadCountries();
