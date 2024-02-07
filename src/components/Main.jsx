import { Box, Button, Typography } from "@mui/material";
import "./main.css";
import Header from "./Header";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import { styled } from "@mui/material/styles";
import ExperienceSection from "./ExperienceSection";

const SectionBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  padding: "0 10%",
}));
const SectionHeading = styled(Typography)(() => ({
  backgroundColor: "#E5E7EB",
  borderRadius: "13px",
  fontWeight: 550,
  maxWidth: "max-content",
  padding: "5px 15px",
  textAlign: "center",
}));
export default function Main() {
  return (
    <Box>
      {/* <Header /> */}
      <SectionBox height={"100vh"}>
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
                I am a final year undergraduate student pursuing my B.Tech
                degree in Electronics and Communication Engineering. My interest
                lies in the field of Machine Learning. Besides research in my
                free time, I like to play Computer games and Cricket.
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
              <a
                href={"https://www.linkedin.com/in/saurabh-kemekar-a8589710b/"}
              >
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
            {/* <Button
              variant="contained"
              sx={{ color: "#fff", fontWeight: 600, boxShadow: "none" }}
            >
              Download Resume
            </Button> */}
          </Box>
          <Box>
            <img src="./profile-pic-2.png" className="profile-img" />
          </Box>
        </Box>
      </SectionBox>
      <SectionBox sx={{ backgroundColor: "#f9fafb", padding: "15px 0px" }}>
        <SectionHeading>Skills</SectionHeading>
        <SkillSection />
      </SectionBox>
      <SectionBox sx={{ marginTop: "50px" }}>
        <SectionHeading>Experience</SectionHeading>
        <ExperienceSection />
      </SectionBox>

      <SectionBox
        sx={{
          marginTop: "50px",
        }}
      >
        <SectionHeading>Project</SectionHeading>
        <ProjectSection />
      </SectionBox>
      <SectionBox
        sx={{
          marginTop: "20px",
          padding: "50px 0",
          backgroundColor: "#f9fafb",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography sx={{ fontSize: "20px" }}> Get in touch</Typography>
          <img src="./hand.svg" width="24px" />
          <a href="mailto:saurabhkemekar786@gmail.com">
            <Typography
              sx={{
                fontSize: "20px",
                textDecoration: "underline",
                textDecorationColor: "blue",
              }}
            >
              saurabhkemekar786@gmail.com
            </Typography>
          </a>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/copy.png"
            alt="copy"
          />
        </Box>
      </SectionBox>
    </Box>
  );
}
