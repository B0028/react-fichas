import { Box, Grid, Typography } from "@mui/material";
import Card from "../components/ui/Card";
import nartuoxim from "../../projects/DesarrolloPractico/Ficha-00/assets/images/Naruto.jpg"



export default function Home() {
  return (
    <Box className="content-box" p={5}>
      <Typography variant="h2" sx={{ mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Portfolio de ejercicios Ánima
      </Typography>
      <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: 655, 
        mb: 2
        }}
      >    
        <Typography color="text.secondary">
          Desarrollo Web Full Stack
        </Typography>
        <Typography color="text.secondary">
          año: 2026
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Bruno Accorenti
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <Card sx={{ width: '100%' }} titulo={"Desarrollo Práctico"} subtitulo={"Profesor: Facundo Peréz"} descripcion={"?"} link={"desarrollo-practico"} captura={nartuoxim}>
        </Card>
        <Card sx={{ width: '100%' }} titulo={"Desarrollo Teorico"} subtitulo={"Profesora: Valentina Baldoni"} descripcion={"?"} link={"desarrollo-teorico"} captura={nartuoxim}>
        </Card>
      </Box>
    </Box>
  );
}

