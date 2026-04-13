import { Container, Grid } from "@mui/material";
import { projects } from "../../../projects";
import Card from "../ui/Card.jsx"
import nartuoxim from "../../../projects/DesarrolloPractico/Ficha-00/assets/images/Naruto.jpg"

function ProjectsGrid() {
    return (
        <Container fixed maxWidth="lg" sx={{marginx: "auto"}}>
            <Grid container spacing={3}>
                {projects.practico.map((ejercicio) => (
                    <Grid key={ejercicio.id} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Card titulo={ejercicio.name} subtitulo={ejercicio.description} descripcion={"si"} link={"http://localhost:5173/desarrollo-practico"} captura={nartuoxim}></Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ProjectsGrid;