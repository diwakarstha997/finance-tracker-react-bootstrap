import { Button, Form } from "react-bootstrap"
import InputField from "./InputField"

const SignupForm = () => {
    return(
        <Form>
            <InputField label="Email"/>
            <InputField label="Password"/>
            <InputField label="Confirm Password"/>
            <div className="d-grid">
                <Button className="btn-dark my-3 px-5 py-2">Sign up</Button>
            </div>
        </Form>
    )
}

export default SignupForm;