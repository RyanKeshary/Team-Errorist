feather.replace();

// Map
const map = L.map("map").setView([20.5937, 78.9629], 5);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let sosMarkers = JSON.parse(localStorage.getItem("sosMarkers")) || [];
sosMarkers.forEach((marker) => {
  L.marker([marker.lat, marker.lng])
    .addTo(map)
    .bindPopup(`<b>${marker.title}</b><br>${marker.description}`);
});

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

document.getElementById("clearMarkers").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all SOS markers?")) {
    localStorage.removeItem("sosMarkers");
    location.reload();
  }
});

// Translations
const translations = {
  en: {
    sosBtn: "SOS",
    volunteerLogin: "Volunteer Login",
    responseDashboard: "Response Dashboard",
    activeAlerts: "Active Alerts",
    responders: "Responders",
    resolvedToday: "Resolved Today",
    mapTitle: "Interactive Incident Map",
    clearMarkers: "Clear All Markers",
  },
  hi: {
    sosBtn: "एसओएस",
    volunteerLogin: "स्वयंसेवक लॉगिन",
    responseDashboard: "प्रतिक्रिया डैशबोर्ड",
    activeAlerts: "सक्रिय अलर्ट",
    responders: "उत्तरदाता",
    resolvedToday: "आज हल किए गए",
    mapTitle: "इंटरएक्टिव घटना मानचित्र",
    clearMarkers: "सभी मार्कर हटाएं",
  },
  mr: {
    sosBtn: "एसओएस",
    volunteerLogin: "स्वयंसेवक लॉगिन",
    responseDashboard: "प्रतिसाद डॅशबोर्ड",
    activeAlerts: "सक्रिय चेतावणी",
    responders: "प्रतिसादकर्ते",
    resolvedToday: "आज निराकरण झालेले",
    mapTitle: "परस्परसंवादी घटना नकाशा",
    clearMarkers: "सर्व मार्कर साफ करा",
  },
};

function setLanguage(lang) {
  localStorage.setItem("crisisMitraLang", lang);

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Initialize
const savedLang = localStorage.getItem("crisisMitraLang") || "en";
setLanguage(savedLang);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

window.addEventListener("storage", (e) => {
  if (e.key === "crisisMitraLang") {
    setLanguage(e.newValue);
  }
});
