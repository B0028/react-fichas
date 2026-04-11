import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import narutoImg from "../assets/images/Naruto.jpg";

function Tarjeta({ nombre, descripcion, link }) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        borderRadius: 2,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={narutoImg}
        alt={nombre}
      />
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {nombre}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          {descripcion}
        </Typography>
        <Link href={link} target="_blank" rel="noreferrer" underline="hover">
          Ver más
        </Link>
      </CardContent>
    </Card>
  );
}

export default Tarjeta;
