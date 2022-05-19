import React from 'react'
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>We cannot find the Author</h1>
      <Link to={"/"}>Go Home</Link> 
      </div>
  )
}

export default Error