import { Col, Row, Stack } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "./logo";
import TextContent from "./textContent";

const Footer = () => {
    return(
        <>
            <Row className="my-4">
                <Col>
                    <Stack gap={3}>
                        <div>
                           <Logo fontSize="32px"/>
                        </div>
                        <TextContent 
                            content="Welcome to FinanceTracker, tracking your finance was never easy." 
                            fontSize="18px"
                            minimumWidth="400px"
                        />
                        <Stack direction="horizontal" gap={3}>
                            <div style={{padding: "10px", height: "50px", width: "50px"}} className="border border-secondary rounded-circle text-center">
                                <FaFacebookF />
                            </div>
                            <div style={{padding: "10px", height: "50px", width: "50px"}} className="border border-secondary rounded-circle text-center">
                                <FaTwitter />
                            </div>
                            <div style={{padding: "10px", height: "50px", width: "50px"}} className="border border-secondary rounded-circle text-center">
                                <FaInstagram />
                            </div>
                            <div style={{padding: "10px", height: "50px", width: "50px"}} className="border border-secondary rounded-circle text-center">
                                <FaLinkedin />
                            </div>
                        </Stack>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={3}>
                        <h4>Company</h4>
                        <Stack gap={2}>
                            <div>Home</div>
                            <div>About Us</div>
                            <div>Contact</div>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
            <Row className="text-center">
                <p> &copy; Copyright All Reserved</p>
            </Row>
        </>
    )
}

export default Footer;