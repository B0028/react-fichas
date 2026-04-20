import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
  Button,
} from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar";
import Card from "../../../src/components/ui/Card";
import imgArmin from "./assets/images/Armin_Arlelt_29_character_image.webp";

// ACTIVIDAD 1.1
const gustos = [
  {
    id: "01",
    name: "Brave New World",
    tipo: "Libro",
  },
  {
    id: "02",
    name: "1984",
    tipo: "Libro",
  },
  {
    id: "03",
    name: "Monthly buddha gate",
    tipo: "Documental YT",
  },
  {
    id: "04",
    name: "La sociedad de la transparencia",
    tipo: "Libro",
  },
];

// ACTIVIDAD 1.2
const personas = [
  {
    id: "P1",
    name: "Armin Arlelt",
    status: "Alive",
    image: imgArmin,
  },
  {
    id: "P2",
    name: "Erwin Smith",
    status: "Deceased",
    image: imgErwin,
  },
  {
    id: "P3",
    name: "Eren Jaeger",
    status: "Deceased",
    image: imgEren,
  },
];

// ACTIVIDAD 1.3
const lista = [
  {
    id: "L1",
    name: "Soberbia",
    descripcion: "Amor excesivo por uno mismo y deseo de superioridad.",
  },
  {
    id: "L2",
    name: "Avaricia",
    descripcion: "Amor y apego desordenado a los bienes materiales.",
  },
  {
    id: "L3",
    name: "Envidia",
    descripcion: "Tristeza o pesar por la prosperidad o bienes ajenos.",
  },
  {
    id: "L4",
    name: "Ira",
    descripcion: "Enojo excesivo, furia o deseo de venganza.",
  },
  {
    id: "L5",
    name: "Lujuria",
    descripcion: "Deseo sexual desordenado e incontrolado.",
  },
  {
    id: "L6",
    name: "Gula",
    descripcion: "Consumo excesivo o insaciable de comida y bebida.",
  },
  {
    id: "L7",
    name: "Pereza",
    descripcion:
      "Tristeza o flojera del alma que impide actuar, trabajar o hacer el bien",
  },
];

function Ficha02() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <Navbar></Navbar>

      
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >


      {/* ACTIVIDAD 1.1 */}
        <Grid
          item
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
            Actividad práctica 1.1 – Lista simple
          </Typography>
          <List>
            {gustos.map((gusto) => (
              <ListItem key={gusto.id}>
                <ListItemText primary={gusto.name} secondary={gusto.tipo} />
              </ListItem>
            ))}
          </List>
        </Grid>


      {/* ACTIVIDAD 1.2 */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, width: "100%", textAlign: "left" }}>
            Actividad práctica 1.2 – Tarjetas desde una lista
          </Typography>
          <Grid container spacing={1} sx={{width: "100%"}}>
            {personas.map((persona) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={persona.id}>
                <Card
                  titulo={persona.name}
                  subtitulo={persona.status}
                  captura={persona.image}
                ></Card>
              </Grid>
            ))}
          </Grid>
        </Grid>


        {/* ACTIVIDAD 1.3 */}
        <Grid
          item
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
            Actividad práctica 1.3 – Lista con botón
          </Typography>

          {/* Boton */}
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={() => setMostrar(!mostrar)}
              sx={{ boxShadow: "none" }}
            >
              {mostrar ? "Ocultar Lista" : "Desplegar Lista"}
            </Button>

          </Box>
            {mostrar && (
              <List>
                {lista.map((iteml, index) => (
                  <ListItem key={iteml.id}>
                    <ListItemText
                      primary={`${index + 1}). ${iteml.name}`}
                      secondary={iteml.descripcion}
                    />
                  </ListItem>
                ))}
              </List>
            )}
        </Grid>


        {/* */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        ></Grid>
      </Grid>
    </>
  );
}

export default Ficha02;

/**
 *                         <ListItemIcon>
                            {gusto.tipo = "Libro" ? <AutoStoriesIcon /> : <YouTubeIcon />}
                        </ListItemIcon>

                        import { AutoStoriesIcon, YouTubeIcon } from '@mui/icons-material';


 */
