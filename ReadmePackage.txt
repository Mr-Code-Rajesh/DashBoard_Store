Step 1: Create Project with Vite
# Create project with Vite + React
npm create vite@latest dashboard-app

# Select React (JavaScript)
cd dashboard-app
npm install

Step 2: Install Tailwind CSS

Follow Tailwind official setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Modify tailwind.config.js:
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


Step 3: Install Chart & UI Libraries
# Charting library
npm install recharts

# Routing
npm install react-router-dom

# Icons (for sidebar/nav)
npm install lucide-react

# Optional UI components
npm install @headlessui/react @radix-ui/react-icons


Step 4: Install Axios (for APIs)
npm install axios


Step 5: Project Structure
dashboard-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                # Images, logos
│   ├── components/            # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── KPIBox.jsx
│   │   ├── ChartCard.jsx
│   │   └── DataTable.jsx
│   ├── pages/                 # Dashboard pages
│   │   ├── BIDashboard.jsx
│   │   └── ProductAnalytics.jsx
│   ├── charts/                # Chart components
│   │   ├── RevenueChart.jsx
│   │   ├── UserGrowthChart.jsx
│   │   ├── RetentionChart.jsx
│   │   └── FeatureUsageChart.jsx
│   ├── services/              # API calls
│   │   ├── financeAPI.js
│   │   └── githubAPI.js
│   ├── utils/                 # Helpers & dummy data
│   │   ├── dummyData.js
│   │   └── formatNumber.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js











