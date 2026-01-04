// Initialize map
const map = L.map("map").setView([20.5937, 78.9629], 5);

// Use a more readable map theme: CartoDB Voyager
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  }
).addTo(map);

// Load saved SOS markers from localStorage
let sosMarkers = JSON.parse(localStorage.getItem("sosMarkers")) || [];

sosMarkers.forEach((marker) => {
  L.marker([marker.lat, marker.lng])
    .addTo(map)
    .bindPopup(`<b>${marker.title}</b><br>${marker.description}`);
});

// Add new SOS marker on click
map.on("click", function (e) {
  const title = prompt("Enter SOS Title (e.g. 'Flood Help Needed')");
  const description = prompt(
    "Enter short description (e.g. '3 people stranded near river')"
  );
  if (!title || !description) return;

  const newMarker = {
    lat: e.latlng.lat,
    lng: e.latlng.lng,
    title,
    description,
  };

  L.marker([newMarker.lat, newMarker.lng])
    .addTo(map)
    .bindPopup(`<b>${title}</b><br>${description}`)
    .openPopup();

  sosMarkers.push(newMarker);
  localStorage.setItem("sosMarkers", JSON.stringify(sosMarkers));
});

// Clear all markers
document.getElementById("clearMarkers").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all SOS markers?")) {
    localStorage.removeItem("sosMarkers");
    location.reload();
  }
});
