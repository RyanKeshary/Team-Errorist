feather.replace();

const translations = {
  en: {
    tagline: "Emergency Response Volunteer Portal",
    loginTitle: "Volunteer Login",
    emailLbl: "Email",
    emailPlaceholder: "volunteer@example.com",
    passwordLbl: "Password",
    passwordPlaceholder: "••••••••",
    rememberMe: "Remember me",
    forgotPass: "Forgot password?",
    signIn: "Sign In",
    or: "or",
    fbLogin: "Continue with Facebook",
    googleLogin: "Continue with Google",
    noAccount: "Don't have an account?",
    signUpLink: "Sign up now",
    network: "Emergency Response Network",
  },
  hi: {
    tagline: "आपातकालीन प्रतिक्रिया स्वयंसेवक पोर्टल",
    loginTitle: "स्वयंसेवक लॉगिन",
    emailLbl: "ईमेल",
    emailPlaceholder: "स्वयंसेवक@example.com",
    passwordLbl: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    rememberMe: "मुझे याद रखें",
    forgotPass: "पासवर्ड भूल गए?",
    signIn: "साइन इन करें",
    or: "या",
    fbLogin: "Facebook के साथ जारी रखें",
    googleLogin: "Google के साथ जारी रखें",
    noAccount: "खाता नहीं है?",
    signUpLink: "अभी साइन अप करें",
    network: "आपातकालीन प्रतिक्रिया नेटवर्क",
  },
  mr: {
    tagline: "आपत्कालीन प्रतिसाद स्वयंसेवक पोर्टल",
    loginTitle: "स्वयंसेवक लॉगिन",
    emailLbl: "ईमेल",
    emailPlaceholder: "स्वयंसेवक@example.com",
    passwordLbl: "पासवर्ड",
    passwordPlaceholder: "••••••••",
    rememberMe: "मला आठवा",
    forgotPass: "पासवर्ड विसरलात?",
    signIn: "साइन इन करा",
    or: "किंवा",
    fbLogin: "Facebook सह चालू ठेवा",
    googleLogin: "Google सह चालू ठेवा",
    noAccount: "खाते नाही?",
    signUpLink: "आता साइन अप करा",
    network: "आपत्कालीन प्रतिसाद नेटवर्क",
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

// Initialize
const savedLang = localStorage.getItem("crisisMitraLang") || "en";
setLanguage(savedLang);

document
  .getElementById("languageSelect")
  .addEventListener("change", (e) => setLanguage(e.target.value));
