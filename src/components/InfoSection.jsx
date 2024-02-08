import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import "./main.css";

export default function InfoSection() {
  return (
    <Box className="section">
      <Box className="name-section">
        <Box>
          <Typography variant="h1" sx={{ color: "#21243D" }}>
            Hi, I am Saurabh
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/so-so.png"
              alt="so-so"
            />
            <br />
            Software Engineer
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "5%" }}>
          <Typography variant="body1" sx={{ color: "#21243D" }}>
            I have 1.5 years of experience as a full-stack developer, with focus
            on creating exceptional software that are fast and responsive. I am
            passionate about bringing digital products to life by seamlessly
            integrating technical and visual elements. When I'm not at computer,
            I love playing cricket and watching Netflix shows.
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "5%", display: "flex", gap: "10px" }}>
          <a href="https://github.com/saurabhkemekar">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/github.png"
              alt="github"
            />
          </a>
          <a href={"https://www.linkedin.com/in/saurabh-kemekar-a8589710b/"}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://www.instagram.com/saurabhkemekar/">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/instagram-new.png"
              alt="instagram-new"
            />
          </a>
        </Box>
        <a
          href="./cv/resume.pdf"
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
        <img src="./profile-pic-2.png" className="profile-img" />
      </Box>
    </Box>
  );
}
