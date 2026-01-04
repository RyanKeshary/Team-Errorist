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

const translations = {
  en: {
    tagline: "Join our emergency response network",
    signupTitle: "Become a Volunteer",
    firstName: "First Name",
    firstNamePlaceholder: "John",
    lastName: "Last Name",
    lastNamePlaceholder: "Doe",
    emailLbl: "Email",
    emailPlaceholder: "volunteer@example.com",
    passwordLbl: "Password",
    passwordPlaceholder: "••••••••",
    minChar: "Minimum 8 characters",
    confirmPassword: "Confirm Password",
    agree: "I agree to the",
    terms: "Terms of Service",
    and: "and",
    privacy: "Privacy Policy",
    createAccount: "Create Account",
    or: "or",
    fbLogin: "Continue with Facebook",
    googleLogin: "Continue with Google",
    alreadyAccount: "Already have an account?",
    signInLink: "Sign in",
  },
  hi: {
    tagline: "हमारे आपातकालीन प्रतिक्रिया नेटवर्क से जुड़ें",
    signupTitle: "एक स्वयंसेवक बनें",
    firstName: "पहला नाम",
    firstNamePlaceholder: "जॉन",
    lastName: "उपनाम",
    lastNamePlaceholder: "डो",
    emailLbl: "ईमेल",
    emailPlaceholder: "volunteer@example.com",
    passwordLbl: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    minChar: "कम से कम 8 अक्षर",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    agree: "मैं सहमत हूँ",
    terms: "सेवा की शर्तें",
    and: "और",
    privacy: "गोपनीयता नीति",
    createAccount: "खाता बनाएं",
    or: "या",
    fbLogin: "Facebook के साथ जारी रखें",
    googleLogin: "Google के साथ जारी रखें",
    alreadyAccount: "क्या आपके पास पहले से एक खाता मौजूद है?",
    signInLink: "साइन इन करें",
  },
  mr: {
    tagline: "आमच्या आपत्कालीन प्रतिसाद नेटवर्कमध्ये सामील व्हा",
    signupTitle: "स्वयंसेवक बना",
    firstName: "पहिले नाव",
    firstNamePlaceholder: "जॉन",
    lastName: "आडनाव",
    lastNamePlaceholder: "डो",
    emailLbl: "ईमेल",
    emailPlaceholder: "volunteer@example.com",
    passwordLbl: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    minChar: "किमान 8 अक्षरे",
    confirmPassword: "पासवर्डची पुष्टी करा",
    agree: "मी सहमत आहे",
    terms: "सेवा अटी",
    and: "आणि",
    privacy: "गोपनीयता धोरण",
    createAccount: "खाते तयार करा",
    or: "किंवा",
    fbLogin: "Facebook सह चालू ठेवा",
    googleLogin: "Google सह चालू ठेवा",
    alreadyAccount: "आधीच खाते आहे?",
    signInLink: "साइन इन करा",
  },
};

function setLanguage(lang) {
  localStorage.setItem("crisisMitraLang", lang); // Persistence
  const sel = document.getElementById("languageSelect");
  if (sel) sel.value = lang;

  // Text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// Initialize Lang
const savedLang = localStorage.getItem("crisisMitraLang") || "en";
setLanguage(savedLang);

if (document.getElementById("languageSelect")) {
  document
    .getElementById("languageSelect")
    .addEventListener("change", (e) => setLanguage(e.target.value));
}

// Sync across tabs
window.addEventListener("storage", (e) => {
  if (e.key === "crisisMitraLang") setLanguage(e.newValue);
});

// --- Signup Action ---
const signupForm = document.querySelector("form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = signupForm.querySelector('button[type="submit"]');
  const originalBtnContent = submitBtn.innerHTML;

  // Validation
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  if (password !== confirmPassword) {
    showNotification("Passwords do not match!", "error");
    return;
  }

  try {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-feather="loader" class="animate-spin w-5 h-5"></i> Processing...`;
    feather.replace();

    const volunteerData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      type: "volunteer",
      timestamp: new Date().toISOString(),
    };

    const volunteersRef = ref(db, "volunteers");
    await push(volunteersRef, volunteerData);

    // Persist Login State
    localStorage.setItem(
      "crisisMitraUser",
      JSON.stringify({
        name: volunteerData.firstName,
        isLoggedIn: true,
        role: "volunteer",
      })
    );

    showNotification(
      "✅ Account created successfully! Redirecting to volunteer portal...",
      "success"
    );
    setTimeout(() => {
      window.location.href = "./volunteer.html";
    }, 1500);
  } catch (err) {
    console.error(err);
    showNotification("Error creating account: " + err.message, "error");
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnContent;
    feather.replace();
  }
});
