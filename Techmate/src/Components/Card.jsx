import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div className='col-md-4 col-10 mx-auto animate__animated  animate__fadeInUp'>
            <div className="card" >
                <img src={props.item1} className="card-img-top  img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.item2}</h5>
                    <p className="card-text">{props.item3}</p>
                    <button>Click to read </button>
                </div>
            </div>
        </div>
    )
}
