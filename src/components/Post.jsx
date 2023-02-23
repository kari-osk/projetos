import React from 'react'
import { post } from '../data'



const PostImage = (props) => {
  return (
    <img className="object-cover border hover:border-orange " src={props.data.image} alt={props.data.title} />
  )
}


const Post = () => {
  return (
    <div id="post" className="flex flex-col flex-wrap md:flex-row ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="w-full h-full border py-4 px-4">
          <h2>Postagens</h2>
          <p>
            Aqui compartilho as postagens que criei para o Linkedin, falo sobre Front-end,
            JavaScript, React.JS e UX/UI. 
            <br/>
            Vamos nos conectar?
          </p>
          <button className="px-2 py-2 border hover:bg-orange">
            <a
              href="https://www.linkedin.com/in/karinaosuka"
              target="_blank"
              rel="noreferrer"
              className="text-dark no-underline"
            >
              Linkedin
            </a>
          </button>
        </div>
        {post.map((post) => (
          <div key={post.id}>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              >
              <PostImage data={post} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post
