import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import UserHeader from './UserHeader';

const UserArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [data, setData] = useState("");

    useEffect(()=>{
        getData();
    },[]);
    const getData=()=>{
        const url = `https://localhost:44376/api/Article/Get_all_Article`;
        axios.post(url,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((result)=>{
            const data= result.data;
            if(data.statusCode === 200){
                setData(data.listArticle);
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
        const url = `https://localhost:44376/api/Article/AddArticle`
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
        <UserHeader/>
        <br></br>
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
  <table className='table stripped table-hover mt-4 bg-white w-3/4 mx-auto'>
    <thead className='bg-gray-800 text-white'>
      <tr>
        <th scope='col' className='px-4 py-2'>#</th>
        <th scope='col' className='px-4 py-2'>Title</th>
        <th scope='col' className='px-4 py-2'>Content</th>
        <th scope='col' className='px-4 py-2'>Email</th>
      </tr>
    </thead>
    <tbody className='text-gray-700'>
      {data.map((val, index) => {
        return(
            <tr key={val.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <th scope='row' className='px-4 py-2'>{index + 1}</th>
            <td className='px-4 py-6'>{val.title}</td>
            <td className='px-4 py-6'>{val.content}</td>
            <td className='px-4 py-6'>{val.email}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
) : (
  <p className='text-center mt-4'>No data found</p>
)}

    </Fragment>
    
  )
}

export default UserArticle