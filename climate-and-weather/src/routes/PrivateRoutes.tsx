import { useContext } from "react";
import LoginPage from "../pages/LoginPage";
import AuthContext from "../utils/AuthProvider";

export default function PrivateRoutes(props: { element: any }) {
  const { userAuth } = useContext(AuthContext);

  return userAuth ? props.element : <LoginPage />;
}
