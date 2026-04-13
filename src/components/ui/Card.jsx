import { Card as MuiCard, CardContent, CardMedia, Link, Typography } from "@mui/material";


function Card({ titulo, subtitulo, descripcion, link, captura }) {
    return (
        <MuiCard
            sx={{
                width: "100%",
                maxWidth: 300,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "none",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image={captura}
                alt={titulo}
            />
            <CardContent sx={{ alignItems: 'stretch' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {titulo}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                    {subtitulo}
                </Typography>
                <Typography variant="p" color="text.secondary" sx={{ mb: 1.5 }}>
                    {descripcion}
                </Typography>
                <Link href={link} target="_blank" rel="noreferrer" underline="hover" >
                    Ver más
                </Link>
            </CardContent>
        </MuiCard>
    );
}

export default Card;