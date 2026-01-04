// ===========================
// ACHIEVEMENT DATA
// ===========================

const achievementData = {
  1: {
    icon: "🏆",
    date: "2024",
    title: "JARVIS 24-Hour Hackathon - 1st Place Winner",
    content: `
    <p>Secured <strong>1st Place</strong> at the JARVIS 24-Hour Hackathon for developing <strong>CrisisMitra</strong> — a real-time disaster management platform connecting victims, volunteers, and authorities, even in low-connectivity environments.</p>

    <p>The project featured live geolocation mapping, multilingual support, offline synchronization, and AI-powered natural language processing for interpreting crisis reports.</p>

    <p><strong>Key contributions:</strong></p>
    <ul>
      <li>Led frontend development and live map integration using Leaflet.js and OpenStreetMap</li>
      <li>Implemented multilingual interface (English, Hindi, Marathi) for inclusive accessibility</li>
      <li>Collaborated on AI-driven NLP using spaCy for offline crisis report parsing</li>
      <li>Integrated Firebase for real-time synchronization and data persistence</li>
      <li>Delivered a full-stack prototype within 24 hours under intense time pressure</li>
    </ul>

    <p>This win reinforced my ability to prototype fast, collaborate under pressure, and design scalable, socially impactful tech solutions.</p>

    <p style="margin-top: 10px;">
      <strong>Links:</strong>
      <a href="https://x.com/RyanKeshary/status/1977718825521983632" target="_blank" style="
        color: #00b2bfff;
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;
      " 
      onmouseover="this.style.color='#00e0c3'; this.style.borderBottom='1px solid currentColor'"
      onmouseout="this.style.color='#00b2bfff'; this.style.borderBottom='1px solid transparent'">
        Twitter
      </a>
      &nbsp;•&nbsp;
      <a href="https://www.linkedin.com/posts/ryankeshary_hackathon-firstplace-crisismitra-activity-7383482917143949312-8l0d" target="_blank" style="
        color: #00b2bfff;
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;
      " 
      onmouseover="this.style.color='#00e0c3'; this.style.borderBottom='1px solid currentColor'"
      onmouseout="this.style.color='#00b2bfff'; this.style.borderBottom='1px solid transparent'">
        LinkedIn
      </a>
    </p>
  `,
  },

  // 2: {
  //     icon: '',
  //     date: '2023',
  //     title: 'Full-Stack Certification',
  //     content: `
  //         <p>Completed comprehensive full-stack development program, mastering modern web technologies and best practices in software engineering.</p>

  //         <p>This intensive certification program covered the entire software development lifecycle, from planning and design to deployment and maintenance. The curriculum included:</p>

  //         <ul>
  //             <li>Frontend development with React, Vue.js, and modern JavaScript</li>
  //             <li>Backend development using Node.js, Express, and RESTful API design</li>
  //             <li>Database design and management with SQL and NoSQL databases</li>
  //             <li>DevOps practices including CI/CD, Docker, and cloud deployment</li>
  //             <li>Software architecture patterns and system design principles</li>
  //             <li>Agile methodologies and project management</li>
  //         </ul>

  //         <p>Throughout the program, I completed multiple real-world projects, including an e-commerce platform, a social media application, and a data analytics dashboard. These projects allowed me to apply theoretical knowledge to practical scenarios and build a strong portfolio.</p>

  //         <p>The certification validated my skills and prepared me for tackling complex development challenges in professional environments.</p>
  //     `
  // },
  // 3: {
  //     icon: '💡',
  //     date: '2023',
  //     title: 'Open Source Contributor',
  //     content: `
  //         <p>Active contributor to multiple open-source projects, helping improve documentation and implementing new features for the developer community.</p>

  //         <p>My open-source journey began with fixing small bugs and has evolved into making significant contributions to several major projects. I believe in giving back to the community that has provided so many valuable tools and learning resources.</p>

  //         <p>Notable contributions include:</p>
  //         <ul>
  //             <li>Improved documentation for a popular React UI library, making it more accessible to beginners</li>
  //             <li>Implemented new features for a Node.js testing framework used by thousands of developers</li>
  //             <li>Fixed critical bugs in a data visualization library</li>
  //             <li>Contributed to internationalization efforts for several projects</li>
  //             <li>Mentored new contributors and reviewed pull requests</li>
  //         </ul>

  //         <p>Through open-source contributions, I've learned the importance of code quality, documentation, testing, and collaboration. Working with developers from around the world has exposed me to different perspectives and best practices.</p>

  //         <p>I continue to actively maintain several repositories and look for opportunities to contribute to projects that align with my interests and expertise.</p>
  //     `
  // },
  // 4: {
  //     icon: '🌟',
  //     date: '2022',
  //     title: 'Best Project Award',
  //     content: `
  //         <p>Received recognition for outstanding project design and implementation in university capstone project, demonstrating advanced technical skills and innovation.</p>

  //         <p>Our capstone project focused on developing an intelligent transportation system that could optimize traffic flow in urban areas using real-time data and predictive analytics.</p>

  //         <p>The project included:</p>
  //         <ul>
  //             <li>IoT sensor integration for real-time traffic monitoring</li>
  //             <li>Machine learning algorithms for traffic pattern prediction</li>
  //             <li>Web-based dashboard for city planners and traffic management</li>
  //             <li>Mobile application for commuters with route optimization</li>
  //             <li>Comprehensive testing with simulated traffic scenarios</li>
  //         </ul>

  //         <p>What set our project apart was not just the technical implementation, but also the thorough research, user-centered design approach, and potential real-world impact. We conducted extensive user interviews, gathered feedback from traffic management professionals, and iterated on our design multiple times.</p>

  //         <p>The recognition from the academic panel validated our hard work and innovative approach to solving a complex urban challenge. This project taught me valuable lessons about project management, teamwork, and the importance of considering both technical feasibility and user needs.</p>
  //     `
  // }
};

