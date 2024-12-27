import { Box, Typography } from "@mui/material";
import SectionHeading from "../atoms/Heading/SectionHeading";
import "./experienceSection.css"
export default function ExperienceSection() {
  const data = [
    {
      id: 1,
      imageUrl: "./experience/ps.png",
      name: "Publicis Sapient",
      position: 'Associate Software Engineer 2',
      desc: [
  "Revamped the user interface of a large-scale application making it responsive design and developed a reusable component. Enhanced the overall user experience and performance across the application, leading to faster load times and a smoother user experience.",
  "Engineered comprehensive end-to-end unit tests for each component, ensuring robustness and reliability with over 90% code coverage, significantly reducing bugs in production by 20%.",
  "Developed full-fledged Customer and Admin portals using React.js and Next.js, delivering robust and scalable solutions. Contributed to creating the Custom Components to increase code reusability which could be used across different projects.",
  "Collaborated closely with multiple cross-functional teams, fostering a cohesive work environment, while adhering to best practices and maintaining clean code standards.",
  "Designed a system to monitor and schedule API calls, incorporating features for seamless data sharing and reducing redundancy.",
  "Built an intuitive UI to group and visualize API call data, including failure rates, response times, and performance metrics, with a heatmap to analyze the scheduled API journeys and identify peak usage times."
],
      startDate: "September 2023 ",
      endDate: " Present",
    },
    {
      id: 2,
      imageUrl: "./experience/ivlabs.png",
      name: "IvLabs",
      position: 'Intern',
      desc: [
        "Implemented various algorithm which separated out the foreground object from background, can be used for detecting the moving object.",
        "TechStack Python, OpenCV, Numpy",
      ],
      startDate: "June 2019 ",
      endDate: " July 2019",
    },
  ];
  return (
    <Box>
      <SectionHeading index="02." name="Worked " />
      {data.map((item) => {
        return (
          <Box class="experience-container">
            <Box class="time">
              <p class="date-text">{`${item.startDate} - ${item.endDate}`}</p>
            </Box>
            <Box class="main">

              <Box className="workplace-header">
                <Typography className="position-text">{item.position} @ <span className="work-text">{item.name}</span> </Typography>
              </Box>
              <Box>
                {item.desc.map((ele,indx) => (<Box className="list-item" key={indx} >
                  <Box className="list-icon">
                    <svg fill="#e1ff00" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#e1ff00" stroke-width="0.000024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.64,6.231A1,1,0,0,0,8,7V17a1,1,0,0,0,.576.905A.989.989,0,0,0,9,18a1,1,0,0,0,.64-.231l6-5a1,1,0,0,0,0-1.538ZM10,14.865V9.135L13.438,12Z"></path></g></svg>
                  </Box>
                  <Box><p className="info">{ele}</p></Box>
                </Box>))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
