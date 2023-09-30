import React, { useState } from 'react'
import ContactService from './ContactService'


export default function Contact() {
  const [state, setstate] = useState({
    fullname : '',
    phone : '',
    email: '',
    messege: ''
  })
  const inputevent= (event)=>{
    const {name,value} =event.target
    setstate((prevalue)=>{
      return{
        ...prevalue,
        [name]:value,
       
      }
    })
  }
  function submit(e){
    e.preventDefault()
    let contact={
      fullname:state.fullname,
      phone:state.phone,
      email:state.email,
      messege:state.messege
    }
    ContactService.createContact(contact)
    alert(`We will get back to you soon ${state.fullname}. `)
         
  }
  return (
    <>
      <div className='my-5 animate__animated  animate__fadeInDown'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div animate__animated animate__fadeInUp'>
        <div className='col-md-6 col-10 mx-auto'>
          <form action="" onSubmit={submit}>
          <div class="mb-3 animate__animated ">
              <label for="exampleFormControlInput1" class="form-label">FullName</label>
              <input type="text" class="form-control" required name='fullname' value={state.fullname} onChange={inputevent} id="exampleFormControlInput1" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="text" class="form-control" required name='phone' value={state.phone} onChange={inputevent} id="exampleFormControlInput1" placeholder="Enter your Phone number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" required name='email' value={state.email} onChange={inputevent} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Messege</label>
              <textarea class="form-control" name='messege' required value={state.messege} onChange={inputevent} placeholder='Enter your messege here' id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="" type="submit" >Submit form</button>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}
