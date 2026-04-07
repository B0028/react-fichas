import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import "./styles/App.css";

function App() {
  return (
    <Box className="app-shell">
      <Navbar />
      <Box component="main" className="app-main">
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
