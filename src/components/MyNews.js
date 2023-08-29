import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import AdminHeader from './AdminHeader';
import UserHeader from './UserHeader';



const MyNews = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState("");
    //const email = localStorage.getItem('loggedEmail')

    useEffect(()=>{
        getData();
    },[]);
    const getData=()=>{
        const url = `https://localhost:44376/api/News/NewsList`
        axios.get(url,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result)=>{
            const data= result.data;
            if(data.statusCode === 200){
                setData(data.listNews);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleSave= (e)=>{
        e.preventDefault();
        const data={
            Title: title,
            Content: content,
            Email: localStorage.getItem('loggedEmail')
        }
        const url = `https://localhost:44376/api/News/AddNews`
        axios.post(url, data)
        .then((result)=>{
            const dt = result.data;
            if(dt.statusCode === 200){
                getData();
                Clear();
                alert("New Added");
            }
            else{
                alert(dt.statusMessage);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const Clear=()=>{
        setTitle('');
        setContent('');
    }

  return (
    <Fragment>
        
        <UserHeader /> 
        <br/>
        {/* <div className='w-80 bg-white mx-auto p-6'>
                <h3 className='text-2xl font-semibold mb-4'>Add News</h3> */}
                <form>
            <div className='form-row' style={{width:"80%", backgroundColor:"white", margin:"auto"}}>
                <div className='form-group col-md-12'>
                    <h3>Add Article</h3>
                </div>
                <div className='form-group col-md-12'>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder='Enter Title' className='form-control' required value={title}  />
                </div>
                <div className='form-group col-md-12'>
                    <textarea id='validateTextarea' rows={5} onChange={(e)=> setContent(e.target.value)} placeholder='Enter Title' className='form-control' required value={content} >
                    </textarea> 
                </div>
                <div className='form-group col-md-6'>
                    <button onClick={(e)=> handleSave(e)} className='btn btn-primary' style={{width:"150px", float:"left"}}>
                        Save
                    </button>
                    {" "}
                    <button onClick={(e)=> Clear(e)} className='btn btn-danger' style={{width:"150px"}}>
                        Reset
                    </button>
                </div>
            </div>
        </form>
            
            <br />
            {data ? (
                <table className='table w-full bg-white border border-gray-300 rounded-lg overflow-hidden mx-auto'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-3 px-6 text-left'>#</th>
                            <th className='py-3 px-6 text-left'>Title</th>
                            <th className='py-3 px-6 text-left'>Content</th>
                            <th className='py-3 px-6 text-left'>CreatedOn</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                        {data.map((val, index) => (
                            <tr key={val.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className='py-4 px-6'>{index + 1}</td>
                                <td className='py-4 px-6'>{val.title}</td>
                                <td className='py-4 px-6'>{val.content}</td>
                                <td className='py-4 px-6'>{val.createdOn}</td>
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

export default MyNews