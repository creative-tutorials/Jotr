import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardComponent from "./components/dashboard/dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
