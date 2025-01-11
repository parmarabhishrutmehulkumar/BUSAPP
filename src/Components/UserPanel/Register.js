import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [showAlert] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    //setShowAlert(true);

    setTimeout(() => {
      navigate('/login');
    }, 50);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{backgroundColor: "#012931"}}>
      <div className="card" style={{ borderRadius: "15px", width: "500px", backgroundColor: "grey" }}>
        <div className="card-body p-5">
          {showAlert && (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Successfully Registered!</strong>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={handleRegister}>
            <div className="form-outline mb-2">
              <input type="text" id="form3Example1cg" className="form-control" />
              <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
            </div>

            <div className="form-outline mb-2">
              <input type="email" id="form3Example3cg" className="form-control" />
              <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
            </div>

            <div className="form-outline mb-2">
              <input type="password" id="form3Example4cg" className="form-control" />
              <label className="form-label" htmlFor="form3Example4cg">Password</label>
            </div>

            <div className="form-outline mb-2">
              <input type="password" id="form3Example4cdg" className="form-control" />
              <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-2">
              <input className="form-check-input me-2" type="checkbox" id="form2Example3cg" />
              <label className="form-check-label" htmlFor="form2Example3cg">
                I agree to all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg btn-block">Register</button>
            </div>

            <p className="text-center text-muted mt-4 mb-0">
              Have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;