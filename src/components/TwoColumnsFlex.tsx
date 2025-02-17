import { Box } from "@mui/material";

export default function TwoColumnsFlex() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Div gauche (70%) */}
      <Box sx={{ flex: 7, backgroundColor: "blue", flexDirection: "column" }}>
        <Box
          sx={{ height: "20vh", width: "100%", backgroundColor: "yellow" }}
        ></Box>
      </Box>

      {/* Div droite (30%) */}
      <Box sx={{ flex: 3, backgroundColor: "red" }} />
    </Box>
  );
}
