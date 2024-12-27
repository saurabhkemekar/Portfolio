import React, { useRef, useLayoutEffect } from "react";
import {
  Box,
  useMediaQuery,
} from "@mui/material";
import "./main.css";
import ProjectSection from "./ProjectSection";
import { styled } from "@mui/material/styles";
import ExperienceSection from "./ExperienceSection";
import InfoSection from "./InfoSection";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./contact/Contact";

const SectionBox = styled(Box)(({ isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
}));
export default function Main() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectRef = useRef();

  function fadeInSection(entries, observer) {
    entries.forEach(element => {
      if (element.isIntersecting) {
        element.target.classList.add('fade-in');
      }
      //observer.unobserve(element.target)
    });
  }
  useLayoutEffect(() => {

    const sections = Array.from(document.getElementsByClassName('section'));
    const observer = new IntersectionObserver(fadeInSection, {  threshold: 0.3 });
    sections.forEach(section => {
      observer.observe(section);
    })
  }, [])

  const scrollSection = (section) => {
    console.log(section)
    switch (section) {
      case 'About':
        aboutRef.current.scrollIntoView();
        break;
      case 'Experience':
        experienceRef.current.scrollIntoView();
        break;
      case 'Projects':
        projectRef.current.scrollIntoView();
        break;
      default:
        break;
    }
    
 

  }
  return (
    <Box backgroundColor="primary">
      <Header  handleClick={scrollSection} />
      <Box class="main-container">
        <SectionBox height={"100vh"} isMobile={isMobile} style={{justifyContent:'center'}}>
          <InfoSection />
        </SectionBox>
        <SectionBox  ref={aboutRef} style={{justifyContent:'center'}}>
          <AboutMe/>
        </SectionBox>
        <SectionBox  className="section experience-section" ref={experienceRef}>
          <ExperienceSection />
        </SectionBox>
        <SectionBox
          isMobile={isMobile}
       
          sx={{
            marginTop: "50px",
          }}
          className="section"
          ref={projectRef}
        >
          <ProjectSection />
        </SectionBox>
      </Box>
      <SectionBox className="section">
            <Contact/>
          </SectionBox>
    </Box>
  );
}
