import { Button, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { VscGraph } from "react-icons/vsc";

import featureDashboardImg from "../assets/featureDashboard.png"
import featureExpenseImg from "../assets/featureExpense.png"
import CustomTag from '../components/CustomTag';

const LandingPage = () => {
    return(
        <>
        <Container>
          <Navbar/>
  
          {/* Hero section */}
          <section>
            <Row className='my-5'>
              <Col className=''>

                <CustomTag
                  label="Solution to track your finance"
                  className='text-color-purple bg-color-purple-light px-4 py-2 mb-3'
                />

                <div className="heading-1 fw-bold text-wrap-width-2" >
                  Visualize <VscGraph /> Your <span className="text-underlined-curve">Finance</span> to Plan Ahead
                </div>

                <div className="heading-6 mb-4" >
                  Welcome to FinanceTracker, tracking your finance was never easy.
                </div>
        
                <Button className="btn-dark btn-lg rounded-pill px-5 py-2">
                  Get Started
                </Button>
              </Col>
              <Col className='image-box'>
                  <div className='image-box border border-dark'>
                    <img src="https://lntedutech.com/wp-content/uploads/2024/04/Personal-Finance-Management-scaled-1.jpg" alt="dashboard-img" width="100%"/>
                  </div>
              </Col>
            </Row>
          </section>
  
          {/* Quote Section */}
          <section>
            <div className='d-flex justify-content-center'> 
              <div className="heading-1 text-center text-wrap-width-3" >
                Make <span className='text-color-secondary'>Smart</span> Decisions Track Your Finance with Us
              </div>
            </div>
          </section>
  
          {/* Feature Section */}
          <section>
            <Container className='border-rounded bg-color-grey-light p-5 my-4'>        
              {/* Feature 1 */}
              <Row>
                <Col className='mx-4'>
                  <div className='image-box border border-dark'>
                    <img src={featureDashboardImg} alt="dashboard-img" width="100%"/>
                  </div>
                </Col>
                <Col className='mx-4'>
                  <div className="fw-bold heading-2 text-wrap-width-2" >
                    Dashboard with <span className='text-color-secondary '>Analytical</span> Graph
                  </div>
                  
                  <div className="mb-5">
                    Gain visual graph projection of your financial track with attractive dashboards.
                  </div>
                 
                  <hr />
                  <ul style={{fontWeight: "bolder"}}>
                    <li key="1">Keep Tracking Balance</li>
                    <li key="2">Visualize Cash Flow</li>
                  </ul>
                </Col>
              </Row>
            </Container>
  
            <Container className='border-rounded bg-color-grey-light p-5 my-5'>
              {/* Feature 2 */}
              <Row>
                <Col className='mx-4'>
                  <div className="fw-bold heading-2 text-wrap-width-2" >
                    <span className='text-color-secondary '>Track</span> Your All Expense Easily
                  </div>
                 
                  <div className="mb-5">
                    Effortlessly monitor and manage all your expenses 
                    with our intuitive tracking system. Stay on top of 
                    your finances by easily recording and categorizing 
                    expenses, ensuring you have a clear overview of your 
                    spending habits.
                  </div>
                
                  <Button className="btn-dark btn-lg rounded-pill px-5 py-2">
                    Get Started
                  </Button>
                </Col>
                <Col className='mx-4'>
                  <div className='image-box border border-dark'>
                    <img src={featureExpenseImg} alt="expense-img" width="100%"/>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
  
          <Footer/>
        </Container>
      </>
    )
}

export default LandingPage;