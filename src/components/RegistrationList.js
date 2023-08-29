import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import AdminHeader from './AdminHeader';

const RegistrationList = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData= ()=>{
        const url = `https://localhost:44376/api/Registration/RegistrationList`;
        
        axios
        .get(url)
        .then((result)=>{
            const data = result.data;
            console.log('API Response Data:', data);
            if(data.statusCode === 200){
                setData(data.listRegistation)
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    const handleApprove= (e, id)=>{
        e.preventDefault();
        const data ={
            ID : id
        };
        const url = `https://localhost:44376/api/Registration/userApproval`;
        axios.post(url,data)
        .then((result)=>{
            const dt = result.data;
            if(dt.statusCode === 200){
                alert("Approved")
                getData();
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <Fragment>
        <AdminHeader/>
        {data ? (
    <table className='table w-full bg-white border border-gray-300 rounded-lg overflow-hidden'>
        <thead className='bg-gray-800 text-white'>
            <tr>
                <th className='py-3 px-6 text-left'>#</th>
                <th className='py-3 px-6 text-left'>Name</th>
                <th className='py-3 px-6 text-left'>Email</th>
                <th className='py-3 px-6 text-left'>PhoneNo</th>
                <th className='py-3 px-6 text-left'>IsApproved</th>
                <th className='py-3 px-6 text-left'>Action</th>
            </tr>
        </thead>
        <tbody className='text-gray-700'>
            {data.map((val, index) => (
                <tr key={val.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className='py-4 px-6'>{index + 1}</td>
                    <td className='py-4 px-6'>{val.name}</td>
                    <td className='py-4 px-6'>{val.email}</td>
                    <td className='py-4 px-6'>{val.phoneNo}</td>
                    <td className='py-4 px-6'>{val.isApproved === 0 ? 'Pending' : 'Approved'}</td>
                    <td className='py-4 px-6'>
                        {val.isApproved === 0 ? (
                            <button className='btn btn-primary' onClick={(e) => handleApprove(e, val.id)}>
                                Mark Approved
                            </button>
                        ) : (
                            "Already Approved"
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
) : (
    "No data found"
)}

        
    </Fragment>
  )
}

export default RegistrationList