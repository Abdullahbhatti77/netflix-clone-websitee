import React from 'react'
import './Action.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'

export default function Action() {
  return (
    <div>

      <h1 className='action mt-5'>Action Movies</h1>

      <div className="container mt-5 mb-5">
        <Row className="g-4" xs="1" sm="1" md="2" lg="3" xl="3">
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/bat.jpg" title="The Batman 2022" link="https://www.youtube.com/watch?v=mqqft2x_Aa4"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/gray.jpg" title="The Gray Man 2022" link="https://www.youtube.com/watch?v=BmllggGO4pM"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/lordofrings.jpg" title="The Lord of the Rings" link="https://www.youtube.com/watch?v=x8UAUAuKNcU"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/prey.jpg" title="Prey" link="https://www.youtube.com/watch?v=wZ7LytagKlc"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/thor.jpg" title="Love and Thunder 2022" link='https://www.youtube.com/watch?v=Go8nTmfrQd8'/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/topgun.jpg" title="Top Gun Maverick 2022" link="https://www.youtube.com/watch?v=giXco2jaZ_4"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/topgun.jpg" title="Top Gun Maverick 2022" link="https://www.youtube.com/watch?v=giXco2jaZ_4"/>
          </Col>
          <Col className="d-flex justify-content-center">
            <Cards imgsrc="/images/train.jpg" title="Bullet Train 2022" link="https://www.youtube.com/watch?v=0IOsk2Vlc4o"/>
          </Col>
        </Row>
      </div>


      <Footer />


    </div>
  )
}
