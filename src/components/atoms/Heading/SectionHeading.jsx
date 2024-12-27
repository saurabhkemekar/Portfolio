import { Box, Typography } from "@mui/material";
import "./sectionHeading.css"
export default function SectionHeading({ index, name }) {
    return <Box className="heading-container">
        <Typography variant="h4" fontWeight="500" className="section-index">{index}</Typography>
        <Typography variant="h4" className="section-name">{name}</Typography>
        <Box className="divider"></Box>
    </Box>
    
}