// ===========================
// THEME MANAGEMENT
// ===========================

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  const themeIcon = document.querySelector(".theme-toggle i");

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Animate icon change
  themeIcon.style.transform = "scale(0)";
  setTimeout(() => {
    themeIcon.className = newTheme === "light" ? "fas fa-moon" : "fas fa-sun";
    themeIcon.style.transform = "scale(1)";
  }, 150);
}

// Load saved theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const themeIcon = document.querySelector(".theme-toggle i");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
}

// ===========================
// MOBILE MENU
// ===========================

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (!nav.contains(e.target) && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// ===========================
// SMOOTH SCROLLING
// ===========================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const offset = 80; // Account for fixed nav
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        document.querySelector(".nav-links").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("active");
      }
    });
  });
}

// ===========================
// TYPING ANIMATION
// ===========================

function typeText(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Add cursor class when done
      element.classList.add("typing-cursor");
      // Remove cursor after 2 seconds
      setTimeout(() => {
        element.classList.remove("typing-cursor");
      }, 2000);
    }
  }

  type();
}

// ===========================
// HERO ANIMATIONS
// ===========================

function initHeroAnimations() {
  const typingElement = document.querySelector(".typing-text");
  const subtitle = document.querySelector(".hero-subtitle");
  const ctaButton = document.querySelector(".cta-button");

  if (typingElement) {
    setTimeout(() => {
      typeText(typingElement, "hi, ryan here", 120);
    }, 500);
  }

  if (subtitle) {
    setTimeout(() => {
      subtitle.style.animation = "fadeInUp 0.8s ease forwards";
    }, 2200);
  }

  if (ctaButton) {
    setTimeout(() => {
      ctaButton.style.animation = "fadeInUp 0.8s ease forwards";
    }, 2800);
  }
}

// ===========================
// PARTICLE SYSTEM
// ===========================

function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  // Reduce particles on mobile
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 10 : 20;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 100 + 50;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    particle.style.animation = `float ${
      Math.random() * 10 + 10
    }s infinite ease-in-out`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  reveals.forEach((el) => observer.observe(el));
}

// ===========================
// SKILL BAR ANIMATIONS
// ===========================

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
        observer.unobserve(bar);
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => observer.observe(bar));
}

// ===========================
// PROJECT FILTERING
// ===========================

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter projects with animation
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// ===========================
// ACHIEVEMENT MODAL
// ===========================

