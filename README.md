# leaflet-challenge

## Earthquake Map Visualization

This project provides a visualization of significant earthquake data using Leaflet, a JavaScript library for interactive maps. It fetches earthquake data from the USGS (United States Geological Survey) Significant Earthquakes feed and plots the earthquakes on the map based on their magnitude and depth.

### Features:

#### Marker Size: 
The size of each marker on the map corresponds to the magnitude of the earthquake. Higher magnitude earthquakes are represented by larger markers.
#### Marker Color: 
- Earthquake is greater than 50 kilometers, the function returns the color red. This will indicates a deeper earthquakes.
- Earthquake is between 25 and 50 kilometers, the function returns the color orange. This will indicates earthquakes of moderate depth.
- Earthquake is 25 kilometers or less, the function returns the color blue. This will indicates shallow earthquakes.

#### Interactive Popups: 
Clicking on a marker displays a popup with additional information about the earthquake, including its location, magnitude, and depth.

### Technologies Used:

Leaflet: A JavaScript library for interactive maps, used to display the map and plot earthquake markers.
jQuery: A fast, small, and feature-rich JavaScript library, used to make AJAX requests to fetch earthquake data from the USGS API.

### How to Use:
Access on the webpage link: https://pmadata.github.io/leaflet-challenge/

Ensure you have an internet connection to fetch earthquake data from the USGS API.
Open the index.html file in a web browser.

### Directory Structure:

index.html - HTML file containing the structure of the webpage.
/static/
  -/css
  -style.css
  -/js
  -logic.js

