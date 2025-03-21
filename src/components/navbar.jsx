import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const Navbar = () => {
    return(
        <Row>
            <Col className="d-flex justify-content-start bg-primary">Logo</Col>
            <Col className="d-flex justify-content-center bg-secondary">
                <Stack direction="horizontal" gap={5}>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Contact</div>
                </Stack>
            </Col>
            <Col className="d-flex justify-content-end bg-danger">Buttons</Col>
        </Row>
    )
}

export default Navbar;