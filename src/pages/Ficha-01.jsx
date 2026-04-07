import Contador from "../components/Contador.jsx";
import MostrarOcultar from "../components/MostrarOcultar.jsx";
import PageTitle from "../components/PageTitle.jsx";
import { Box, Stack, Typography } from "@mui/material";

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
      <PageTitle>Ficha-01</PageTitle>
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
        <Stack spacing={3} alignItems="center" sx={{ width: "100%", maxWidth: 900 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
            sx={{ width: "100%" }}
          >
            <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
              <Typography variant="h4">Contador</Typography>
              <Contador />
            </Stack>
            <Stack spacing={1} alignItems="center" sx={{ flex: 1 }}>
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
