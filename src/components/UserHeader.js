import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserHeader = () => {
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
 <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <Link to="#" className="text-white text-xl" >
                    Social Network
                </Link>
                <div className="flex items-center space-x-4">
                    <span className="text-white">
                        Welcome {username}
                    </span>

                    <Link to="/userarticle" className="text-white hover:underline">
                        Article Management
                    </Link>
                    
                    <Link to="/mynews" className="text-white hover:underline">
                        News
                    </Link>

                    <form className="form-inline">
                        <button onClick={(e) => logout(e)} className="text-white hover:underline border border-white border-solid rounded px-4 py-2 bg-transparent hover:bg-green-500">
                            Logout
                        </button>
                    </form>
                    
                </div>
            </nav>
        
    </Fragment>
    
  )
}

export default UserHeader