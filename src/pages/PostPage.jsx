import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { useParams } from 'react-router-dom'
import { loadPostsById } from '../services/post-service'
import { toast } from 'react-toastify';

const PostPage=()=> {
  const {Id}=useParams()
  const [post,setPost]=useState(null);

  useEffect(() => {
   loadPostsById(Id).then((data) => {
        console.log('Initial Data', data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error in Loading Posts');
      });
  }, []); // Only runs on component mount

  return (
    <Base>
      <div>
      <h2>This is POST Page</h2>
      <h3>{Id}</h3>
    </div>
    </Base>
  )
}
export default PostPage
