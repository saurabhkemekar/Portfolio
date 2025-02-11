import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./header.css";
const sectionList = [
  {
    id: "01",
    name: "About",
  },
  {
    id: "02",
    name: "Experience",
  },
  {
    id: "03",
    name: "Projects",
  },
];

export default function Header({handleClick}) {
  const [openMenu, setToggleMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const renderItem = (item) => {
    return (
      <button
        key={item.id}
        className="header-section-item"
        onClick={() => handleClick(item.name)}
      >
       <Typography
          sx={{ fontWeight: "600", fontSize: "16px", color: "#e1ff00" }}
        >
          {item.id}.
        </Typography>
        <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
          {item.name}
        </Typography></button>
    );
  };
  const SectionList = () => {
    return <>{sectionList.map((item) => renderItem(item))}
      <Box className="header-section-item">
        <a
          href="https://drive.google.com/file/d/1pOKHZaH5dHN9YNAeZ2UjMcVOsfXWWfH8/view?usp=sharing"
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <Typography
            className="resume-button"
            sx={{ fontWeight: "600", fontSize: "16px" }}
          >
             Resume
          </Typography>
        </a>
      </Box></>
  }
  return (
    <Box style={{ zIndex: 100 }}>
      <Box elevation={0} sx={{ backgroundColor: "primary" }}>
        
        {!isMobile ? (
          <Box className="container">
            <Box flexGrow={1}></Box>
            <SectionList/>
          </Box>
        ) : (
          <Box className="mobile-container">
            <Box className="hamburger-menu">
              <button
                className={["menu", openMenu ? "opened" : ""].join(" ")}
                onClick={() => setToggleMenu((prev) => !prev)}
                aria-label="Main Menu"
              >
                <svg width="48" height="48" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </Box>
            {openMenu && <Box className="side-container">
              <Box className="mobile-section-container">
               <SectionList/>
              </Box>
            </Box>}
          </Box>
        )}
      </Box>
    </Box>
  );
}
