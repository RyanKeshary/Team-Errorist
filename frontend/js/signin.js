import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSRuiYXqJrHmYphpx_sr3WOCGYRokVpLM",
  authDomain: "crisismitra.firebaseapp.com",
  databaseURL: "https://crisismitra-default-rtdb.firebaseio.com",
  projectId: "crisismitra",
  storageBucket: "crisismitra.firebasestorage.app",
  messagingSenderId: "539607481271",
  appId: "1:539607481271:web:fa3759fa9e39483ae38632",
  measurementId: "G-QYZMHR61M3",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
feather.replace();

// Translations (reduced for brevity in execution)
const translations = {
  en: {
    signinTitle: "Sign In / Register",
    tagline: "Stay connected and save your emergency contacts",
    nameLbl: "Full Name",
    namePlaceholder: "Your name",
    phoneLbl: "Phone Number",
    emailLbl: "Email (Optional)",
    emailPlaceholder: "you@example.com",
    addressLbl: "Address (Optional)",
    addressPlaceholder: "Your address",
    emergencyContacts: "Emergency Contacts",
    c1Name: "Contact 1 Name",
    c1Phone: "Contact 1 Phone",
    c2Name: "Contact 2 Name",
    c2Phone: "Contact 2 Phone",
    remember: "Remember me on this device",
    continue: "Continue",
    backHome: "← Back to Home",
  },
  hi: {
    signinTitle: "साइन इन / रजिस्टर",
    tagline: "जुड़े रहें और अपने आपातकालीन संपर्क सहेजें",
    nameLbl: "पूरा नाम",
    namePlaceholder: "आपका नाम",
    phoneLbl: "फ़ोन नंबर",
    emailLbl: "ईमेल (वैकल्पिक)",
    emailPlaceholder: "you@example.com",
    addressLbl: "पता (वैकल्पिक)",
    addressPlaceholder: "आपका पता",
    emergencyContacts: "आपातकालीन संपर्क",
    c1Name: "संपर्क 1 नाम",
    c1Phone: "संपर्क 1 फ़ोन",
    c2Name: "संपर्क 2 नाम",
    c2Phone: "संपर्क 2 फ़ोन",
    remember: "इस डिवाइस पर मुझे याद रखें",
    continue: "जारी रखें",
    backHome: "← होम पर वापस",
  },
  mr: {
    signinTitle: "साइन इन / नोंदणी",
    tagline: "कनेक्ट रहा आणि आपले आपत्कालीन संपर्क जतन करा",
    nameLbl: "पूर्ण नाव",
    namePlaceholder: "तुमचे नाव",
    phoneLbl: "फोन नंबर",
    emailLbl: "ईमेल (पर्यायी)",
    emailPlaceholder: "you@example.com",
    addressLbl: "पत्ता (पर्यायी)",
    addressPlaceholder: "तुमचा पत्ता",
    emergencyContacts: "आपत्कालीन संपर्क",
    c1Name: "संपर्क १ नाव",
    c1Phone: "संपर्क १ फोन",
    c2Name: "संपर्क २ नाव",
    c2Phone: "संपर्क २ फोन",
    remember: "या डिव्हाइसवर मला लक्षात ठेवा",
    continue: "पुढे चालू ठेवा",
    backHome: "← मुख्य पृष्ठावर परत",
  },
};

function setLanguage(lang) {
  localStorage.setItem("crisisMitraLang", lang); // Persistence
  const sel = document.getElementById("languageSelect");
  if (sel) sel.value = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Initialize
const savedLang = localStorage.getItem("crisisMitraLang") || "en";
setLanguage(savedLang);

if (document.getElementById("languageSelect")) {
  document
    .getElementById("languageSelect")
    .addEventListener("change", (e) => setLanguage(e.target.value));
}

const submitBtn = document.getElementById("signinSubmitBtn");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const originalBtnContent = submitBtn.innerHTML;

  // Loading State
  submitBtn.style.pointerEvents = "none";
  submitBtn.style.opacity = "0.7";
  submitBtn.innerHTML = `<i data-feather="loader" class="animate-spin"></i> <span>Processing...</span>`;
  feather.replace();

  try {
    const userData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      emergencyContacts: [
        {
          name: document.getElementById("contact1-name").value,
          phone: document.getElementById("contact1-phone").value,
        },
        {
          name: document.getElementById("contact2-name").value,
          phone: document.getElementById("contact2-phone").value,
        },
      ],
      remember: document.getElementById("remember").checked,
      timestamp: new Date().toISOString(),
    };

    // Validation
    if (!userData.name || !userData.phone) {
      throw new Error("Name and Phone are required.");
    }

    const usersRef = ref(db, "users");
    await push(usersRef, userData);

    // Persist Login State for UI logic
    localStorage.setItem(
      "crisisMitraUser",
      JSON.stringify({
        name: userData.name,
        isLoggedIn: true,
      })
    );

    showNotification(
      "✅ Signed in successfully! Your details are saved securely.",
      "success"
    );

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1500);
  } catch (error) {
    console.error("Submission Error:", error);
    showNotification(
      `❌ Sign-in failed: ${error.message}. Please check your details and try again.`,
      "error"
    );

    // Reset Button
    submitBtn.style.pointerEvents = "auto";
    submitBtn.style.opacity = "1";
    submitBtn.innerHTML = originalBtnContent;
    feather.replace();
  }
});
