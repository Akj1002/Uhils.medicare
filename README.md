# 🏥 UHILS — Unified Health & Life Intelligence System

<div align="center">

![UHILS Banner](https://img.shields.io/badge/UHILS-Medical%20AI%20Platform-blue?style=for-the-badge&logo=heart&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**An AI-powered full-stack medical platform for smarter, connected healthcare.**

</div>

---

## 🚀 Live Demo

- **Frontend (Patient/Doctor Portal):** [https://uhils-medicare.vercel.app](https://uhils-medicare.vercel.app)
- **Backend API (Swagger Docs):** [https://uhilsmedicare-production.up.railway.app/docs](https://uhilsmedicare-production.up.railway.app/docs)

*(Note: The first API request may take a few seconds to wake up the backend server from sleep.)*

---

## ✨ Features

| Module | Description |
|---|---|
| 🧠 **AI Clinical Chatbot** | Gemini-powered copilot for patients & doctors (clinical + general modes) |
| 🔬 **Multi-Organ AI Scanner** | Upload X-Ray/MRI/scans — get instant AI diagnosis with confidence score |
| 📋 **Clinician Dashboard** | Full patient management, prescriptions, triage scoring, and appointment tracking |
| 💊 **Medication Tracker** | Daily medication logging with critical drug alerts |
| 📁 **Medical Records Vault** | Upload, manage, and AI-summarize medical documents |
| 📅 **Appointments System** | Book doctors with specialties, fees, and auto symptom triage |
| 🛒 **Purchase Corner** | Integrated pharmacy & bio-bank store with cart and checkout |
| 💪 **Fitness & Wellness** | Steps, sleep, water, HRV tracking with wearable sync simulation |
| 🚑 **Emergency & Ambulance** | One-click ambulance booking with real-time ETA and driver details |
| 🗺️ **Nearby Facilities Map** | Real-time hospital/clinic finder via OpenStreetMap Overpass API |
| 📡 **Live Telemetry** | Real-time heart rate and blood pressure monitoring simulation |
| 💬 **Doctor-Patient Chat** | Real-time messaging with AI-simulated doctor responses |
| 📹 **rPPG Scanner** | Camera-based heart rate detection using MediaPipe |

---

## 🛠️ Tech Stack

### Backend
- **[FastAPI](https://fastapi.tiangolo.com/)** — High-performance Python REST API
- **SQLAlchemy** — ORM with SQLite database
- **Google Gemini AI** (`langchain-google-genai`) — LLM for chat, diagnosis, and summarization
- **Pillow** — Image processing for medical scans
- **OpenStreetMap Overpass API** — Real nearby hospital data

### Frontend
- **React 18** — Component-based UI
- **React Router v6** — Client-side routing
- **Recharts** — Health data visualizations
- **Framer Motion** — Smooth animations
- **Tailwind CSS** — Utility-first styling
- **Leaflet + React-Leaflet** — Interactive maps
- **MediaPipe** — Camera-based rPPG heart rate detection
- **Lucide React** — Icon library

---

## 📁 Project Structure

```
uhils/
├── backend/
│   ├── main.py              # FastAPI app — all 15+ API modules
│   ├── database.py          # SQLAlchemy models & DB setup
│   ├── agent_genai.py       # Google Gemini AI agent
│   ├── seed_data.py         # Seed patients, products, records
│   ├── seed_doctors.py      # Seed doctor profiles
│   ├── requirements.txt     # Python dependencies
│   └── uploads/             # User-uploaded medical files (gitignored)
│
├── frontend/
│   ├── src/
│   │   ├── pages/           # All app pages (Dashboard, Clinician, etc.)
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # GlowButton, HoloChart, TiltCard, etc.
│   │   │   ├── dashboard/   # BiometricsGrid, SleepLens, etc.
│   │   │   └── layout/      # Navbar, Chatbot
│   │   ├── index.js         # React entry point
│   │   └── index.css        # Global styles
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── tailwind.config.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- A **Google Gemini API Key** ([Get one here](https://aistudio.google.com/app/apikey))

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Akj1002/Uhils.medicare.git
cd Uhils.medicare
```

---

### 2️⃣ Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` folder:

```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

Seed the database with sample data:

```bash
python seed_data.py
python seed_doctors.py
```

Start the backend server:

```bash
uvicorn main:app --reload --port 8000
```

> Backend will be live at: **http://localhost:8000**
> API Docs available at: **http://localhost:8000/docs**

---

### 3️⃣ Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

> Frontend will be live at: **http://localhost:3000**

---

## 🔌 Key API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/chat/clinical` | AI clinical chatbot |
| `POST` | `/chat/copilot` | AI health copilot |
| `POST` | `/scan/{organ}` | AI medical image analysis |
| `GET` | `/dashboard/{user_id}` | Patient dashboard summary |
| `GET` | `/prescriptions/{user_id}` | Medication list |
| `GET` | `/appointments/{user_id}` | Appointment history |
| `POST` | `/ambulance/book` | Book emergency ambulance |
| `GET` | `/nearby-facilities` | Real hospitals near coordinates |
| `GET` | `/fitness/{user_id}` | Fitness & wellness data |
| `GET` | `/telemetry/{user_id}/live` | Live heart rate & BP |
| `GET` | `/products` | Pharmacy product catalog |
| `GET` | `/records/{user_id}` | Medical records vault |

Full interactive API docs: `http://localhost:8000/docs`

---

## ⚙️ Environment Variables

Create `backend/.env` with:

```env
GOOGLE_API_KEY=your_google_gemini_api_key
```

> ⚠️ **Never commit your `.env` file.** It is already in `.gitignore`.

---

## 🧪 Default Login

After running `seed_data.py`, use:

| Role | User ID |
|---|---|
| Patient | `1` |
| Doctor | Check seeded doctors via `/doctors` |

---

## 📸 Pages Overview

- **Landing** — Hero page with feature highlights
- **Login** — Patient/Doctor authentication
- **Dashboard** — Biometrics, telemetry, medication overview
- **Clinician** — Doctor's patient management panel
- **Records** — Medical document upload & AI summarization
- **Appointments** — Book & manage consultations
- **Purchase Corner** — Pharmacy + bio-bank store
- **Fitness** — Daily health tracking
- **Emergency** — Ambulance booking & nearby hospitals map
- **Scanner** — AI-powered organ scan analysis
- **Chat** — Doctor-patient messaging

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to GitHub: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is for educational and demonstration purposes.

---

<div align="center">
Built with ❤️ by <a href="https://github.com/Akj1002">Akj1002</a>
</div>
