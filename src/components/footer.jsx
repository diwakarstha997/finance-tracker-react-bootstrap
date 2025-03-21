import { Col, Container, Row, Stack } from "react-bootstrap";
import Logo from "./logo";
import TextContent from "./textContent";

const Footer = () => {
    return(
        <>
            <Row className="">
                <Col className="">
                    <Stack>
                        <div>
                           <Logo fontSize="32px"/>
                        </div>
                        <TextContent 
                            content="Welcome to FinanceTracker, tracking your finance was never easy." 
                            fontSize="18px"
                            minimumWidth="400px"
                        />
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
            <Row className="text-center">
                <p> &copy; Copyright All Reserved</p>
            </Row>
        </>
    )
}

export default Footer;