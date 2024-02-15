// Function to determine marker size based on earthquake magnitude
function markerSize(magnitude) {
    return magnitude * 5;
}

// Function to determine marker color based on earthquake depth
function markerColor(depth) {
    return depth > 50 ? '#FF4500' :
        depth > 25 ? '#FFA500' :
        '#0000FF';
}

// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 5); // Set default view to San Francisco

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch earthquake data and plot markers
$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson', function (data) {
    L.geoJSON(data.features, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.mag),
                fillColor: markerColor(feature.geometry.coordinates[2]),
                color: '#FF0000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).bindPopup(`<strong>Location:</strong> ${feature.properties.place}<br>
                         <strong>Magnitude:</strong> ${feature.properties.mag}<br>
                         <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km`);
        }
    }).addTo(map);
});