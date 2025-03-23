import { Form } from "react-bootstrap"
import InputField from "./InputField"

const LoginForm = () => {
    return(
        <Form>
            <InputField label="email"/>
            <InputField label="password"/>
            <Button>Login</Button>
        </Form>
    )
}

export default LoginForm;