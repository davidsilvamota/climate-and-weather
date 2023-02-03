import { InputModel } from "../components/molecules/InputModel";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthProvider";

export default function LoginPage() {
  const { displayName, userAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log({ userAuth });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card className="p-5 m-1">
        {displayName}
        <Image
          style={{ maxWidth: 400 }}
          fluid={true}
          className="mb-5"
          src="https://www.seekpng.com/png/detail/138-1388103_user-login-icon-login.png"
        />
        <InputModel
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          label="Email"
          type="email"
          isInvalid={false}
        />
        <InputModel
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          label="Senha"
          type="password"
          isInvalid={false}
        />
        <Button
          onClick={() => {
            navigate("/Home");
            console.log("clicou");
          }}
          variant="primary"
          size="lg"
        >
          Login
        </Button>
      </Card>
    </div>
  );
}
