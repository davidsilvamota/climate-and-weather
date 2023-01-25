import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

function LayoutPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="Home" element={<PrivateRoutes element={<HomePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
