import React from "react";
import "./contact.css";
import { Box, Typography } from "@mui/material";


export default function Contact() {
    return <Box className="contact-container">
        <Box className="card">
            <Typography variant="h2">Let's Connect</Typography>
            <Typography variant="p" className="text">New challenges excite me! If you’ve got a project that pushes boundaries, let’s collaborate and bring it to life.</Typography>
            <button className="contact-button">Say Hello</button>
        </Box>
    </Box>
}