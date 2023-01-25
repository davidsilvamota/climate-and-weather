import { InputModel } from "../components/molecules/InputModel";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <Button onClick={() => navigate("/Home")} variant="primary" size="lg">
          Login
        </Button>
      </Card>
    </div>
  );
}
