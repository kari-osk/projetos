import React from 'react'
import { post } from '../data'



const PostImage = (props) => {
  return (
    <img className='object-cover' src={props.data.image} alt={props.data.title} />
  )
}


const Post = () => {
  return (
    <div id='post' className='flex flex-col flex-wrap md:flex-row '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <div className='w-full h-full border py-4 px-4'>
          <h2>Posts</h2>
          <p className=''>Crio conteúdo no Linkedin, acesse para ler todos os posts</p>
          <button className='px-2 py-2 border hover:bg-dark hover:text-light'>Continue lendo</button>
        </div>
        {post.map((post) => (
          <div className='' key={post.id}>
            <PostImage data={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
