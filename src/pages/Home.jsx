import { Box, Grid, Typography } from "@mui/material";
import Card from "../components/ui/Card";
import nartuoxim from "../../projects/DesarrolloPractico/Ficha-00/assets/images/Naruto.jpg"



export default function Home() {
  return (
    <Box className="content-box">
      <Typography variant="h2" sx={{ mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Main
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi reiciendis fugit ex nesciunt eveniet suscipit eum quae soluta possimus debitis quibusdam corrupti voluptatem doloremque, expedita culpa nulla quam?
      </Typography>
      <Box sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <Card sx={{ width: '100%' }} titulo={"Desarrollo Práctico"} subtitulo={"Prof. Facundo"} descripcion={"?"} link={"http://localhost:5173/desarrollo-practico"} captura={nartuoxim}>
        </Card>
        <Card sx={{ width: '100%' }} titulo={"Desarrollo Teorico"} subtitulo={"Prof. Valentina"} descripcion={"?"} link={"http://localhost:5173/desarrollo-teorico"} captura={nartuoxim}>
        </Card>
      </Box>
    </Box>
  );
}