import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

function Tarjeta({ nombre, descripcion, link, picture }) {
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
        image={picture}
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
