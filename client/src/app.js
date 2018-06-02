const CitiesData = require('./models/cities_data.js');
const CountriesData = require('./models/countries_data.js');
const MapView = require('./views/map_view.js');
const CitiesSelectView = require('./views/cities_select_view.js');
const CitiesInputView = require('./views/cities_input_view.js');
const CountriesInputView = require('./views/countries_input_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const mapDiv = document.getElementById('mapid');
    const glasgowCoords = [33.86, 33.25];
    const zoomLevel = 1;
    const mapView = new MapView(mapDiv, glasgowCoords, zoomLevel);
    mapView.init();
    mapView.setMarker(glasgowCoords);

    const citiesDropdown = document.getElementById('cities-dropdown');
    const citiesSelectView = new CitiesSelectView(citiesDropdown);
    citiesSelectView.bindEvents();


    const countriesInputElement = document.querySelector('#countries-input');
    const countriesInputView = new CountriesInputView(countriesInputElement);
    countriesInputView.addOnKeyUpToCountriesInput();
    countriesInputView.bindEvents();

    const citiesInputElement = document.querySelector('#cities-input');
    const citiesInputView = new CitiesInputView(citiesInputElement, mapView);
    citiesInputView.addOnKeyUpToCitiesInput();
    citiesInputView.bindEvents();


    const countriesData = new CountriesData();
    countriesData.getData();

    const citiesData = new CitiesData();
    citiesData.getData();

});
