import { Button, Col, Row, Stack } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router";

const Navbar = () => {
    return(
        <Row className="py-4">
            <Col className="d-flex justify-content-start">
                <Link to="/" className="nav-link"><Logo /></Link>
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
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Button className="btn-dark rounded-pill px-4">
                        <Link to="/register" className="nav-link">Get Started</Link>
                    </Button>
                </Stack>
            </Col>
        </Row>
    )
}

export default Navbar;