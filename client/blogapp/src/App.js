import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Layouts from "./pages/Layouts";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" index element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
