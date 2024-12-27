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
          <Typography variant="body1" color="text.primary">
            Hi, I'm Saurabh!   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6.66663H15.8333C16.7174 6.66663 17.5652 7.01782 18.1904 7.64294C18.8155 8.26806 19.1667 9.1159 19.1667 9.99996C19.1667 10.884 18.8155 11.7319 18.1904 12.357C17.5652 12.9821 16.7174 13.3333 15.8333 13.3333H15" stroke="#838282" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.66663 6.66663H15V14.1666C15 15.0507 14.6488 15.8985 14.0236 16.5236C13.3985 17.1488 12.5507 17.5 11.6666 17.5H4.99996C4.1159 17.5 3.26806 17.1488 2.64294 16.5236C2.01782 15.8985 1.66663 15.0507 1.66663 14.1666V6.66663Z" stroke="#838282" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path class="steam" d="M5 0.833374V3.33337" stroke="#838282" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path class="steam" d="M8.33337 0.833374V3.33337" stroke="#838282" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path><path class="steam" d="M11.6666 0.833374V3.33337" stroke="#838282" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Typography>
          <Box className="caption-text">
            <Typography variant="h1"  fontWeight={300}>
            Passionate Full Stack Developer  <br/> Elevating Web Solutions to the Next Level
          </Typography>
          </Box>
        </Box>
        <Box sx={{ paddingTop: "5%", display: "flex", gap: "10px" }}>
          <IconButton
            onClick={() => {
              window.open("https://github.com/saurabhkemekar", "_blank");
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/saurabh-kemekar-a8589710b/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      {/* <Box>
        <Lottie options={defaultOptions} />
      </Box> */}
    </Box>
  );
}
