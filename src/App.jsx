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

        <Footer/>
      </Container>
    </>
  )
}

export default App
