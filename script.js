// Initialize the map and set the view to a specific location and zoom level
var map = L.map('map').setView([0, 0], 2);

// Add a tile layer (base map) to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample cancer data with vulnerability index
var cancerData = [
    { "lat": 51.5, "lng": -0.09, "vulnerability_index": 0.8, "city": "London" },
    { "lat": 48.8566, "lng": 2.3522, "vulnerability_index": 0.5, "city": "Paris" },
    { "lat": 40.7128, "lng": -74.0060, "vulnerability_index": 0.6, "city": "New York" },
    { "lat": -33.8688, "lng": 151.2093, "vulnerability_index": 0.7, "city": "Sydney" },
    { "lat": 35.6895, "lng": 139.6917, "vulnerability_index": 0.4, "city": "Tokyo" },
    { "lat": 39.9042, "lng": 116.4074, "vulnerability_index": 0.6, "city": "Beijing" },
    { "lat": 55.7558, "lng": 37.6176, "vulnerability_index": 0.3, "city": "Moscow" },
    { "lat": 40.7306, "lng": -73.9352, "vulnerability_index": 0.9, "city": "Brooklyn" },
    { "lat": -22.9068, "lng": -43.1729, "vulnerability_index": 0.5, "city": "Rio de Janeiro" },
    { "lat": 19.0760, "lng": 72.8777, "vulnerability_index": 0.7, "city": "Mumbai" },
    { "lat": 37.7749, "lng": -122.4194, "vulnerability_index": 0.6, "city": "San Francisco" },
    { "lat": 1.2921, "lng": 36.8219, "vulnerability_index": 0.4, "city": "Nairobi" },
    { "lat": -34.6037, "lng": -58.3816, "vulnerability_index": 0.8, "city": "Buenos Aires" },
    { "lat": 14.5994, "lng": 120.9842, "vulnerability_index": 0.7, "city": "Manila" },
    { "lat": 51.1657, "lng": 10.4515, "vulnerability_index": 0.5, "city": "Berlin" },
    { "lat": 45.4215, "lng": -75.6972, "vulnerability_index": 0.6, "city": "Ottawa" },
    { "lat": 37.9838, "lng": 23.7275, "vulnerability_index": 0.4, "city": "Athens" },
    { "lat": 55.6761, "lng": 12.5683, "vulnerability_index": 0.6, "city": "Copenhagen" },
    { "lat": 40.4168, "lng": -3.7038, "vulnerability_index": 0.7, "city": "Madrid" },
    { "lat": 52.52, "lng": 13.405, "vulnerability_index": 0.5, "city": "Berlin" }
];

// Function to get color based on vulnerability index
function getColor(vulnerabilityIndex) {
    return vulnerabilityIndex > 0.6 ? '#FF0000' : (vulnerabilityIndex > 0.4 ? '#FFFF00' : '#00FF00');
}

// Function to create a custom marker icon based on vulnerability index
function createMarkerIcon(vulnerabilityIndex) {
    return L.divIcon({
        className: 'custom-icon',
        html: '<div style="background-color:' + getColor(vulnerabilityIndex) + '; width: 20px; height: 20px; border-radius: 50%;"></div>',
        iconSize: [20, 20]
    });
}

// Function to create markers for each data point
cancerData.forEach(function(dataPoint) {
    var marker = L.marker([dataPoint.lat, dataPoint.lng], {
        icon: createMarkerIcon(dataPoint.vulnerability_index)
    }).addTo(map);

    // Bind a popup to the marker
    marker.bindPopup("<b>City:</b> " + dataPoint.city + "<br><b>Vulnerability Index:</b> " + dataPoint.vulnerability_index);

    // Bind a tooltip to the marker
    marker.bindTooltip(dataPoint.city + ": " + dataPoint.vulnerability_index, {
        permanent: false,
        direction: 'top'
    });
});
