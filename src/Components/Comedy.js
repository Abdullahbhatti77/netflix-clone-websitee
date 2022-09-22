import React from 'react'
import './Comedy.css'
import Cards from '../Cards'
import Footer from '../Footer'

export default function Comedy() {
  return (
    <>
        <h1 className='comedy mt-5'>Comedy Movies</h1>

            <div class="container mt-5">

                    <div class="row">

                        <div class="col-12 col-lg-4">
                            <Cards imgsrc="/comedy/blockers.jpg"
                            title="Blockers"
                            />
                        </div>

                        <div class="col-12 col-lg-4">      
                            <Cards imgsrc="/comedy/boys.jpg"
                            title="Good Boys"
                            />

                        </div>

                        <div class="col-12 col-lg-4">
                            <Cards imgsrc="/comedy/going.jpg"
                            title="Going in Style"
                            />
                        </div>


                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/comedy/jumanji.jpg"
                            title="Jumanji"
                            />
                        </div>


                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/comedy/shazam.jpg"
                            title="Shazam"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/comedy/stuber.jpg"
                            title="Stuber"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/comedy/thor.jpg"
                            title="Thor"
                            />
                        </div>

                        <div class="col-12 col-lg-4 mt-5">
                            <Cards imgsrc="/comedy/when.jpg"
                            title="When We First Met"
                            />
                        </div> 

                    </div>

                </div>
            
            <Footer />
    </>
  )
}
