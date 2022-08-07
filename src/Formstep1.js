import React, { useEffect } from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';

function Formstep1() {
  return (
    <div className="formstep1 text-end">
      <div className="col offset-md-6">
      <div className="step1 mt-5 mb-5">
      <label htmlFor='username' className="mb-5" > What is your name? </label>
        <input type="text" id="username"  className="me-5"/>
        
        <div className="mt-5">
        <button className="btn mt-5  bg-dark text-white">proceed</button>
       </div>
     </div>
      </div>
    </div>
  )
}


export default Formstep1;
