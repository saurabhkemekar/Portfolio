import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./main.css";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import { styled } from "@mui/material/styles";
import ExperienceSection from "./ExperienceSection";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import InfoSection from "./InfoSection";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../provider/ThemeContextProvider";
import { grey } from "@mui/material/colors";

const SectionBox = styled(Box)(({ isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  padding: isMobile ? "0 0%" : "0 10%",
}));
const SectionHeading = styled(Typography)(() => ({
  backgroundColor: "text.primary",
  borderRadius: "13px",
  fontWeight: 550,
  maxWidth: "max-content",
  padding: "5px 15px",
  textAlign: "center",
}));
export default function Main() {
  const [isCopied, setIsCopied] = useState(false);
  const isMobile = useMediaQuery("(max-width:800px)");
  const { mode, toggleTheme } = useThemeContext();
  const copyEmailToClipborad = () => {
    navigator.clipboard.writeText("saurabhkemekar786@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  console.log(isMobile);
  return (
    <Box backgroundColor="primary">
      {/* <IconButton onClick={toggleTheme}>
        {mode === "light" ? (
          <LightModeIcon color={grey[900]} />
        ) : (
          <DarkModeIcon />
        )}
      </IconButton> */}
      <SectionBox height={"100vh"} isMobile={isMobile}>
        <InfoSection />
      </SectionBox>
      <SectionBox sx={{ padding: "15px 0px" }} isMobile={isMobile}>
        <SectionHeading variant="h3">Skills</SectionHeading>
        <SkillSection />
      </SectionBox>
      <SectionBox sx={{ marginTop: "50px" }} isMobile={isMobile}>
        <SectionHeading variant="h3">Experience</SectionHeading>
        <ExperienceSection />
      </SectionBox>

      <SectionBox
        isMobile={isMobile}
        sx={{
          marginTop: "50px",
        }}
      >
        <SectionHeading variant="h3">Project</SectionHeading>
        <ProjectSection />
      </SectionBox>
      <SectionBox
        isMobile={isMobile}
        sx={{
          marginTop: "20px",
          padding: "50px 0",
          marginBottom: "0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px", cursor:"pointer" }}>
          <a href="mailto:saurabhkemekar786@gmail.com" style={{all:"unset"}}>
            <Typography
              sx={{
                fontSize: "20px",
                border:"1px solid #5f98dd",
                padding:"10px 20px"
              }}
            >
              Get in touch
            </Typography>
          </a>
        </Box>
      </SectionBox>
    </Box>
  );
}
