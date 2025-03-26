import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/LoginForm"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router";

const LoginPage = () => {
    return(
        <Container>
            <Navbar />
            <Row className='mx-5 my-5'>
              <Col className='bg-color-grenishblue-light border border-dark border-1 px-5 py-5'>
                <Container className="py-4">
                    <span className="text-color-grenishblue-dark heading-5 fw-bold">Welcome Back!</span>
                    <div className="my-2" >
                        Start tracking your transaction faster and better
                    </div>
                    <hr/>
                    <LoginForm />
                    <div className="text-center my-2" >
                        Don't have an account <Link to="/register" className="text-color-grenishblue-dark">Create Account</Link>
                    </div>
                </Container>
              </Col>
              <Col className='align-content-center image-box px-5'>
                  <div className='image-box border border-dark'>
                    <img src="https://lntedutech.com/wp-content/uploads/2024/04/Personal-Finance-Management-scaled-1.jpg" alt="dashboard-img" width="100%"/>
                  </div>
              </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default LoginPage;