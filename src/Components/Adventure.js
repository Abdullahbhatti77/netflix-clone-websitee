import React from 'react'
import Cards from '../Cards'
import './Adventure.css'
import Footer from '../Footer'

export default function Adventure() {
  return (
    <>
        <h1 className='adventure mt-5'>Adventure Movies</h1>

            <div class="container mt-5">

                    <div class="row">

                        <div class="col-12 col-lg-4">
                            <Cards imgsrc="/adventure/north.jpg"
                            title=" The Northman (2022)"
                            />
                        </div>

                        <div class="col-12 col-lg-4">      
                            <Cards imgsrc="/adventure/beast.jpg"
                            title="Beast"
                            />

                        </div>

                        <div class="col-12 col-lg-4">
                            <Cards imgsrc="/adventure/jurassic.jpg"
                            title="Jurassic World Dominion"
                            />
                        </div>


                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/adventure/little.jpg"
                            title="The Little Mermaid (2023)"
                            />
                        </div>


                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/adventure/moonfall.jpg"
                            title=" Moonfall (2022)"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/adventure/morbius.jpg"
                            title="Morbius (2022)"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/adventure/pino.jpg"
                            title=" Pinocchio (I) (2022)"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/adventure/spider.jpg"
                            title=" Spider-Man: No Way Home (2021)"
                            />
                        </div> 

                    </div>

                </div>

            <Footer />
    </>
  )
}
