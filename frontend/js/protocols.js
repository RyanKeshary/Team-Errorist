feather.replace();

// Accordion Functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    const icon = header.querySelector('i[data-feather="chevron-down"]');
    content.classList.toggle("open");
    icon.classList.toggle("rotate-180");
  });
});

// Language translations
const translations = {
  en: {
    dashboard: "Dashboard",
    volunteers: "Volunteers",
    protocols: "Protocols",
    title: "Emergency Response Protocols",
    generalSafety: "General Safety Guidelines",
    s1: "Always wear your safety gear before entering a disaster zone.",
    s2: "Never move alone — coordinate with your assigned team leader.",
    s3: "Report any hazards or missing supplies immediately through the app.",
    s4: "Stay aware of surroundings; aftershocks or secondary hazards may occur.",
    medical: "Medical Emergency Protocols",
    m1: "Check for pulse and breathing — administer CPR if trained.",
    m2: "Use emergency bandages to stop bleeding immediately.",
    m3: "Prioritize evacuation for victims with severe trauma.",
    m4: "Use the app’s SOS feature to request medical reinforcement.",
    comm: "Communication & Reporting",
    c1: "Use in-app chat for team communication — avoid personal channels.",
    c2: "Report every mission update within 15 minutes of action.",
    c3: "If offline, record updates manually and sync when online.",
    evac: "Evacuation Protocols",
    e1: "Follow pre-mapped safe routes shown in the mission dashboard.",
    e2: "Assist elderly and disabled individuals first.",
    e3: "Keep evacuees calm; avoid panic through clear communication.",
    e4: "Verify headcount before marking an area as cleared.",
    helpText: "Need clarification on a specific procedure?",
    contact: "Contact Command Center",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    volunteers: "स्वयंसेवक",
    protocols: "प्रोटोकॉल",
    title: "आपातकालीन प्रतिक्रिया प्रोटोकॉल",
    generalSafety: "सामान्य सुरक्षा दिशानिर्देश",
    s1: "आपदा क्षेत्र में प्रवेश करने से पहले हमेशा सुरक्षा उपकरण पहनें।",
    s2: "कभी अकेले न जाएं — अपने टीम लीडर से समन्वय करें।",
    s3: "किसी भी खतरे या कमी को तुरंत ऐप के माध्यम से रिपोर्ट करें।",
    s4: "परिस्थिति से सतर्क रहें; आफ्टरशॉक या द्वितीयक खतरे हो सकते हैं।",
    medical: "चिकित्सा आपातकालीन प्रोटोकॉल",
    m1: "नाड़ी और सांस की जांच करें — प्रशिक्षित हैं तो सीपीआर दें।",
    m2: "खून रोकने के लिए तुरंत आपातकालीन पट्टियाँ लगाएँ।",
    m3: "गंभीर चोट वाले पीड़ितों को पहले निकालें।",
    m4: "चिकित्सा सहायता के लिए ऐप के SOS फीचर का उपयोग करें।",
    comm: "संचार और रिपोर्टिंग",
    c1: "टीम संचार के लिए इन-ऐप चैट का उपयोग करें — व्यक्तिगत चैनल से बचें।",
    c2: "हर मिशन अपडेट को कार्रवाई के 15 मिनट के भीतर रिपोर्ट करें।",
    c3: "ऑफ़लाइन होने पर मैन्युअल रूप से रिकॉर्ड करें और ऑनलाइन होने पर सिंक करें।",
    evac: "निकासी प्रोटोकॉल",
    e1: "मिशन डैशबोर्ड में दिखाए गए पूर्व-मैप किए गए सुरक्षित मार्गों का पालन करें।",
    e2: "सबसे पहले बुजुर्गों और विकलांग व्यक्तियों की मदद करें।",
    e3: "निकास के दौरान शांत रहें और स्पष्ट संवाद बनाए रखें।",
    e4: "क्षेत्र को सुरक्षित घोषित करने से पहले हेडकाउंट की पुष्टि करें।",
    helpText: "किसी विशेष प्रक्रिया पर स्पष्टीकरण चाहिए?",
    contact: "कमांड सेंटर से संपर्क करें",
  },
  mr: {
    dashboard: "डॅशबोर्ड",
    volunteers: "स्वयंसेवक",
    protocols: "प्रोटोकॉल",
    title: "आपत्कालीन प्रतिसाद प्रोटोकॉल",
    generalSafety: "सामान्य सुरक्षा मार्गदर्शक तत्त्व",
    s1: "आपत्ती क्षेत्रात प्रवेश करण्यापूर्वी नेहमी सुरक्षा साधने घाला.",
    s2: "कधीही एकटे जाऊ नका — आपल्या टीम लीडरशी समन्वय साधा.",
    s3: "कोणत्याही धोका किंवा हरवलेल्या वस्तूची तात्काळ अॅपद्वारे नोंद करा.",
    s4: "सभोवतालच्या परिस्थितीची खबरदारी घ्या; आफ्टरशॉक होऊ शकतात.",
    medical: "वैद्यकीय आपत्कालीन प्रोटोकॉल",
    m1: "नाडी आणि श्वास तपासा — प्रशिक्षण घेतले असल्यास सीपीआर द्या.",
    m2: "रक्तस्त्राव थांबवण्यासाठी आपत्कालीन पट्ट्या वापरा.",
    m3: "गंभीर जखमींच्या स्थलांतराला प्राधान्य द्या.",
    m4: "वैद्यकीय मदतीसाठी अॅपमधील SOS फीचर वापरा.",
    comm: "संवाद आणि अहवाल",
    c1: "टीम संवादासाठी अॅपमधील चॅट वापरा — वैयक्तिक चॅनेल टाळा.",
    c2: "प्रत्येक मिशन अपडेट 15 मिनिटांत अहवाल द्या.",
    c3: "ऑफलाइन असताना मॅन्युअली रेकॉर्ड करा आणि ऑनलाइन झाल्यावर सिंक करा.",
    evac: "निर्वासन प्रोटोकॉल",
    e1: "मिशन डॅशबोर्डमध्ये दर्शविलेल्या सुरक्षित मार्गांचे पालन करा.",
    e2: "वृद्ध आणि अपंग लोकांना प्राधान्य द्या.",
    e3: "शांत राहा आणि स्पष्ट संवाद ठेवा.",
    e4: "क्षेत्र सुरक्षित घोषित करण्यापूर्वी लोकसंख्या तपासा.",
    helpText: "एखाद्या विशिष्ट प्रक्रियेबद्दल स्पष्टता हवी आहे?",
    contact: "कमांड सेंटरशी संपर्क साधा",
  },
};

