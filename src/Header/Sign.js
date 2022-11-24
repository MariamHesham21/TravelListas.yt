import React from 'react'
import beach from "../Photo/sign1.jpg"

const Sign = () => {
  return (
    <div className="signup-form">
                <img src={beach} alt="" width="1500" height="300"/>

         <form >
        <h3>LET’S GET YOU READY</h3>
        <div className="allform">
            <div className="name">
                <label >First Name</label>
                <input type="text" placeholder="Enter Your First Name" className="box"/>
            </div>
            <div className="name">
                <label >Last Name</label>
                <input type="text"  placeholder="Enter Your Last Name" className="box" />
            </div>
            <div className="name">
                <label >E-Mail</label>
                <input type="email"  placeholder="Enter Your Email"className="box"/>
            </div>
            <div className="name">
                <label >Mobile Number</label>
                <input type="number"  placeholder="mobile number"className="box"/>
            </div>
            <div className="name">
                <label >Password</label>
                <input type="password"  placeholder="Enter Your password" className="box" />
            </div>
            <div className="name">
                <label >Confirm Password</label>
                <input type="password"  placeholder="Enter Your password" className="box" />
            </div>

            <div className='btn-form'>
            <button type="submit" className="btn">Sign Up</button>
            </div>
        
        </div>
    </form>
</div>


  )
}

export default Sign

