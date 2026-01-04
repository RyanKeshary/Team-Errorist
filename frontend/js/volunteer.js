feather.replace();

const translations = {
  en: {
    title: "CrisisMitra",
    dashboard: "Dashboard",
    sos_alerts: "SOS Alerts",
    volunteer_name: "Volunteer Name",
    joined: "Joined 3 months ago",
    skills: "Skills",
    certifications: "Certifications",
    skill_firstaid: "First Aid",
    skill_rescue: "Search & Rescue",
    skill_translation: "Translation",
    cert_cpr: "CPR Certified",
    cert_emt: "EMT-B",
    training: "Training",
    train_basic: "Basic First Aid",
    completed_2w: "Completed 2 weeks ago",
    train_communication: "Crisis Communication",
    completed_1m: "Completed 1 month ago",
    active_mission: "Active Mission",
    in_progress: "In Progress",
    location: "Location",
    team: "Team",
    started: "Started",
    priority: "Priority",
    high: "High",
    mission_details: "Mission Details",
    mission_text:
      "Provide first aid and evacuation for earthquake victims in downtown area. Multiple casualties reported.",
  },
  hi: {
    title: "क्राइसिस बीकन",
    dashboard: "डैशबोर्ड",
    sos_alerts: "एसओएस अलर्ट",
    volunteer_name: "स्वयंसेवक का नाम",
    joined: "3 महीने पहले जुड़ा",
    skills: "कौशल",
    certifications: "प्रमाण पत्र",
    skill_firstaid: "प्राथमिक चिकित्सा",
    skill_rescue: "खोज और बचाव",
    skill_translation: "अनुवाद",
    cert_cpr: "सीपीआर प्रमाणित",
    cert_emt: "ईएमटी-बी",
    training: "प्रशिक्षण",
    train_basic: "मूल प्राथमिक चिकित्सा",
    completed_2w: "2 सप्ताह पहले पूरा हुआ",
    train_communication: "संकट संचार",
    completed_1m: "1 माह पहले पूरा हुआ",
    active_mission: "सक्रिय मिशन",
    in_progress: "प्रगति पर",
    location: "स्थान",
    team: "दल",
    started: "प्रारंभ",
    priority: "प्राथमिकता",
    high: "उच्च",
    mission_details: "मिशन विवरण",
    mission_text:
      "डाउनटाउन क्षेत्र में भूकंप पीड़ितों को प्राथमिक चिकित्सा और निकासी प्रदान करें। कई हताहतों की सूचना है।",
  },
  mr: {
    title: "क्रायसिस बीकन",
    dashboard: "डॅशबोर्ड",
    sos_alerts: "एसओएस सूचना",
    volunteer_name: "स्वयंसेवकाचे नाव",
    joined: "३ महिने आधी सामील",
    skills: "कौशल्ये",
    certifications: "प्रमाणपत्रे",
    skill_firstaid: "प्राथमिक उपचार",
    skill_rescue: "शोध आणि बचाव",
    skill_translation: "भाषांतर",
    cert_cpr: "सीपीआर प्रमाणित",
    cert_emt: "ईएमटी-बी",
    training: "प्रशिक्षण",
    train_basic: "मूल प्राथमिक उपचार",
    completed_2w: "२ आठवड्यांपूर्वी पूर्ण",
    train_communication: "संकट संवाद",
    completed_1m: "१ महिना आधी पूर्ण",
    active_mission: "सक्रिय मोहिम",
    in_progress: "प्रगतीमध्ये",
    location: "स्थान",
    team: "पथक",
    started: "सुरू झाले",
    priority: "प्राधान्य",
    high: "उच्च",
    mission_details: "मोहिमेचे तपशील",
    mission_text:
      "डाउनटाउन भागातील भूकंपग्रस्तांना प्राथमिक उपचार आणि स्थलांतराची मदत करा. अनेक जखमींची नोंद आहे.",
  },
};

const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  localStorage.setItem("crisisMitraLang", lang);

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  elements.forEach((el) => {
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

// Lang Sync across tabs
window.addEventListener("storage", (e) => {
  if (e.key === "crisisMitraLang") setLanguage(e.newValue);
});

// Personalization
function personalize() {
  const user = JSON.parse(localStorage.getItem("crisisMitraUser"));
  if (user && user.isLoggedIn && user.name) {
    const nameEl = document.getElementById("volunteer-name");
    if (nameEl) nameEl.textContent = user.name;
  }
}
personalize();
