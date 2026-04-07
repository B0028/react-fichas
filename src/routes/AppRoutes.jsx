import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App.jsx";
import Ficha00 from "../pages/Ficha-00.jsx";
import Ficha01 from "../pages/Ficha-01.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="ficha-00" replace />} />
        <Route path="ficha-00" element={<Ficha00 />} />
        <Route path="ficha-01" element={<Ficha01 />} />
      </Route>
    </Routes>
  );
}
