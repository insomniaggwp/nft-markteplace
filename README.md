# 📱 Social Media Content Generator

## 📝 Description

**Social Media Content Generator** is a web application designed to help marketers create Instagram content with ease. It leverages the power of AI to generate relevant captions and images, streamlining the content creation process. Users can save campaigns locally and manage them through an intuitive user interface.

---

## 🛠️ Tech Stack

- **Frontend:** Vite + React.js
  I use Vite because it enables fast development, and React because I am familiar with it.
- **Styling:** Tailwind CSS
- **AI Integration:** OpenAI API
- **Backend (Mock):** JSON Server

---

## Project Structure

.
├── db/ # Local mock database folder<br />
│ ├── campaigns.json # Main campaign data used by json-server<br />
│ └── campaigns.backup.json # Backup of campaign data<br />
├── public/ # Public static assets<br />
├── src/ # Source code<br />
│ ├── assets/ # Images and static assets<br />
│ ├── components/ # Reusable UI components<br />
│ ├── hooks/ # Custom React hooks<br />
│ ├── pages/ # Page-level components/routes<br />
│ ├── routes/ # Application route definitions<br />
│ ├── services/ # API and business logic<br />
│ ├── templates/ # Content or layout templates<br />
│ └── utils/ # Utility/helper functions<br />
├── App.jsx # Main app component<br />
├── index.css # Tailwind and global styles<br />
├── main.jsx # App entry point<br />
├── .env # Environment variable config (not committed)<br />
├── .gitignore # Files to ignore in git<br />
└── package.json # Project metadata and scripts<br />

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/insomniaggwp/candidate_arif_hidayat_fe_2025_ai.git
cd candidate_arif_hidayat_fe_2025_ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_OPENAI_API_URL=https://api.openai.com/v1/chat/completions
VITE_GPT_KEY=your-openai-api-key
```

### 4. Run the Frontend

```bash
npm run dev
```

### 5. Run the Mock Backend

```bash
npm run reset-mock
json-server npm run mock-api
```

## 🚀 Features

0. Login Authentication (Simple)
1. Content Creation Form
2. AI Content Generation
3. Preview & Editor
4. Content Management
