import React, { ReactNode, createContext, useContext, useState } from "react";

interface ProjectData {
  id: number;
  projectName: string;
  testScenarios: number;
  testCases: number;
  defects: number;
  teamMembers: string[];
  createdBy: string;
  createdDate: string;
}

const TableDataContext = createContext<ProjectData[]>([]);

const tableData: ProjectData[] = [
  {
    id: 1,
    projectName: "Quality Assurance",
    testScenarios: 4,
    testCases: 3,
    defects: 10,
    teamMembers: [
      "Avatar1.jpg",
      "Avatar2.jpg",
      "Avatar3.jpg",
      "Avatar4.jpg",
      "Avatar5.jpg",
      "Avatar6.jpg",
    ],
    createdBy: "John Doe",
    createdDate: "2023-08-15",
  },
  {
    id: 2,
    projectName: "Project X",
    testScenarios: 6,
    testCases: 5,
    defects: 8,
    teamMembers: ["Avatar7.jpg", "Avatar8.jpg", "Avatar9.jpg", "Avatar10.jpg"],
    createdBy: "Jane Smith",
    createdDate: "2023-07-28",
  },
  {
    id: 3,
    projectName: "Feature Development",
    testScenarios: 3,
    testCases: 2,
    defects: 5,
    teamMembers: ["Avatar11.jpg", "Avatar12.jpg"],
    createdBy: "Michael Johnson",
    createdDate: "2023-07-10",
  },
  {
    id: 4,
    projectName: "User Interface",
    testScenarios: 8,
    testCases: 7,
    defects: 12,
    teamMembers: ["Avatar13.jpg", "Avatar14.jpg", "Avatar15.jpg"],
    createdBy: "Emily Brown",
    createdDate: "2023-06-22",
  },
  {
    id: 5,
    projectName: "Database Optimization",
    testScenarios: 5,
    testCases: 4,
    defects: 6,
    teamMembers: [
      "Avatar16.jpg",
      "Avatar17.jpg",
      "Avatar18.jpg",
      "Avatar19.jpg",
    ],
    createdBy: "David Wilson",
    createdDate: "2023-06-05",
  },
  {
    id: 6,
    projectName: "Security Enhancements",
    testScenarios: 7,
    testCases: 6,
    defects: 9,
    teamMembers: ["Avatar20.jpg", "Avatar21.jpg", "Avatar22.jpg"],
    createdBy: "Sarah Davis",
    createdDate: "2023-05-18",
  },
];
export const useTableData = (): ProjectData[] => {
  return useContext(TableDataContext);
};

export const TableDataProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState<ProjectData[]>(tableData);

  return (
    <TableDataContext.Provider value={data}>
      {children}
    </TableDataContext.Provider>
  );
};
