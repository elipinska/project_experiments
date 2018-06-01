const CitiesData = require('./models/cities-data.js');
const MapView = require('./views/map_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // const citiesData = new CitiesData();\

  const mapDiv = document.getElementById('mapid');
    const glasgowCoords = [33.86, 33.25];
    const zoomLevel = 6;
    const mapView = new MapView(mapDiv, glasgowCoords, zoomLevel);
    mapView.init();
    mapView.setMarker(glasgowCoords);







});
