import React from 'react'
import './Comedy.css'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Row, Col } from 'reactstrap'

export default function Comedy() {
    return (
        <>
            <h1 className='comedy mt-5'>Comedy Movies</h1>

            <div className="container mt-5 mb-5">

                <Row className="g-4" xs="1" sm="1" md="2" lg="3" xl="3">
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/blockers.jpg" title="Blockers" link='https://www.youtube.com/watch?v=RfFcaV5O7SU'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/boys.jpg" title="Good Boys" link='https://www.youtube.com/watch?v=zPXqwAGmX04'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/going.jpg" title="Going in Style" link='https://www.youtube.com/watch?v=hcdTN5soeQw'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/jumanji.jpg" title="Jumanji" link='https://www.youtube.com/watch?v=2QKg5SZ_35I'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/shazam.jpg" title="Shazam" link='https://www.youtube.com/watch?v=go6GEIrcvFY'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/stuber.jpg" title="Stuber" link='https://www.youtube.com/watch?v=i5l6a5RiR1E'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/thor.jpg" title="Thor" link='https://www.youtube.com/watch?v=16xn0r7HM1U'/>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Cards imgsrc="/comedy/when.jpg" title="When We First Met" link='https://www.youtube.com/watch?v=d2sJNee7FQ4'/>
                    </Col>
                </Row>


            </div>

            <Footer />
        </>
    )
}
