import { Box, IconButton, Typography } from "@mui/material";
import "./main.css";
import Lottie from "react-lottie";
import * as animationData from "../asset/animations/animation.json";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function InfoSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Box className="section">
      <Box className="name-section">
        <Box>
          <Typography variant="h3" color="text.primary">
            Hi there!,
          </Typography>
          <Typography variant="h1">
            I'm <span className="blueText">Saurabh,</span>
          </Typography>
          <Typography variant="h2">
            A <span className="pinkText">FullStack</span> Engineer
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "5%", display: "flex", gap: "10px" }}>
          <IconButton
            onClick={() => {
              window.open("https://github.com/saurabhkemekar", "_blank");
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/saurabh-kemekar-a8589710b/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <a
          href="https://drive.google.com/file/d/1cNEbNPXOhdpc7IiSOFg9KSzM2BPAO1GB/view?usp=sharing"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              maxWidth: "fit-content",
              fontWeight: 600,
              padding: "3px 5px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download Resume
          </Typography>
        </a>
      </Box>
      <Box>
        <Lottie options={defaultOptions} />
      </Box>
    </Box>
  );
}
