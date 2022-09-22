import React from 'react'
import './Action.css'
import Cards from '../Cards'
import Footer from '../Footer'

export default function Action() {
  return (
    <div>

        <h1 className='action mt-5'>Action Movies</h1>

        <div class="container mt-5">

                <div class="row">

                    <div class="col-12 col-lg-4">
                        <Cards imgsrc="/images/bat.jpg"
                        title="The Batman 2022"
                          />
                    </div>

                    <div class="col-12 col-lg-4">      
                        <Cards imgsrc="/images/gray.jpg"
                        title="The Gray Man 2022"
                          />

                    </div>

                    <div class="col-12 col-lg-4">
                        <Cards imgsrc="/images/lordofrings.jpg"
                        title="The Lord of the Rings 2001"
                          />
                    </div>


                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/prey.jpg"
                        title="Prey"
                          />
                    </div>


                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/thor.jpg"
                        title="Love and Thunder 2022"
                          />
                    </div>

                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/topgun.jpg"
                        title="Top Gun Maverick 2022"
                          />
                    </div>

                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/topgun.jpg"
                        title="Top Gun Maverick 2022"
                          />
                    </div>

                    <div class="col-12 col-lg-4 mt-5">
                        <Cards imgsrc="/images/train.jpg"
                        title="Bullet Train 2022"
                          />
                    </div> 

                </div>

            </div>

            <Footer />

        
    </div>
  )
}
