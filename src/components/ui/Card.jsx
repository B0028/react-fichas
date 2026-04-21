import { Card as MuiCard, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Card({ titulo, subtitulo, descripcion, link, captura }) {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate(link);
    };

    return (
        
      
    <MuiCard onClick={handleClick}
        sx={{
            cursor: 'pointer',
            width: "100%",
            maxWidth: 300,
            height: "100%",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "none",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 24, 
            },
        }}
    >
        <RouterLink to={link} style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="180"
                image={captura}
                alt={titulo}
            />
            <CardContent sx={{ alignItems: 'stretch', flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                    {titulo}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                    {subtitulo}
                </Typography>
                <Typography variant="p" color="text.secondary" sx={{ mb: 1.5 }}>
                    {descripcion}
                </Typography>
            </CardContent>
        </RouterLink>
    </MuiCard>
    );
}

export default Card;