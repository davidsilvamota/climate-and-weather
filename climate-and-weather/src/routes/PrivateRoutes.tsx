import LoginPage from "../pages/LoginPage";

export default function PrivateRoutes(props: { element: any }) {
  const user = false;

  return user ? props.element : <LoginPage />;
}
