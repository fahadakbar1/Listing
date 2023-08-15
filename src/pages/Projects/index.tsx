import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Add } from "@mui/icons-material";

const Projects = () => {
  return (
    <div style={{ width: "87%", marginLeft: "13%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Projects</h1>
        <Button
          variant="contained"
          color="success" // Green background color
          startIcon={<Add />} // Icon before the text
        >
          <Typography variant="button">Button Text</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
