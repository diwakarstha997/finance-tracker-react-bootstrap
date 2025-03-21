import { Button, Col, NavLink, Row, Stack } from "react-bootstrap";
import Logo from "./logo";

const Navbar = () => {
    return(
        <Row className="py-4">
            <Col className="d-flex justify-content-start">
                <Logo />
            </Col>
            <Col className="d-flex justify-content-center">
                <Stack direction="horizontal" gap={5}>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Contact</div>
                </Stack>
            </Col>
            <Col className="d-flex justify-content-end">
                <Stack direction="horizontal" gap={5}>
                    <NavLink>
                        Login
                    </NavLink>
                    <Button className="btn-dark rounded-pill px-4">
                        Get Started
                    </Button>
                </Stack>
            </Col>
        </Row>
    )
}

export default Navbar;