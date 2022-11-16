// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [40.7899, -111.9791],
    [30.2672, 97.7431],
    [43.6532,79.3832],
    [40.7128,74.0060]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    dashArray: '4',
    color: "blue",
    weight: 4,
    opacity: 0.5
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);