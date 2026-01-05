/**
 * UI Component for Language Switcher
 * Generates the FAB and Modal, handles user interactions.
 */

class LanguageSwitcherUI {
  constructor() {
    this.languages = [
      { code: "en", native: "English", english: "English" },
      { code: "hi", native: "हिंदी", english: "Hindi" },
      { code: "bn", native: "বাংলা", english: "Bengali" },
      { code: "mr", native: "मराठी", english: "Marathi" },
      { code: "te", native: "తెలుగు", english: "Telugu" },
      { code: "ta", native: "தமிழ்", english: "Tamil" },
      { code: "gu", native: "ગુજરાતી", english: "Gujarati" },
      { code: "ur", native: "اردو", english: "Urdu" },
      { code: "kn", native: "ಕನ್ನಡ", english: "Kannada" },
      { code: "or", native: "ଓଡ଼ିଆ", english: "Odia" },
      { code: "ml", native: "മലയാളം", english: "Malayalam" },
      { code: "pa", native: "ਪੰਜਾਬੀ", english: "Punjabi" },
      { code: "as", native: "অসমীয়া", english: "Assamese" },
    ];

    this.initGoogleTranslate();
    this.render();
    this.attachEvents();
    this.updateActiveState();
  }

  initGoogleTranslate() {
    // 1. Add the hidden container if it doesn't exist
    if (!document.getElementById("google_translate_element")) {
      const div = document.createElement("div");
      div.id = "google_translate_element";
      div.style.display = "none";
      document.body.appendChild(div);
    }

    // 2. Define the global callback
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "hi,bn,mr,te,ta,gu,ur,kn,or,ml,pa,as,en",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // 3. Inject the Google script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }

  render() {
    // 1. Create FAB
    this.fab = document.createElement("button");
    this.fab.className = "lang-fab notranslate";
    this.fab.setAttribute("data-tooltip", "Change Language");
    this.fab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    document.body.appendChild(this.fab);

    // 2. Create Modal Overlay
    this.overlay = document.createElement("div");
    this.overlay.className = "lang-modal-overlay notranslate";

    // 3. Create Modal Content
    const modal = document.createElement("div");
    modal.className = "lang-modal";

    // Header
    const header = document.createElement("div");
    header.className = "lang-modal-header";
    header.innerHTML = `
            <h2 class="lang-modal-title">Select Language</h2>
            <button class="lang-modal-close" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        `;

    // Grid
    const grid = document.createElement("div");
    grid.className = "lang-grid";

    this.languages.forEach((lang) => {
      const card = document.createElement("div");
      card.className = "lang-card";
      card.setAttribute("data-lang", lang.code);
      card.innerHTML = `
                <span class="lang-native">${lang.native}</span>
                <span class="lang-english">${lang.english}</span>
            `;
      grid.appendChild(card);
    });

    modal.appendChild(header);
    modal.appendChild(grid);
    this.overlay.appendChild(modal);
    document.body.appendChild(this.overlay);

    // References
    this.closeBtn = header.querySelector(".lang-modal-close");
    this.grid = grid;
  }

  attachEvents() {
    // Open
    this.fab.addEventListener("click", () => this.open());

    // Close
    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Select
    this.grid.addEventListener("click", (e) => {
      const card = e.target.closest(".lang-card");
      if (card) {
        const lang = card.getAttribute("data-lang");
        this.setLanguage(lang);
        this.close();
      }
    });

    // Escape Key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.overlay.classList.contains("open")) {
        this.close();
      }
    });
  }

  setLanguage(langCode) {
    // Reliable method: Set Google Translate cookie and reload
    // Google Translate expects 'googtrans' cookie in format /source/target or /target
    // We strive for /en/target to be explicit.

    // Clear existing to avoid conflicts
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${location.hostname}`;

    if (langCode === "en") {
      // If English (original), just clear and reload
      localStorage.setItem("crisisMitraLang", "en");
      location.reload();
    } else {
      // Set new cookie
      // Note: We need multiple set calls to cover potential domain variations (localhost vs IP)
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${location.hostname}`;

      localStorage.setItem("crisisMitraLang", langCode);
      location.reload();
    }
  }

  updateActiveState() {
    // Google Translate stores preference in a cookie 'googtrans'
    // but we'll also keep our localStorage for UI highlight consistency
    const current = localStorage.getItem("crisisMitraLang") || "en";
    document.querySelectorAll(".lang-card").forEach((card) => {
      if (card.getAttribute("data-lang") === current) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  open() {
    this.overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new LanguageSwitcherUI();
  });
} else {
  new LanguageSwitcherUI();
}
