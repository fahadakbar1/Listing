import "./index.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
function OurSidebar() {
  return (
    <Sidebar style={{ height: "100%", position: "absolute" }} collapsed={false}>
      <div className="menu-wrapper">
        <Menu>
          {
            <MenuItem>
              <img src="./logo.png" alt="Logo" />
            </MenuItem>
          }
          <hr />
          <SubMenu label={"Projects"} icon={<DashboardIcon />}>
            <MenuItem icon={<DashboardIcon />}>Project 1</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Project 2</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Project 3</MenuItem>
          </SubMenu>
          <SubMenu label={"Dashboard"} icon={<DashboardIcon />}>
            <MenuItem icon={<DashboardIcon />}>Page 1</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Page 2</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Page 3</MenuItem>
          </SubMenu>
          <SubMenu label={"Reports"} icon={<DashboardIcon />}>
            <MenuItem icon={<DashboardIcon />}>Report 1</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Report 2</MenuItem>
          </SubMenu>
          <SubMenu label={"Members"} icon={<DashboardIcon />}>
            <MenuItem icon={<DashboardIcon />}>Member 1</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Member 2</MenuItem>
          </SubMenu>
          <SubMenu label={"Sample"} icon={<DashboardIcon />}>
            <MenuItem icon={<DashboardIcon />}>Sample 1</MenuItem>
            <MenuItem icon={<DashboardIcon />}>Sample 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<DashboardIcon />}>Sample</MenuItem>
        </Menu>

        <Menu>
          <MenuItem icon={<DashboardIcon />}>Settings</MenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}
export default OurSidebar;
