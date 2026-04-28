import { useState } from "react";
import Navbar from "../../../src/components/layout/Navbar";
import Card from "../../../src/components/ui/Card";
import PageTitle from "../../../src/components/ui/PageTitle.jsx";

import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
  Button,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

function Ficha03(params) {
  const [nombre, setNombre] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <PageTitle subtext="Formularios">Ficha-03</PageTitle>

      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Actividad práctica 3.1 – Input básico
          </Typography>

          <TextField
            id="filled-basic"
            label="Inserte su nombre"
            variant="filled"
            slotProps={{ htmlInput: { "data-testid": "…" } }}
            onChange={(e) => setNombre(e.target.value)}
          />
          <FormHelperText id="my-helper-text">Y será saludado</FormHelperText>

          <Typography variant="h1" sx={{ mb: 2 }}>
            {nombre == "" ? "" : `¡Hola ${nombre}!`}
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Actividad práctica 3.2 – Formulario simple
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Actividad práctica 3.3 – Crear tarjeta desde un formulario
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Ficha03;
