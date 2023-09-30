import React from 'react'
import { Link } from 'react-router-dom'


export default function Card(prop) {
  return (
    <section id='header'>
    <div className='container-fluid nav-bg'>
        <div className='row'>
            <div className='col-10 mx-auto  hero'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 animate__animated animate__fadeInLeft order-lg-1'>
                    <h1>{prop.item1}<br/>{prop.item4}<strong className='brand-name'>{prop.item2}</strong></h1>
                    <p className='my-2'>{prop.item3}</p>
                    <div className='mt-3'><Link to="/registration"><button>Get Started</button></Link></div>
                </div>
                <div className='col-lg-6 order-1 col-10   animate__animated animate__fadeInRight order-lg-2 header-img'>
                    <img src={prop.item5} className='img-fluid animation' alt="logo"/>
                </div>
            </div>   
        </div>
    </div>
</section>
  )
}
