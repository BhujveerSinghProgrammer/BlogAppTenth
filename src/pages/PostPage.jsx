import React from 'react'
import Base from '../components/Base'
import { useParams } from 'react-router-dom'
const PostPage=()=> {
  const {Id}=useParams()

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
