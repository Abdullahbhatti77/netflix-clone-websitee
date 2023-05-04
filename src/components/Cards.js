import React from 'react'

export default function Cards(props) {
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <a href={props.link}>
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: 'black'}}>{props.title}</h5>
            </div>
        </a>
        </div>
    </>
  )
}
