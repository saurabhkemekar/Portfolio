import { Box, Grid, Typography } from "@mui/material";

export default function ExperienceSection() {
  const data = [
    {
      id: 1,
      imageUrl: "./experience/ps.png",
      name: "Publicis Sapient",
      desc: [
        "Worked on React.JS, Next.JS for developing the full fledge user and admin portal for client PTT public company limited Thailand",
        " Worked on implementing the BFF layer (Backend for Frontend Pattern)",
        "Demonstrated effective collaboration with cross-functional teams, fostering a dynamic and cohesive working environment.",
        "Worked with a varity of technologies including JavaScript, React.js, GraphQL, Material UI, CSS, HTML and others",
      ],
      startDate: "September 2023 ",
      endDate: " Present",
    },
    {
      id: 2,
      imageUrl: "./experience/ivlabs.png",
      name: "IvLabs",
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
      {data.map((item) => {
        return (
          <Grid
            container
            sx={{
              marginTop: "10px",
              boxShadow: "0px 3px rgba(99, 99, 99, 0.2)",
            }}
          >
            <Grid item sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#f9fafb",
                  height: "100%",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt="company logo"
                  style={{
                    aspectRatio: "4/3",
                    maxWidth: "150px",
                    maxHeight: "150px",
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={6} md={8}>
              <Box sx={{ padding: "20px 30px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        color: "#21243D",
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: "600" }}
                    >{`${item.startDate}-${item.endDate}`}</Typography>
                  </Box>
                </Box>

                <Box>
                  <ul>
                    {item.desc.map((point, indx) => (
                      <li key={indx}>
                        <Typography variant="body1">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
