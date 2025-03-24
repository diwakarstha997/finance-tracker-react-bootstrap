import { Button, Form } from "react-bootstrap"
import InputField from "./InputField"

const LoginForm = () => {
    return(
        <Form>
            <InputField label="Email"/>
            <InputField label="Password"/>
            <div className="d-grid">
                <Button className="btn-dark my-3 px-5 py-2">Login</Button>
            </div>
        </Form>
    )
}

export default LoginForm;