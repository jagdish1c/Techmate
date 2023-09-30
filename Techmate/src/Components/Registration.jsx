import React, { useState } from 'react'
import ContactService from './ContactService'
import { Link } from 'react-router-dom'
export default function Registration() {
    const [state, setstate] = useState({
        name:'',
        email:'',
        password:'',
        repass:'',
        chekbox:false

        
    })

   
  

    //Form submit
    let formsubmit=(e)=>{
        e.preventDefault()
       let registration={
            name:state.name,
            email:state.email,
            password:state.password,
            repass:state.repass,
       }   
        ContactService.createRegistration(registration)
        alert("Registration Successful "+state.name+".")  
    }
    //React Form handling
    let input=(event)=>{
        const {name,value} =event.target;
        setstate((prevalue)=>{
            return{
              ...prevalue,
              [name]:value,
             
            }
          })
    }


  return (
    <section className="vh-100" >
  <div className="container  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card registration text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 animate__animated animate__fadeInLeft">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 ">Sign up</p>
                <form className="mx-1 mx-md-4" id='regisform' onSubmit={formsubmit}>
                  <div className="d-flex flex-row align-items-center mb-1">
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c"  name='name' required value={state.name} onChange={input}  className="form-control" />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-1">
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c " name='email'  required  value={state.email} onChange={input} className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-1">
                    <div className="form-outline flex-fill mb-0">
                      <input type="password"  name='password'  value={state.password} onChange={input} required  id="form3Example4c" className="form-control" />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-1">
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd"  name='repass' value={state.repass} onChange={input} required className="form-control"/>
                      <label className="form-label" for="form3Example4cd">Re Enter your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" required id="form2Example3c"/>
                    <label className="form-check-label" for="form2Example3"> I agree all statements in <Link  to="/" style={{color:"rgba(0,212,255,1)"}}>Terms of service</Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" id='submit'>Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center animate__animated animate__fadeInRight order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