const langSelect = document.getElementById("languageSelect");

function setLanguage(lang) {
  localStorage.setItem("crisisMitraLang", lang);

  // Update Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-key]").forEach((el) => {
    if (translations[lang] && translations[lang][el.dataset.key]) {
      el.textContent = translations[lang][el.dataset.key];
    }
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

// Initialize
const savedLang = localStorage.getItem("crisisMitraLang") || "en";
setLanguage(savedLang);

window.addEventListener("storage", (e) => {
  if (e.key === "crisisMitraLang") {
    setLanguage(e.newValue);
  }
});

// Go-Bag Checklist Logic
const gobagList = document.getElementById("gobag-list");
if (gobagList) {
  const checkboxes = gobagList.querySelectorAll('input[type="checkbox"]');

  // Load saved state
  const savedState = JSON.parse(
    localStorage.getItem("crisisMitraGoBag") || "{}"
  );
  checkboxes.forEach((cb) => {
    const item = cb.dataset.item;
    if (savedState[item]) cb.checked = true;

    cb.addEventListener("change", () => {
      savedState[item] = cb.checked;
      localStorage.setItem("crisisMitraGoBag", JSON.stringify(savedState));

      // Feedback effect
      if (cb.checked) {
        cb.parentElement.classList.add("bg-green-600/10");
        setTimeout(
          () => cb.parentElement.classList.remove("bg-green-600/10"),
          500
        );
      }
    });
  });
}
