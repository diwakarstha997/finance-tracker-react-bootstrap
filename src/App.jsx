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
          <Row className='bg-success'>
            <Col className='bg-info'>
              <div>Hero beginning text</div>
              <div>Hero main text</div>
              <div>Hero welcome text</div>
              <div>
                Button
              </div>
            </Col>
            <Col>
              Image
            </Col>
          </Row>
        </section>

        {/* Quote Section */}
        <section>
          <h1 className='text-center'>Landing Page Main text</h1>
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
