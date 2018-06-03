const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function(container) {
  this.container = container;
  this.countryData = null;
}

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:all-countries-loaded', (evt) => {
    this.countryData = evt.detail
    this.populateDropdown(evt.detail);
  });

  this.container.addEventListener('change', (evt) => {

    let countryCode = 'All';

    if (evt.target.value !== 'All') {
      function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key].name === value);
      }

      countryCode = getKeyByValue(this.countryData, evt.target.value);
    }

    PubSub.publish('CountrySelectView:filter-country-selected', countryCode);
  });
};

CountrySelectView.prototype.populateDropdown = function (citiesData) {
  const allCountries = []
  for (var key in citiesData) {
    allCountries.push(citiesData[key].name);
  };

  allCountries.sort(function(countryA, countryB) {
    var nameA = countryA.toUpperCase();
    var nameB = countryB.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  allCountries.forEach((countryName) => {
    const newOption = document.createElement('option');
    newOption.textContent = countryName;
    this.container.appendChild(newOption);
  });
};

module.exports = CountrySelectView;
