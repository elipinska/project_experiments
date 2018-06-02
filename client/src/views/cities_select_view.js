const PubSub = require('../helpers/pub_sub.js');

const CitiesSelectView = function(container) {
  this.container = container;
}

CitiesSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CitiesData:all-cities-loaded', (evt) => {
    this.populateDropdown(evt.detail);
  });
};

CitiesSelectView.prototype.populateDropdown = function (citiesData) {
  citiesData.forEach((city) => {
    if (city.name.toUpperCase().indexOf("WAR") === 0) {
      const newOption = document.createElement('option');
      newOption.textContent = city.name;
      this.container.appendChild(newOption);
    }
  });
};

module.exports = CitiesSelectView;
