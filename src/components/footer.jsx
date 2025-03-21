import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer = () => {
    return(
        <>
            <Row className="bg-info">
                <Col className="bg-warning">
                    <Stack>
                        <div>
                            <h3>
                                Logo
                            </h3>
                        </div>
                        <div>Text</div>
                        <div>socials</div>
                    </Stack>
                </Col>
                <Col>
                    <Stack>
                        <h4>Company</h4>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </Stack>
                </Col>
            </Row>
            <Row className="text-center bg-light">
                <p> &copy; Copyright All Reserved</p>
            </Row>
        </>
    )
}

export default Footer;