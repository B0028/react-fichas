import { Box, Typography, List, ListItemIcon, ListItemText, ListItem } from "@mui/material";
import Navbar from "../../../src/components/layout/Navbar";

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
            <Box 
            sx={{ 
                justifyContent: "center", 
                width: 900,
            }}>
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
            </Box>
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
