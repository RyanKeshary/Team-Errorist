# 🚨 CrisisMitra: Real-Time Disaster Relief Coordination Portal

🏆 **1st Place – JARVIS 24-Hour Hackathon**

CrisisMitra is a full-stack, offline-first disaster relief coordination platform that bridges communication between victims, volunteers, and authorities during emergencies. It enables real-time data sharing, mapping, and resource management even under low or no connectivity.

---

## ✨ Features

**🚨 Real-Time SOS and Live Mapping**
Victims can send SOS alerts with live geolocation, displayed on an interactive Leaflet.js map for rapid situational awareness.

**🧠 AI-Powered Message Triage**
An integrated spaCy NLP engine automatically analyzes incoming messages to extract details such as disaster type, urgency, and location, functioning even offline.

**📊 Centralized Response Dashboard**
Coordinators can monitor all active alerts, volunteers, and available resources through a unified dashboard interface.

**🙋 Volunteer Coordination Portal**
Volunteers have access to their assigned missions, profile details, and task priorities via a dedicated interface.

**🌐 Multilingual Accessibility**
Supports English, Hindi, and Marathi to ensure inclusivity across diverse regions.

**📶 Offline-First Architecture**
Core functions such as SOS mapping and NLP processing work without an internet connection and sync automatically to Firebase once reconnected.

---

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript
**Backend:** Node.js, Express.js
**Database and Real-time Sync:** Firebase Realtime Database
**Mapping:** Leaflet.js with OpenStreetMap
**AI/NLP:** Python, spaCy

---

## 🏗️ System Architecture

CrisisMitra is structured for three key user roles:

**Victims/Civilians:** Access the public portal (index.html) to send SOS alerts or register details.
**Coordinators:** Use dashboard.html to view live incidents, manage volunteers, and track resources.
**Volunteers:** Log in via login.html to access volunteer.html for assigned missions.
**AI Backend:** spaCy.py processes disaster-related text data to extract structured insights for better resource allocation.

---

## 🚀 Getting Started

**Prerequisites**
A modern browser (Chrome, Firefox, Safari, or Edge)
A local server (e.g., VSCode Live Server or `python -m http.server`)

**Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/CrisisMitra.git
   ```
2. Navigate to the project directory.
3. Open index.html directly or serve via a local server.
4. Explore the modules:

   * map.html: Simulate SOS alerts.
   * dashboard.html: Coordinator view.
   * spaCy.py: Run offline NLP analysis (requires Python + spaCy).

---

## 🎯 Hackathon Overview

Developed within 24 hours during the JARVIS Hackathon, CrisisMitra secured **1st place** for its technical depth, resilience, and real-world applicability.
The focus was to design a "Real-Time Disaster Relief Coordination Portal" capable of functioning in network-constrained environments.

As a first-year engineering student and frontend lead, building a solution that outperformed senior teams was a major milestone in full-stack development, collaboration, and rapid prototyping.

---

## 🔮 Future Enhancements

Integration with SMS gateways for wider reach
Advanced resource tracking and logistics management
Push notifications for responders and volunteers
Full cloud deployment for production scalability

---

## 👥 Team Errorists

Developed with dedication by **Team Errorists**

---
