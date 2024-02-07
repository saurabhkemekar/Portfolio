import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <AppBar elevation={0} sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Box flexGrow={1}></Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
              About
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
              Skills
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
              Work
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
