import { Form } from "react-bootstrap"

const InputField = ({label, inputFieldAttribute}) => {
    return(
        <Form.Group className="my-3">
            <Form.Label className="fw-bold">{label}</Form.Label>

            <input 
                {...inputFieldAttribute}
                className="input-field"
            />
        </Form.Group>
    )
}

export default InputField;