import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function NewAuthor(props) {
  const[errors,setErrors] = useState({});
  const[authorName,setAuthorName]= useState("");
  const navigate= useNavigate();

  const submitHandler= (e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/authors`,{authorName})
    .then(res =>{
      console.log(res.data);
      navigate("/");
    }).catch(err=> {
      console.log(err.response.data);
      setErrors(err.response.data.err.errors);
    });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <header>
          <h1>Favorite Authors</h1>
          <Link to={"/"}>Home</Link>
        </header>
        <br/>
        <label>Name:</label>
        <input onChange={(e)=> setAuthorName(e.target.value)} type="text" name="authorName" value={authorName}/>
        {
        errors.authorName ?
        <span>{errors.authorName.message}</span> 
        : null
        }
      <button>Submit</button>
      <button onClick={(e)=> navigate("/")}>Cancel</button>
      </form>
    </div>
  )
}

export default NewAuthor