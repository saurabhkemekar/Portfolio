import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const projectData = [
    {
      name: "Air Quality Management System",
      description:
        "Developed a system that helps to find the temperature and concentration of gases in the room. Built a mobile application using MIT Inventor and used firebase to send the reading of the sensor to the application.",
      imageUrl: "../../asset/profile.jpeg",
      link: "https://github.com/theViz343/Air_quality_management_system",
      techStack: ["C++", "ESP32", "Firebase", "MIT Inventor"],
      date: "2018",
    },
    {
      name: "Air Quality Management System",
      description:
        "Developed a system that helps to find the temperature and concentration of gases in the room. Built a mobile application using MIT Inventor and used firebase to send the reading of the sensor to the application.",
      imageUrl: "../../asset/profile.jpeg",
      link: "https://github.com/theViz343/Air_quality_management_system",
      techStack: ["C++", "ESP32", "Firebase", "MIT Inventor"],
      date: "2018",
    },
    {
      name: "Air Quality Management System",
      description:
        "Developed a system that helps to find the temperature and concentration of gases in the room. Built a mobile application using MIT Inventor and used firebase to send the reading of the sensor to the application.",
      imageUrl: "../../asset/profile.jpeg",
      link: "https://github.com/theViz343/Air_quality_management_system",
      techStack: ["C++", "ESP32", "Firebase", "MIT Inventor"],
      date: "2018",
    },
  ];
  return (
    <Box marginTop={"3%"}>
      {projectData.map((data, indx) => (
        <ProjectCard data={data} />
      ))}
    </Box>
  );
}
