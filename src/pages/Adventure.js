import React from 'react'
import Cards from '../components/Cards'
import './Adventure.css'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'

export default function Adventure() {
    return (
        <>
            <h1 className='adventure mt-5'>Adventure Movies</h1>

            <div className="container mt-5 mb-5">

                <Row className="g-4" xs="1" sm="1" md="2" lg="3" xl="3">
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/north.jpg" title="The Northman (2022)" link='https://www.youtube.com/watch?v=oMSdFM12hOw'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/beast.jpg" title="Beast" link='https://www.youtube.com/watch?v=oQMc7Sq36mI'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/jurassic.jpg" title="Jurassic World Dominion" link='https://www.youtube.com/watch?v=fb5ELWi-ekk'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/little.jpg" title="The Little Mermaid (2023)" link='https://www.youtube.com/watch?v=kpGo2_d3oYE'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/moonfall.jpg" title="Moonfall (2022)" link='https://www.youtube.com/watch?v=ivIwdQBlS10'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/morbius.jpg" title="Morbius (2022)" link='https://www.youtube.com/watch?v=oZ6iiRrz1SY'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/pino.jpg" title="Pinocchio (I) (2022)" link='https://www.youtube.com/watch?v=imv03rS6Vb0'/>

                    </Col>
                    <Col className="d-flex justify-content-center">

                        <Cards imgsrc="/adventure/spider.jpg" title="Spider-Man: No Way Home (2021)" link='https://www.youtube.com/watch?v=JfVOs4VSpmA'/>

                    </Col>
                </Row>

            </div>

            <Footer />
        </>
    )
}
