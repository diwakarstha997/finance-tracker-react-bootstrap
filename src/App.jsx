import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

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
            <p className='page-quote'>
              Make <span>Smart</span> Decisions Track Your Finance with Us
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section>
           {/* Feature 1 */}
           <Row className='bg-success'>
            <Col>
              Image
            </Col>
            <Col className='bg-info'>
              <div>Feature main text</div>
              <div>Feature Description text</div> 
              <hr/>
              <ul>
                <li>list 1</li>
                <li>list 2</li>
              </ul>
            </Col>
          </Row>

          {/* Feature 2 */}
          <Row className='bg-success'>
            <Col className='bg-info'>
            <div>Feature main text</div>
            <div>Feature Description text</div> 
              <div>
                Button
              </div>
            </Col>
            <Col>
              Image
            </Col>
          </Row>
        </section>

        <Footer/>
      </Container>
    </>
  )
}

export default App
