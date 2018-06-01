const leaflet = require('leaflet');


const MapView = function (mapDiv, coords, zoomLevel) {
  this.mapDiv = mapDiv;
  this.coords = coords;
  this.zoomLevel = zoomLevel;
  this.leafletMap = null;
}

MapView.prototype.init = function () {
  const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const openStreetMapTileLayer = new leaflet.TileLayer(openStreetMapUrl);

  this.leafletMap = leaflet.map(this.mapDiv)
    .addLayer(openStreetMapTileLayer)
    .setView(this.coords, this.zoomLevel);
}

MapView.prototype.setMarker = function(coords) {
  leaflet.marker(coords).addTo(this.leafletMap);
}

module.exports = MapView;
