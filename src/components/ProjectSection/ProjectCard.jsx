import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const TechStackClip = styled(Box)(({ isTechStack, theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  padding: isTechStack ? "2px 4px" : "2px 10px",
  borderRadius: isTechStack ? "5px" : "10px",
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: isTechStack ? "13.5px" : "18px",
  backgroundColor: "transparent",
  maxWidth: "max-content",
}));
export default function ProjectCard({ data }) {
  return (
    <Box
      marginBottom={"20px"}
      sx={{
        borderBottom: "1px solid #e5e7eb",
        borderRight: "1px solid #e5e7eb",
        borderRadius: "15px",
        boxShadow: "0px 3px rgba(99, 99, 99, 0.2)",
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sm={6} md={4}>
          <Box
            sx={{
              padding: "20px 30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                transition: "transform 0.25s",
                ":hover": { transform: "scale(1.1)" },
              }}
            >
              <img
                src={data.imageUrl}
                alt="project-image"
                style={{
                  maxWidth: "250px",
                  borderRadius: "5px",
                  aspectRatio: "4/3",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} md={8}>
          <Box sx={{ padding: "20px 30px" }}>
            <Box sx={{ display: "flex", gap: "10px", alignContent: "center" }}>
              <Typography
                sx={{ fontSize: "30px", color: "#fff", fontWeight: 700 }}
              >
                {data.name}
              </Typography>
              <a href={data.link}>
                <ArrowForwardIcon color="primary" />
              </a>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <TechStackClip isTechStack={false}>{data.date}</TechStackClip>
            </Box>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              {data.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                marginTop: "15px",
              }}
            >
              {data.techStack.map((tech, indx) => (
                <TechStackClip key={indx} isTechStack={true}>
                  {tech}
                </TechStackClip>
              ))}
            </Box>
          </Box>
        </Grid>
        <Divider />
      </Grid>
    </Box>
  );
}
