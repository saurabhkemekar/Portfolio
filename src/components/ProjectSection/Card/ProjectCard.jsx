import React from 'react';
import { Box, Divider, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './projectcard.css';

const TechStackClip = ({ isTechStack, children }) => {
  return (
    <Box className="tech-stack-clip">
      {children}
    </Box>
  );
};

export default function ProjectCard({ data ,key }) {
  return (
    <Box className="project-card" key={key}>
      <Grid container className="project-card-grid">
        <Grid item sm={6} md={4}>
          <Box className="project-card-image-wrapper">
            <Box className="project-card-image-container">
              <img
                src={data.imageUrl}
                alt={`${data.name} project screenshot`}  // More descriptive alt text
                className="project-card-image"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} md={8}>
          <Box className="project-card-content">
            <Box className="project-card-header">
              <Typography variant="h5" className="project-card-title">
                {data.name}
              </Typography>
              <a href={data.link} className="project-card-link" aria-label={`Visit the ${data.name} project`}>
                <ArrowForwardIcon color="#fff" />
              </a>
            </Box>
            <Typography variant="p" className="project-description">
              {data.description}
            </Typography>
            <Box className="project-tech-stack">
              {data.techStack.map((tech, indx) => (
                <TechStackClip key={indx} isTechStack={true}>
                  {tech}
                </TechStackClip>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
