import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Checkbox,
} from "@mui/material";
import { useTableData } from "../TableDataProvider";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CustomTable: React.FC = () => {
  const tableData = useTableData();

  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{
        borderRadius: 8,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "85%",
        marginLeft: "14%",
      }}
    >
      <Table>
        <TableHead style={{ backgroundColor: "rgba(77, 77, 179, 0.1)" }}>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Team Members</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.slice(0, 8).map((row) => (
            <TableRow key={row.id} style={{ borderBottom: "1px solid #ccc" }}>
              <TableCell>
                <Checkbox></Checkbox>
              </TableCell>
              <TableCell>
                <h3>{row.projectName}</h3>
                <p>
                  ({row.testScenarios} Test Scenarios, {row.testCases} Test
                  Cases, {row.defects} Defects)
                </p>
              </TableCell>
              <TableCell style={{ display: "flex", border: "none" }}>
                {row.teamMembers.slice(0, 4).map((member, index) => (
                  <Avatar
                    key={index}
                    src={member}
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
                {row.teamMembers.length > 4 && (
                  <Avatar>+{row.teamMembers.length - 4}</Avatar>
                )}
              </TableCell>
              <TableCell>{row.createdBy}</TableCell>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>
                <BookmarkBorderIcon />
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
