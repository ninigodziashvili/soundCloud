import "./App.css";
import ListeningCard from "./components/ListeningCard";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <ListeningCard/>
      </div>
    </>
  );
}

export default App;