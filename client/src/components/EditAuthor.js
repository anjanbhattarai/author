import React, {useState,useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

function EditAuthor (props) {
  const[errors,setErrors]= useState({});
  const[authorName,setAuthorName]= useState("");
  const navigate = useNavigate();
  const{id}= useParams();


  useEffect (()=>{
    axios.get(`http://localhost:8000/api/authors/${id}`)
    .then(res =>{
      console.log(res.data);
      setAuthorName(res.data.authorName);
    }).catch(err =>{
      console.log(err);
      navigate("/error");
    })
  },[id])

  const updateSubmitHandler= (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}`,{authorName})
    .then(res =>{
      console.log(res);
      console.log(res.data);
      navigate("/");
    }).catch(err=> {
      console.log(err);
      setErrors(err.response.data.errors)
    });
  }
  return (
    <div>
      <form onSubmit={updateSubmitHandler}>
        <header>
          <h1>Edit This Author</h1>
          <Link to={"/"}>Home</Link>
        </header>
        <br/>
        <label>Name:</label> 
        <input onChange={(e)=> setAuthorName(e.target.value)} type="text" name="authorName" value={authorName}/>
      <button>Submit</button>
      <button onClick={(e)=> navigate("/")}>Cancel</button>
      </form>
    </div>
  )
}

export default EditAuthor