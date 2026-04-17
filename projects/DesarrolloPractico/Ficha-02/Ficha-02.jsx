import { Box, Typography, List, ListItemIcon, ListItemText, ListItem, Grid } from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar";
import Card from "../../../src/components/ui/Card";
import nartuoxim from "../Ficha-00/assets/images/Naruto.jpg"

const gustos = [
    {
      id: "01",
      name: "Brave New World",
      tipo: "Libro"
    },
    {
      id: "02",
      name: "1984",
      tipo: "Libro"
    },
    {
      id: "03",
      name: "Monthly buddha gate",
      tipo: "Documental YT"
    },
    {
      id: "04",
      name: "La sociedad de la transparencia",
      tipo: "Libro"
    },
  ]
  
const personas = [
    {
      id: "P1",
      name: "Han",
      rol: "Frontend"
    },
    {
      id: "P2",
      name: "Jhin",
      rol: "Backend"
    },
    {
      id: "P3",
      name: "Kayn",
      rol: "UX"
    }
]


function Ficha02() {
    return (
      <>
        <Navbar></Navbar>
        <Grid container spacing={20} justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12} md={6}>
              <List>
                  {gustos.map((gusto) => (
                      <ListItem key={gusto.id}>

                          <ListItemText
                              primary= {gusto.name}
                              secondary= {gusto.tipo}
                          />
                      </ListItem>
                  ))}
              </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={6} >
              {personas.map((persona) => (
               <Grid item xs={12} sm={6} md={4} key={persona.id}>
                <Card titulo={persona.name} subtitulo={persona.rol} captura={nartuoxim}></Card>
               </Grid>
              ))}
            </Grid>
          </Grid>
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
