import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const navigate = useNavigate();
    const [username,  setUserName ] = useState("");
 
    useEffect(()=>{
     setUserName(localStorage.getItem('username'));
    }, []);
 
    const logout = (e) =>{
     e.preventDefault();
     localStorage.removeItem('username');
     navigate("/");
    };
   return (
     <Fragment>
<div>
                <nav className="bg-gray-800 p-4 flex justify-between items-center">
                    <a className="text-white text-xl" href="#">
                        Social Network
                    </a>
                    <div className="flex items-center space-x-4">
                        {/* Welcome message */}
                        <span className="text-white">
                            Welcome Admin
                        </span>

                        {/* Navigation links */}
                        <Link to="/registrationlist" className="text-white hover:underline">
                            Registration Management
                        </Link>
                        <Link to="/articlelist" className="text-white hover:underline">
                            Article Management
                        </Link>
                        <Link to="/news" className="text-white hover:underline">
                            News Management
                        </Link>
                        <Link to="/staffmanagement" className="text-white hover:underline">
                            Staff Management
                        </Link>
                        <form className="form-inline">
                            <button
                                onClick={(e) => logout(e)}
                                className="text-white hover:underline border border-white border-solid rounded px-4 py-2 bg-transparent hover:bg-green-500"
                            >
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </div>
     </Fragment>
   )
}

export default AdminHeader