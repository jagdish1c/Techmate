import React from 'react'
import Card from './Card'
import data from './Data'

export default function Service() {
  return (
    <>
      <div className='my-5 animate__animated  animate__fadeInDown'>
      <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {data.map((e)=>{
                return(  
                <Card id={e.id}
                item1={e.imgsrc}
                item2={e.tittle}
                item3={e.description} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


