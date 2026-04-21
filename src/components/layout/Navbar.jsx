import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: "inherit",
    fontSize: "0.95rem",
    paddingBottom: "4px",
    borderBottom: `1px solid ${isActive ? "currentColor" : "transparent"}`,
  });

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 3 },
        py: 1.5,
        bgcolor: "background.default",
        borderColor: "divider",
      }}
    >
      <Typography variant="body1" color="text.primary">
        React · Fichas
      </Typography>
      <Box component="nav" aria-label="Principal" sx={{ display: "flex", gap: 2.5 }}>
        <NavLink style={navLinkStyle} to="/desarrollo-practico/ficha-00">
          Ficha-00
        </NavLink>
        <NavLink style={navLinkStyle} to="/desarrollo-practico/ficha-01">
          Ficha-01
        </NavLink>
      </Box>
    </Box>
  );
}

export default Navbar;
