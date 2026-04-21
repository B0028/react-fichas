import { Container, Grid } from "@mui/material";
import { projects } from "../../projects";
import Card from "../components/ui/Card"


function DesarrolloTeorico(params) {
    return (
        <Container fixed maxWidth="lg" sx={{marginx: "auto"}}>
            <Grid container spacing={3}>
                {projects.teorico.map((ejercicio) => (
                    <Grid key={ejercicio.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} display="flex">
                        <Card 
                        titulo={ejercicio.name} 
                        subtitulo={ejercicio.description} 
                        descripcion={ejercicio.tecnologias} 
                        link={ejercicio.path} 
                        captura={ejercicio.capture}></Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default DesarrolloTeorico;