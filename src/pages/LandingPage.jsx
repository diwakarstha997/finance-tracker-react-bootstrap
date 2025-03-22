import { Button, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TextContent from '../components/TextContent'
import { VscGraph } from "react-icons/vsc";

import featureDashboardImg from "../assets/featureDashboard.png"
import featureExpenseImg from "../assets/featureExpense.png"
import Tag from '../components/Tag';

const LandingPage = () => {
    return(
        <>
        <Container>
          <Navbar/>
  
          {/* Hero section */}
          <section>
            <Row className='my-5'>
              <Col className=''>

                <Tag
                  label="Solution to track your finance"
                  className='text-color-purple bg-color-purple-light px-4 py-2 mb-3'
                />

                <TextContent 
                  content={["Visualize ", <VscGraph />," Your ",<span className="text-underlined-curve">Finance</span>," to Plan Ahead"]}
                  className="heading-1 font-weight-bold" 
                  minimumWidth="600px"
                />
                <TextContent 
                  content="Welcome to FinanceTracker, tracking your finance was never easy."
                  className="heading-5 mb-4"
                />
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
              <TextContent
                content={["Make ",<span className='text-color-secondary'>Smart</span>," Decisions Track Your Finance with Us"]}
                className="heading-1 text-center"
                minimumWidth="63%"
              />
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
                  <TextContent content={["Dashboard with ",<span className='text-color-secondary '>Analytical</span>," Graph"]} className="font-weight-bold heading-2" minimumWidth="600px"/>
                  <TextContent content="Gain visual graph projection of your financial track with attractive dashboards." className="mb-5"/>
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
                  <TextContent content={[<span className='text-color-secondary '>Track</span>," Your All Expense Easily"]} className="font-weight-bold heading-2" minimumWidth="600px"/>
                  <TextContent 
                    content="Effortlessly monitor and manage all your expenses 
                            with our intuitive tracking system. Stay on top of 
                            your finances by easily recording and categorizing 
                            expenses, ensuring you have a clear overview of your 
                            spending habits."
                    className="mb-5"
                  />
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