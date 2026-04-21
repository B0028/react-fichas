import { Container, Grid } from "@mui/material";
import { projects } from "../../projects";
import Card from "../components/ui/Card"
import nartuoxim from "../../projects/DesarrolloPractico/Ficha-00/assets/images/Naruto.jpg"

function DesarrolloPractico(params) {
    return (
        <Container sx={{ marginx: "auto" }}>
            <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
                {projects.practico.map((ejercicio) => (
                    <Grid 
                        key={ejercicio.id} 
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }} 
                        sx={{ display: 'flex' }}
                        >
                        <Card 
                            titulo={ejercicio.name} 
                            subtitulo={ejercicio.description} 
                            descripcion={"si"} 
                            link={ejercicio.path} 
                            captura={nartuoxim}>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default DesarrolloPractico;