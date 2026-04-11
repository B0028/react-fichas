import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Drawer,
  Fab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Footer from "../components/layout/Footer.jsx";
import "../styles/App.css";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="app-shell">
      <Navbar />

      {isMobile && (
        <Fab
          color="primary"
          size="small"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          sx={{
            position: "fixed",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1300,
          }}
        >
          {isSidebarOpen ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </Fab>
      )}

      <Box component="main" className="app-main">
        {isMobile ? (
          <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            PaperProps={{ sx: { width: 320 } }}
          >
            <Sidebar isMobile />
          </Drawer>
        ) : (
          <Box className="sidebar-box">
            <Sidebar />
          </Box>
        )}
          <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

export default HomeLayout;
