import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setMostrar(!mostrar)}
        sx={{ boxShadow: "none" }}
      >
        {mostrar ? "Ocultar info" : "Mostrar info"}
      </Button>
      {mostrar && (
        <Typography sx={{ color: "primary.main", mt: 1.5 }}>
          Este texto solo se ve cuando mostrar es true.
        </Typography>
      )}
    </Box>
  );
}

export default MostrarOcultar;
