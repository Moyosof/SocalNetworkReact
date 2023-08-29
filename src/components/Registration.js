import React, { useState}  from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Registration = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')

    const handleSave = (e) =>{
        e.preventDefault();
        const url = `https://localhost:44376/api/Registration/Registration`;

        const data = {
            Name: name,
            Email: email,
            Password: password,
            PhoneNo: phoneNo
        }
        axios.post(url, data)
        .then((result)=>{
            clear();
            const dt = result.data;
            alert(dt.statusMessage);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleLogin = ()=>{
      window.location.url = "/login"
    }

    const clear = ()=>{
      setName('');
      setEmail('');
      setPhoneNo('');
      setPassword('');
    }
  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="flex justify-center items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="flex flex-row">
                  <div className="col-xl-6 hidden xl:block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Person working on a computer" className="img-fluid rounded-tl-md rounded-bl-md"/>
                  </div>

                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Blog registration form</h3>

                      
                      <div className="form-outline mb-4">
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="fullname" className="form-control form-control-lg" placeholder="Enter full name"
                          style={{color: 'black', border: '1px solid black',}} />
                          Full Name
                      </div>
                      <div className="form-outline mb-4">
                        <input onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} type="number" id="PhoneNo" className="form-control form-control-lg" placeholder="Enter Phone Number"
                          style={{color: 'black', border: '1px solid black',}} />
                          Phone Number
                      </div>

                      <div className="form-outline mb-4">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" className="form-control form-control-lg" placeholder="Enter Email Address"
                          style={{color: 'black', border: '1px solid black',}} />
                          Email
                      </div>
                      <div className="form-outline mb-4">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="form-control form-control-lg" placeholder="Password"
                          style={{color: 'black', border: '1px solid black',}} />
                          Password
                      </div>

                      <div className="flex justify-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button onClick={(e) => handleSave(e)} type="button" className="btn btn-warning btn-lg ms-2">
                          Submit form
                        </button>
                        <Link to={'/login'} >
                          <button onClick={(e) => handleLogin(e)} type="button" className="btn btn-warning btn-lg ms-2">
                            Login
                          </button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
