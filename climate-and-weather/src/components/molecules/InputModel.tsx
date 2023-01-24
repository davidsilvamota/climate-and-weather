import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

type InputModelProps = {
  label: string;
  type: string;
  value?: string | number | string[] | undefined;
  onChange?: React.ChangeEventHandler | undefined;
  isInvalid?: boolean;
  invalidMessage?: string;
};
export function InputModel(props: InputModelProps) {
  return (
    <FloatingLabel
      controlId="floatingInput"
      label={props.label}
      className="mb-3"
    >
      <Form.Control
        value={props.value}
        onChange={props.onChange}
        type="email"
        placeholder={props.label}
        isInvalid={props.isInvalid}
      />
      <Form.Control.Feedback type="invalid">
        {props.invalidMessage || "inválido"}
      </Form.Control.Feedback>
    </FloatingLabel>
  );
}
