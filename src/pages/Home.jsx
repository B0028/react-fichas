import { Box,Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className="content-box">
      <Typography variant="h2" sx={{ mb: 2, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
        Main
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repellendus commodi reiciendis fugit ex nesciunt eveniet suscipit eum quae soluta possimus debitis quibusdam corrupti voluptatem doloremque, expedita culpa nulla quam?
      </Typography>
    </Box>
  );
}