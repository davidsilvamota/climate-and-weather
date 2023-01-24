import { InputModel } from "../components/molecules/InputModel";
import Card from "react-bootstrap/Card";
import { Button, Image } from "react-bootstrap";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Card className="p-4">
        <Image
          style={{ maxWidth: 450 }}
          fluid={true}
          className="mb-4"
          src="https://www.seekpng.com/png/detail/138-1388103_user-login-icon-login.png"
        />
        <InputModel label="Email" type="email" />
        <InputModel label="Senha" type="password" />
        <Button variant="primary" size="lg">
          Login
        </Button>
      </Card>
    </div>
  );
}
