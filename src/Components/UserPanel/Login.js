import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{backgroundColor: "#05223b"}}>
      <div className="card" style={{ borderRadius: "15px", width: "400px", backgroundColor: "grey" }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" placeholder="Enter a valid email address" />
              <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" placeholder="Enter password" />
              <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMeCheck" />
                <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
            </div>

            <p className="text-center text-muted mt-4 mb-0">
              Don't have an account? <Link to="/" className="fw-bold text-body"><u>Register here</u></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
