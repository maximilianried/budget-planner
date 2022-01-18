import React from "react";
import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import Budget from "./components/budgets/Budget";
import Statistic from "./components/statistics/Statistic";
import NoPage from "./components/warnings//NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/settings/Setting";

function App() {
  const [darkMode] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  React.useEffect(() => {
    if (darkMode === false) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <>
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Budget />} />
          <Route path="statistic" element={<Statistic />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
