import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div class="card" style={{width: '18rem'}}>
            <img src={props.imgsrc} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
            </div>
        </div>
    </>
  )
}
