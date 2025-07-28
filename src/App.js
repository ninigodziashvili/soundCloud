import "./App.css";
import ListeningCard from "./components/ListeningCard";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
      <div className="main-cont">
      <Sidebar />
      <div className="main-content">
        <ListeningCard/>
      </div>
      </div>
    </>
  );
}

export default App;