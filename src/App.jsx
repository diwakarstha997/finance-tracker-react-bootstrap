import { Button, Col, Container, Row} from 'react-bootstrap'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import TextContent from './components/textContent'

import featureDashboardImg from "./assets/featureDashboard.png"
import featureExpenseImg from "./assets/featureExpense.png"

function App() {

  return (
    <>
      <Container>
        <Navbar/>

        {/* Hero section */}
        <section>
          <Row className='my-5'>
            <Col className=''>
              <div className='hero-section-tag'>
                <span>Solution to track your finance</span>
              </div>
              <div className='hero-main-text'>
                Visualize &lt;Icon&gt; Your <span class="underlined">Finance</span> to Plan Ahead
              </div>
              <div className='hero-welcome-text'>
                Welcome to FinanceTracker, tracking your finance was never easy.
              </div>
              <Button style={{fontSize: "24px"}} className="btn-dark rounded-pill px-5 py-2">
                Get Started
              </Button>
            </Col>
            <Col className='image-box'>
              <img src="https://lntedutech.com/wp-content/uploads/2024/04/Personal-Finance-Management-scaled-1.jpg" alt="dashboard-img" width="100%"/>
            </Col>
          </Row>
        </section>

        {/* Quote Section */}
        <section>
          <div className='d-flex justify-content-center'> 
            <p className='page-quote span-color'>
              Make <span>Smart</span> Decisions Track Your Finance with Us
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section>
          <Container className='feature-bg my-4'>        
            {/* Feature 1 */}
            <Row>
              <Col className='mx-4'>
                <div className='image-box border border-dark'>
                  <img src={featureDashboardImg} alt="dashboard-img" width="100%"/>
                </div>
              </Col>
              <Col className='mx-4'>
                <TextContent content={["Dashboard with ",<span style={{color:"#408cfc"}}>Analytical</span>," Graph"]} fontWeight="bold" fontSize="64px" minimumWidth="600px"/>
                <TextContent content="Gain visual graph projection of your financial track with attractive dashboards." addClass="mb-5"/>
                <hr />
                <ul style={{fontWeight: "bolder"}}>
                  <li>Keep Tracking Balance</li>
                  <li>Visualize Cash Flow</li>
                </ul>
              </Col>
            </Row>
          </Container>

          <Container className='feature-bg my-5'>
            {/* Feature 2 */}
            <Row>
              <Col className='mx-4'>
                <TextContent content={[<span style={{color:"#408cfc"}}>Track</span>," Your All Expense Easily"]} fontWeight="bold" fontSize="64px" minimumWidth="600px"/>
                <TextContent 
                  content="Effortlessly monitor and manage all your expenses 
                          with our intuitive tracking system. Stay on top of 
                          your finances by easily recording and categorizing 
                          expenses, ensuring you have a clear overview of your 
                          spending habits."
                  addClass="mb-5"
                />
                <Button style={{fontSize: "24px"}} className="btn-dark rounded-pill px-5 py-2">
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

export default App
