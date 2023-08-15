import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Box, Typography, Select, MenuItem, Pagination } from "@mui/material";
import { TableDataProvider } from "../../components/TableDataProvider";
import CustomTable from "../../components/Table";

const Projects: React.FC = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "5px",
    },
    select: {
      background: "rgba(77, 77, 179, 0.1)",
      border: "1px solid rgba(77, 77, 179, 0.4)",
      borderRadius: "4px",
      padding: "4px",
    },
  };

  return (
    <div
      style={{ width: "87%", marginLeft: "13%", padding: "30px 0px 30px 20px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h1>Projects</h1>
        <Button variant="contained" color="success" startIcon={<Add />}>
          <Typography variant="button">Add Project</Typography>
        </Button>
      </div>
      <TableDataProvider>
        <CustomTable />
      </TableDataProvider>
      <Box sx={styles.container}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">Rows Per Page:</Typography>
          <Select value={8} style={styles.select}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Pagination count={10} page={1} />
      </Box>
    </div>
  );
};

export default Projects;
