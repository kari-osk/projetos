import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Post from '../components/Post'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div id='home'>
      <div className='container mt-4'>
        <Navbar />
        <Hero />
        <Post />
        <Projects />
      </div>
      <Contact />
    </div>
  )
}

export default Home
