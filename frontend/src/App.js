import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;