function openAchievementModal(id) {
  const modal = document.getElementById("achievementModal");
  const data = achievementData[id];

  if (!data) return;

  // Populate modal content
  document.querySelector(".modal-icon").textContent = data.icon;
  document.querySelector(".modal-date").textContent = data.date;
  document.querySelector(".modal-title").textContent = data.title;
  document.querySelector(".modal-body").innerHTML = data.content;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAchievementModal() {
  const modal = document.getElementById("achievementModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAchievementModal();
  }
});

// Close modal on background click
document.getElementById("achievementModal")?.addEventListener("click", (e) => {
  if (e.target.id === "achievementModal") {
    closeAchievementModal();
  }
});

// ===========================
// ACTIVE NAV LINK
// ===========================

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// ===========================
// PARALLAX EFFECTS
// ===========================

function initParallax() {
  const hero = document.querySelector(".hero-content");
  const particles = document.getElementById("particles");
  const animatedBg = document.querySelector(".animated-bg");

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    if (scrolled < window.innerHeight) {
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / window.innerHeight;
      }

      if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      if (animatedBg) {
        animatedBg.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

// ===========================
// EMAIL COPY FUNCTIONALITY
// ===========================

function initEmailCopy() {
  const emailLink = document.querySelector(".social-link.email");
  if (!emailLink) return;

  emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    const email = "ryankeshary@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
        showToast("Failed to copy email", "error");
      });
  });
}

// ===========================
// TOAST NOTIFICATION
// ===========================

function showToast(message, type = "success") {
  // Remove existing toast if any
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === "success" ? "var(--success)" : "var(--warning)"};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: fadeInUp 0.3s ease;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: 600;
    `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "fadeInUp 0.3s ease reverse";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===========================
// PERFORMANCE MONITORING
// ===========================

function checkPerformance() {
  // Detect low-end devices
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (connection) {
    if (
      connection.saveData ||
      connection.effectiveType === "slow-2g" ||
      connection.effectiveType === "2g"
    ) {
      // Reduce animations for low-bandwidth users
      document.body.classList.add("reduced-animations");
    }
  }
}

// ===========================
// WINDOW RESIZE HANDLER
// ===========================

let resizeTimer;
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      particlesContainer.innerHTML = "";
      createParticles();
    }
  }, 250);
}

// ===========================
// LAZY LOADING IMAGES
// ===========================

function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("loading" in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    return;
  }

  // Fallback for browsers that don't support native lazy loading
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// ===========================
// KEYBOARD NAVIGATION
// ===========================

function initKeyboardNav() {
  // ESC key to close mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const navLinks = document.querySelector(".nav-links");
      const hamburger = document.querySelector(".hamburger");

      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    }
  });

  // Tab trap in mobile menu
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    const focusableElements = navLinks.querySelectorAll("a, button");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    navLinks.addEventListener("keydown", (e) => {
      if (e.key === "Tab" && navLinks.classList.contains("active")) {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// ===========================
// INITIALIZE ON DOM LOADED
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme
  initTheme();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize scroll reveal
  initScrollReveal();

  // Initialize skill bar animations
  animateSkillBars();

  // Initialize project filters
  initProjectFilters();

  // Initialize email copy
  initEmailCopy();

  // Initialize lazy loading
  initLazyLoading();

  // Initialize keyboard navigation
  initKeyboardNav();

  // Check device performance
  checkPerformance();

  // Initialize parallax (check for reduced motion)
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!prefersReducedMotion) {
    initParallax();
  }

  // Add scroll event listener for active nav
  window.addEventListener("scroll", () => {
    updateActiveNavLink();
  });

  // Add resize event listener
  window.addEventListener("resize", handleResize);

  // Add hamburger click event
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Add theme toggle event
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});

// ===========================
// INITIALIZE ON WINDOW LOAD
// ===========================

window.addEventListener("load", () => {
  // Create particles after page load
  createParticles();

  // Initialize hero animations
  initHeroAnimations();

  // Update active nav link
  updateActiveNavLink();
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Throttle function for performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ===========================
// EXPORT FOR EXTERNAL USE
// ===========================

window.portfolioUtils = {
  toggleTheme,
  toggleMenu,
  showToast,
  throttle,
  debounce,
  isInViewport,
  openAchievementModal,
  closeAchievementModal,
};
