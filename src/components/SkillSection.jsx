import { Box, Typography } from "@mui/material";
import data from "../data/details.json";
export default function SkillSection() {
  return (
    <Box marginTop={"20px"}>
      <Box
        sx={{
          display: "flex",
          gap: "50px 36px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.resume.techStack.map((tech) => (
          <Box
            sx={{
              cursor: "pointer",
              transition: "transform 0.25s",
              ":hover": { transform: "scale(1.2)" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img width="50" height="50" src={tech.iconUrl} alt="spring-logo" />
            <Typography>{tech.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
