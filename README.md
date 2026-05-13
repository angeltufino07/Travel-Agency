# Travel Agency 🌎

A responsive multi-page travel agency web application built with React.

🔗 **Live Demo:** [travel-agency-e24y.vercel.app](https://travel-agency-e24y.vercel.app)

---

## 📸 Preview

![Travel Agency Preview](./preview.png)
---

## 🛠️ Built With

- **React** — Component-based UI
- **React Router DOM** — Client-side navigation
- **Redux Toolkit** — Global state management
- **OpenWeatherMap API** — Real-time weather integration
- **SCSS / CSS** — Custom styling
- **Vercel** — Deployment

---

## ✨ Features

- Multi-page navigation with React Router
- Real-time weather search by city using REST API
- Redux state management for weather data
- Responsive design across all screen sizes
- Destination cards for Los Cabos, Acapulco, and Cancun
- Promotional video embed
- Contact/register form

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation

```bash
git clone https://github.com/angeltufino07/Travel-Agency.git
cd Travel-Agency
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 Project Structure
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Home/
│   ├── Travels/
│   ├── About_Us/
│   ├── Weather/
│   ├── store/
│   └── api/
└── assets/

---

## 🧠 Technical Decisions

- **Redux over useState for weather data** — weather state is consumed by multiple components, making global state the cleaner solution
- **NavLink over anchor tags** — prevents full page reloads and enables active link styling natively
- **Component-based architecture** — each section is isolated for reusability and maintainability

---

## 🧪 Testing

```bash
npm test
```

**20 tests across 7 suites:**
- Footer component rendering
- Header navigation links
- App integration
- Redux store configuration
- Weather reducer — initial state, start, success, failure
- Weather component interactions


## 👤 Author

**Arturo Tufino**
- LinkedIn: [linkedin.com/in/arturo-tufino-atm](https://linkedin.com/in/arturo-tufino-atm)
- GitHub: [github.com/angeltufino07](https://github.com/angeltufino07)