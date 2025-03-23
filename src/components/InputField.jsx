import { Form } from "react-bootstrap"

const InputField = ({label, inputFieldAttribute}) => {
    return(
        <Form.Group>
            <Form.Label>{label}</Form.Label>

            <Form.Control 
                {...inputFieldAttribute}
            />
        </Form.Group>
    )
}

export default InputField;