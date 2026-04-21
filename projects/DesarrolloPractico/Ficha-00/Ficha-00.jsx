import PageTitle from "../../../src/components/ui/PageTitle.jsx";
import Tarjeta from "./components/Tarjeta.jsx";
import { Box, Stack } from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar.jsx";
import Nagato from "./assets/images/Nagato.jpg"
import Yahiko from "./assets/images/Yahiko.jpg"
import Konan from "./assets/images/Konan.jpg"

function Ficha00() {
  const tarjetas = [
    {
      nombre: "Nagato",
      descripcion: "長門",
      link: "https://naruto.fandom.com/es/wiki/Nagato",
      picture: Nagato
    },
    {
      nombre: "Yahiko",
      descripcion: "弥彦",
      link: "https://naruto.fandom.com/es/wiki/Yahiko",
      picture: Yahiko
    },
    {
      nombre: "Konan",
      descripcion: "小南",
      link: "https://naruto.fandom.com/es/wiki/Konan",
      picture: Konan
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
        <Stack spacing={4} sx={{ width: "100%", alignItems: "center" }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            {tarjetas.map((tarjeta) => (
              <Tarjeta
                key={tarjeta.nombre}
                nombre={tarjeta.nombre}
                descripcion={tarjeta.descripcion}
                link={tarjeta.link}
                picture={tarjeta.picture}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Ficha00;


