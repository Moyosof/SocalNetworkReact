import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            Email: email,
            Password : password
        }
        const url = `https://localhost:44376/api/Registration/Login`;
        axios.post(url, data)
        .then((result) => {
            const dt = result.data;
            if(dt.statusCode === 200){
              if(email === "admin" && password === "admin"){
                localStorage.setItem("username", email);
                navigate("/admindashboard");
              }
              else{
                localStorage.setItem("loggedEmail", email);
                localStorage.setItem("username", dt.registration.name);
                if(dt.registration.userType === 'STAFF')
                navigate("/staffdashboard");
                else
                navigate("/userdashboard");
              }
            }
            alert(dt.statusMessage);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
        <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="flex flex-col items-center justify-center h-100">
      <div className="md:flex md:items-center md:justify-center md:space-x-8 md:h-100">
        <div className="md:w-1/2">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full h-auto md:max-w-sm mx-auto md:mx-0"
            alt="Phone image"
          />
        </div>
        <div className="md:w-1/2 md:offset-1">
        <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase">Blog Login</h3>
          <form className="space-y-4">
            
            <div className="form-outline mb-4">
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-control form-control-lg" placeholder="Enter Email Address"
                    style={{color: 'black', border: '1px solid black',}} />
                    Email
            </div>
            <div className="form-outline mb-4">
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="form-control form-control-lg" placeholder="Password"
                    style={{color: 'black', border: '1px solid black',}} 
                /> Password         
            </div>

            <div className="flex justify-between items-center">
              {/* Checkbox */}
              <div className="flex items-center">
                <input className="form-checkbox text-primary-500" type="checkbox" id="form1Example3" defaultChecked />
                <label className="ml-2 text-muted" htmlFor="form1Example3"> Remember me </label>
              </div>
                <a href="#!" className="text-primary-500"> Forgot password? </a>
            </div>
            <button onClick={(e)=> handleLogin(e)} type="submit" className="btn btn-primary btn-lg btn-block">
                Sign in
            </button>

            <div className="divider flex items-center my-4">
              <p className="text-center font-semibold mx-3 text-muted">OR</p>
            </div>

            <Link to="/registration"
              className="btn btn-primary btn-lg btn-block"
              href="#!"
              style={{ backgroundColor: 'brown' }}
              role="button"
            >
              Sign Up
            </Link>

            <a
              className="btn btn-primary btn-lg btn-block"
              href="#!"
              style={{ backgroundColor: '#3b5998' }}
              role="button"
            >
              <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a>
            <a
              className="btn btn-primary btn-lg btn-block"
              href="#!"
              style={{ backgroundColor: '#55acee' }}
              role="button"
            >
              <i className="fab fa-twitter me-2"></i>Continue with X
            </a>
            
          </form>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>;

    </div>
  )
}

export default Login