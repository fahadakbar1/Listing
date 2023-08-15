import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Add, Padding } from "@mui/icons-material";

const Projects: React.FC = () => {
  return (
    <div style={{ width: "87%", marginLeft: "13%" , padding:'30px 0px 30px 20px'}}>
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
          <Typography variant="button">Add Project</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
