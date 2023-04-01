import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div class="card" style={{width: '18rem'}}>
        <a href={props.link}>
            <img src={props.imgsrc} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title" style={{color: 'black'}}>{props.title}</h5>
            </div>
        </a>
        </div>
    </>
  )
}
