import React from 'react'
import './Mystery.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'

export default function Mystery() {
  return (
    <>
      <h1 className='mystery mt-5'>Mystery Movies</h1>

      <div class="container mt-5 mb-5">

        <Row className="g-4" xs="1" sm="1" md="2" lg="3" xl="3">
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/blonde.jpg" title="Blonde" link='https://www.youtube.com/watch?v=aIsFywuZPoQ'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/end.jpg" title="End of the Road" link='https://www.youtube.com/watch?v=202KkD12AuI'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/hocus.jpg" title="Hocus" link='https://www.youtube.com/watch?v=idc0EOmKr30'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/knives.jpg" title="Knives out" link='https://www.youtube.com/watch?v=qGqiHJTsRkQ'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/nope.jpg" title="Nope" link='https://www.youtube.com/watch?v=In8fuzj3gck'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/orphan.jpg" title="Orphan" link='https://www.youtube.com/watch?v=nhziUAHlQf8'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/sita.jpg" title="Sita Ramam" link='https://www.youtube.com/watch?v=3UKsbXQUwqw'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/mystery/mid.jpg" title="Midsommar" link='https://www.youtube.com/watch?v=1Vnghdsjmd0'/>
          </Col>
        </Row>

      </div>

      <Footer />
    </>
  )
}
