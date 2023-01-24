import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function LayoutPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="Login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
