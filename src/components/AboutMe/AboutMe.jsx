import React, { useRef, useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import SectionHeading from "../atoms/Heading/SectionHeading"
import "./aboutMe.css"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
export default function AboutMe() {
    const ref = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);

    const isIntersecting = useIntersectionObserver(ref);

    // useEffect(() => {
    //     if (isIntersecting) {
    //         const element = document.getElementsByClassName("image-stack")[0];
    //         element.classList.add("fillup-animaton");
    //     }
    // },[isIntersecting])



    return <Box style={{ width: '100%' }}>
        <SectionHeading index='01.' name="About Me" />
        <Box className="aboutme-container">
            <Box id="image-wrapper" ref={ref} className="image-container ">
                <img src="./profile.jpeg" alt="profile-image" className="profile-img" />
                <Box className="image-stack fillup-animation" />
            </Box>
            <Box className="aboutme-description">
                <Typography variant="p">I specialize in building scalable and efficient applications. With a strong focus on both front-end and back-end development, I thrive on solving complex problems and delivering high-quality solutions. My approach is simple: understand the problem, iterate quickly, and create impactful results. <br/></Typography>
                <Typography style={{marginTop:"20px"}} variant="p">Currently, I'm working at Publicis Sapient, where I am involved in developing a telecom mobile application for various customer-facing verticals. My focus is on ensuring the app is lightweight, efficient, and accessible to all users.</Typography>
                <Box className="skills">
                    <Typography variant="p"> Few skills I am proficient with</Typography>
                    <Box className="grid-container">
                        {["React.js", "Redux", "GraphQL", "Node.js", "JavaScript", "TypeScript", "Java", "Docker", "AWS",].map((item, index) => (<Box id={`${item}-${index}`} className="grid-item">
                            <Box className="list-icon">
                                <svg fill="#e1ff00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#e1ff00" stroke-width="0.000024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538ZM10,14.865V9.135L13.438,12Z"></path></g></svg>
                            </Box>
                            <p className="skill-text">{item}</p>
                        </Box>))}

                    </Box>


                </Box>
            </Box>

        </Box>
    </Box>
}