import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function LayoutPage() {
  return (
    <div>
      <div>Visivel sempre</div>
      <Outlet />;
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="Login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
