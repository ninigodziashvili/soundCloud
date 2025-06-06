import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <h1>Main Content Area</h1>
        <p>This is where your main content will be displayed.</p>
      </div>
    </>
  );
}

export default App;