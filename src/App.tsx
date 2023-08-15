import Sidebar from "./components/Sidebar";
import SearchBar from "./components/Searchbar";
import Projects from "./pages/Projects";
const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <SearchBar />
      <Projects />
    </div>
  );
};

export default App;
