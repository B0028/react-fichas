import Contador from "./components/Contador.jsx";
import MostrarOcultar from "./components/MostrarOcultar.jsx";
import PageTitle from "../../../src/components/ui/PageTitle.jsx";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar.jsx";

function Ficha01() {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        width: "100%",
      }}
    >
      <Navbar></Navbar>
      <PageTitle subtext="Contador">Ficha-01</PageTitle>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: 0,
          py: 2,
        }}
      >
        <Stack spacing={3} sx={{ width: "100%", maxWidth: 900, alignItems: "center" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{ 
              width: "100%",
              justifyContent: "center",
              alignItems: "stretch"
            }}
          >
            <Stack spacing={1} sx={{ flex: 1, alignItems: "center" }}>
              <Typography variant="h4">Contador</Typography>
              <Contador />
            </Stack>
            <Stack spacing={1} sx={{ flex: 1, alignItems: "center" }}>
              <Typography variant="h4">Mostrar / ocultar</Typography>
              <MostrarOcultar />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Ficha01;
