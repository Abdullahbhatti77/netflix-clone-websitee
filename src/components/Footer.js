import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <>
        <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>

        <section className='mb-4'>
          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href='https://www.facebook.com/profile.php?id=100013590706468'><MDBIcon fab icon='facebook-f' /></a>
          </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href='https://twitter.com/Abdulla92658668'><MDBIcon fab icon='twitter' /></a>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href='https://www.linkedin.com/in/muhammad-abdullah-08b0b81b0/'><MDBIcon fab icon='linkedin' /></a>
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href='https://www.instagram.com/mabdullahshakeel/'><MDBIcon fab icon='instagram' /></a>
          </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href='https://github.com/Abdullahbhatti77'><MDBIcon fab icon='github' /></a>
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-1' style={{ backgroundColor: '#262626'}}>
        <p>Designed by Muhammad Abdullah</p>
      </div>
    </MDBFooter>
    </>
  )
}
