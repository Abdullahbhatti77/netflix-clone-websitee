import React from 'react'
import './Mystery.css'
import Cards from '../Cards'
import Footer from '../Footer'

export default function Mystery() {
  return (
    <>
        <h1 className='mystery mt-5'>Mystery Movies</h1>

          <div class="container mt-5">

                  <div class="row">

                      <div class="col-12 col-lg-4">
                          <Cards imgsrc="/mystery/blonde.jpg"
                          title="Blonde"
                            />
                      </div>

                      <div class="col-12 col-lg-4">      
                          <Cards imgsrc="/mystery/end.jpg"
                          title="End of the Road"
                            />
                      </div>

                      <div class="col-12 col-lg-4">
                          <Cards imgsrc="/mystery/hocus.jpg"
                          title="Hocus"
                            />
                      </div>


                      <div class="col-12 col-lg-4 mt-5">
                          <Cards imgsrc="/mystery/knives.jpg"
                          title="Knives out"
                            />
                      </div>


                      <div class="col-12 col-lg-4 mt-5">
                          <Cards imgsrc="/mystery/nope.jpg"
                          title="Nope"
                            />
                      </div>

                      <div class="col-12 col-lg-4 mt-5">
                          <Cards imgsrc="/mystery/orphan.jpg"
                          title="Orphan"
                            />
                      </div>

                      <div class="col-12 col-lg-4 mt-5">
                          <Cards imgsrc="/mystery/sita.jpg"
                          title="Sita Ramam"
                            />
                      </div>

                      <div class="col-12 col-lg-4 mt-5">
                          <Cards imgsrc="/mystery/mid.jpg"
                          title="Midsommar"
                            />
                      </div> 

                  </div>

              </div>

          <Footer />
    </>
  )
}
