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

// Check if user came from SOS page to select location
const returnToSOS = sessionStorage.getItem("returnToSOS");

// Add new SOS marker on click OR select location for SOS
map.on("click", function (e) {
  if (returnToSOS === "true") {
    // Location selection mode for SOS page
    const coords = `${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`;
    sessionStorage.setItem("selectedLocation", coords);
    sessionStorage.removeItem("returnToSOS");

    // Add temporary marker to show selection
    L.marker([e.latlng.lat, e.latlng.lng])
      .addTo(map)
      .bindPopup(`<b>Selected Location</b><br>Returning to SOS page...`)
      .openPopup();

    // Return to SOS page after short delay
    setTimeout(() => {
      window.location.href = "sos.html";
    }, 1000);
  } else {
    // Normal SOS marker creation mode
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
  }
});

// Clear all markers
document.getElementById("clearMarkers").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all SOS markers?")) {
    localStorage.removeItem("sosMarkers");
    location.reload();
  }
});

// Show instruction if in location selection mode
if (returnToSOS === "true") {
  const instructionCard = document.querySelector(".card.p-6");
  if (instructionCard) {
    instructionCard.innerHTML = `
      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center shrink-0">
        <i data-feather="map-pin" class="text-green-500"></i>
      </div>
      <div>
        <p class="text-white font-medium">Select Your Location</p>
        <p class="text-[#888] text-sm">
          Click anywhere on the map to <b class="text-green-400">select your location</b> for the SOS alert. You will be redirected back to the SOS page.
        </p>
      </div>
    `;
    feather.replace();
  }
}
