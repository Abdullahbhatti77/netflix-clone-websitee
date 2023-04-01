import React from 'react'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div style={{ padding: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECEFF1', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <video controls autoplay className='overflow-hidden'>
          <source src="./videos/avatar.mp4" type="video/mp4" />
        </video>
      </div>
      <Footer />
    </>
  )
}
