import Sidebar from "./components/Sidebar";
import SearchBar from "./components/Searchbar";
import Projects from "./pages/Projects";
import { TableDataProvider } from "./components/TableDataProvider";
import CustomTable from "./components/Table";
const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <SearchBar />
      <Projects />
      <TableDataProvider>
        <CustomTable />
      </TableDataProvider>
    </div>
  );
};

export default App;
