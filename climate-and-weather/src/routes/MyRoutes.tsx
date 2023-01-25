import { RecordWithTtl } from "dns";
import React, { ReducerAction } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

function LayoutPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Outlet />
    </div>
  );
}
function PrivateRoute(props: { element: any }) {
  const user = false;

  return user ? props.element : <LoginPage />;
}
export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="Home" element={<PrivateRoute element={<HomePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
