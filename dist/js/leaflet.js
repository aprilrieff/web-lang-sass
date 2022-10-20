var map = L.map('map').setView([41.90960431798947, -91.6506644363861], 17);

var greenIcon = L.icon({
    iconUrl: 'img/leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([41.90960431798947, -91.6506644363861], {icon: myIcon}).addTo(map);

var circle = L.circle([41.91079563884594, -91.65118096766734], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(map);

var polygon = L.polygon([
    [41.910287, -91.650102],
    [41.910287, -91.648900],
    [41.909798, -91.648893],
    [41.909807, -91.650066]

]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);