import MyRoutes from "./routes/MyRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./utils/AuthProvider";

export default function App() {
  return (
    <AuthContext.Provider value={{ displayName: "David Mota", userAuth: true }}>
      <MyRoutes />
    </AuthContext.Provider>
  );
}
