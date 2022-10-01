import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div><h3 style={{ textAlign: "center", marginTop: "2%", fontWeight: "bold" }}>My Projects</h3>
   <div className='p' style={{display:"flex",justifyContent:"space-around",marginTop:"5%"}}>
      
      <div className="card mb-3" style={{width:350,height:"auto"}}>
        <img src="./image/p.png" className="card-img-top" alt="..." />
          <div className="card-body" style={{color:"black"}}>
          <h5 className="card-title">Petti Shop</h5>
          <p className="card-text">Petty Shop is local E-Commerce Website that fetches the required
            items in given time, using MERN stack </p>
            <p className="card-text"><small className="text-muted">Customer Module</small></p>
          <a href="https://pettishop.netlify.app/" className="btn btn-primary" target={"_blank"}>Demo</a>
          </div>
      </div>
      <div className="card mb-3" style={{ width: 350, height: "auto" }}>
        <img src="./image/project2.png" className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">Petti Shop</h5>
          <p className="card-text">Petty Shop is local E-Commerce Website that fetches the required
            items in given time,using MERN stack</p>
          <p className="card-text"><small className="text-muted">Admin Module</small></p>
          <a href="https://pettishop.netlify.app/admin" className="btn btn-primary" target={"_blank"}>Demo</a>
        </div>
      </div>
      <div className="card mb-3" style={{ width: 350, height: "auto",justifyContent:"center"}}>
        <img src="./image/project3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Shopping Cart</h5>
            <p className="card-text">Created shoping website using React Hooks,UseReducer and UseContext </p>
            <p className="card-text"></p>
          <p className="card-text"><small className="text-muted" >Using React Hooks</small></p>
            <a href="https://shoppingcartcontext.netlify.app/" className="btn btn-primary" target={"_blank"} style={{marginTop:"15%"}}>Demo</a>
        </div>
        </div>
      </div> 
    </div>
  )
}

export default Project