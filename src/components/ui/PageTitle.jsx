import { Box, Typography, Stack } from "@mui/material";

/**
 * Título de página: siempre en la misma franja vertical (debajo del navbar),
 * independiente del contenido centrado que va debajo.
 */
function PageTitle({ children, subtext }) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: "100%",
        minHeight: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 1.5,
        bgcolor: "background.default",
        borderColor: "divider",
      }}
    >
      <Stack>
        <Typography variant="h1" component="h1" sx={{ my: 0 }}>
          {children}
        </Typography>
        <Typography color="text.secondary">{subtext}</Typography>
      </Stack>
    </Box>
  );
}

export default PageTitle;
