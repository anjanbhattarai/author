import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const AllAuthor = (props) => {
    const [authorList,setAuthorList] = useState([])
    const navigate= useNavigate();


    useEffect (()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setAuthorList(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }, [])

    const deleteHandler = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
        .then(res =>{
            console.log(res);
            setAuthorList( authorList.filter((author)=> author._id !==  idFromBelow))
        }).catch (err=>{
            console.log(err);
        })
    }

    return (
    <div>
        <header>
            <h1> We have quotes by:</h1>
            <Link to={"/new"}>Add an Author</Link> 
            <br/>
            <table style={{margin:"auto", border: "1px solid black", fontSize: "x-large"}}>
                <thead style={{backgroundColor:"lightgray", color: "White"}}>
                    <tr>
                        <th>Author</th>
                        <th> Action Avilable</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        authorList?
                        authorList.map((author,index)=>(
                            <tr key={index}>
                            <td>{author.authorName}</td>
                            <td>
                                <button className="editButton" onClick={()=>{navigate(`/edit/${author._id}`)}}>Edit</button>
                                <button className="deleteButton" onClick={()=> deleteHandler(author._id)} >Delete</button>
                            </td>
                            </tr>
                        )) : null
                    }
                </tbody>
            </table>
        </header>
    </div>
    )
}

export default AllAuthor;