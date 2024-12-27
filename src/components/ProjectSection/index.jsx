import { Box } from "@mui/material";
import ProjectCard from "./Card/ProjectCard";
import SectionHeading from "../atoms/Heading/SectionHeading";

export default function ProjectSection() {
  const projectData = [
    {
      name: "Image Mosaicing",
      description:
        "Generate 360-degree panorama of 5000 Images. The SIFT technique was used to find the features in the image. Using the bit masking concept, eliminate artifacts that appeared while stitching 2 images",

      imageUrl: "./project/image-mosaicing.png",
      link: "https://github.com/saurabhkemekar/Image-Mosaicing",
      techStack: ["Python", "OpenCV", "Numpy", "Matplotlib"],
      date: "2020",
    },
    {
      name: "Semantic Segmentation",
      description:
        "The project's goal is to use the Unet architecture to classify each pixel in an image according to its category. The Camvid dataset was used for the training and inference of the model.",
      imageUrl: "./project/seg_img.png",
      link: "https://github.com/saurabhkemekar/Semantic-Segmentation",
      techStack: ["Python", "Tensorflow"],
      date: "2021",
    },
    {
      name: "Air Quality Management System",
      description:
        "Developed a system that helps to find the temperature and concentration of gases in the room. Built a mobile application using MIT Inventor and used firebase to send the reading of the sensor to the application.",
      imageUrl: "./project/air-quality.jpg",
      link: "https://github.com/theViz343/Air_quality_management_system",
      techStack: ["C++", "ESP32", "Firebase", "MIT Inventor"],
      date: "2018",
    },
  ];
  return (
    <Box marginTop={"3%"}>
      <SectionHeading index={'04.'} name="What I've Built"/>
      {projectData.map((data, indx) => (
        <ProjectCard data={data} key={indx} />
      ))}
    </Box>
  );
}
