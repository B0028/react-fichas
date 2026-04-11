import PageTitle from "../../../src/components/ui/PageTitle.jsx";
import Tarjeta from "./components/Tarjeta.jsx";
import { Box, Stack } from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar.jsx";

function Ficha00() {
  const tarjetas = [
    {
      nombre: "Naruto Uzumaki",
      descripcion: "Ninja de Konoha con el objetivo de ser Hokage.",
      link: "https://naruto-official.com/en",
    },
    {
      nombre: "Gaara",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      link: "#",
    },
    {
      nombre: "Jiraiya",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      link: "#",
    },
  ];

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
      <PageTitle>Ficha-00</PageTitle>
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
        <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="center">
            {tarjetas.map((tarjeta) => (
              <Tarjeta
                key={tarjeta.nombre}
                nombre={tarjeta.nombre}
                descripcion={tarjeta.descripcion}
                link={tarjeta.link}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Ficha00;


