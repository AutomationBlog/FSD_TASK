// Import the xhr2 package
const XMLHttpRequest = require("xhr2");
let countryResponse;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  countryResponse = JSON.parse(xhr.responseText);
  //console.log(countryResponse);
  asiaCountries(countryResponse);
  populationCountries(countryResponse);
  countryDetails(countryResponse);
  totalPopulation(countryResponse);
  usDollarCounries(countryResponse);
};

function asiaCountries(country) {
  console.log("********** Get all the countries from Asia continent /region using Filter function **********");
  const asiaCountries = country.filter(country => country.region === 'Asia');
  asiaCountries.forEach(country => {
    console.log(country.name.common);
  });
  //console.log("********** *********** **********");
}

function populationCountries(country) {
  console.log("********** Get all the countries with a population of less than 2 lakhs using Filter function **********");
  const popCountries = country.filter(country => country.population > 200000 );
  popCountries.forEach(country => {
    console.log(country.name.common);
  });
  //console.log("********** *********** **********");
}
function countryDetails(country) {
  console.log("********** Print the following details name, capital, flag, using forEach function **********");
  country.forEach(country => {
    console.log(`============ \n Name: ${country.name.common} \n Capital: ${country.capital} \n Flag: ${country.flag} \n ============`);
  });
  //console.log("********** *********** **********");
}
function totalPopulation(country) {
  console.log("********** Print the total population of countries using reduce function **********");
  const totalPopulation = country.reduce((value, country) => {
      return value + country.population;
  }, 0);
  console.log("Total Population ::: " + totalPopulation);
  //console.log("********** *********** **********");
}

function usDollarCounries(country) {
  console.log("********** Print the country that uses US dollars as currency. **********");
  const usDollarCountries = country.filter(country => {
    const currencies = Object.values(country.currencies || {});
    return currencies.includes('USD');
  });
  console.log(usDollarCountries.length);
  /*usDollarCountries.forEach(country => {
      console.log(country.name.common);
  });*/
  //console.log("********** *********** **********");
}
