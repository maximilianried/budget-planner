import React from "react";
import MainNavbar from "./components/navbar/MainNavbar";
import Budget from "./components/budgets/Budget";
import Statistic from "./components/statistics/Statistic";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/settings/Setting";

function App() {
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
