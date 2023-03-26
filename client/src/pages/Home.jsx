import React from 'react'
import img from '../assets/bg.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const navCreateProj = () =>{
    navigate("/createproject")
  }
  const navExplore = () =>{
    navigate("/projects")
  }
  return (
    <div className='text-white mt-20'>

          <div className='md:flex justify-evenly '>
               <div className=' my-auto'>
                <p className='text-6xl text-justify '>
                Find <span className='text-[#CB1C8D] leading-10'>Freelancers</span><br />for Your <span className='text-[#CB1C8D] leading-10'>Pro</span> Gigs</p>
                <p className='text-xl leading-10'>Join our platform today and start finding the perfect freelancer for your projects</p>

                <button className='bg-[#CB1C8D] rounded-md px-5 py-2 mt-5
                 ' onClick={navExplore}>explore</button>
                <button className='bg-[#FFF] text-bold text-[#CB1C8D] ml-5 rounded-md px-5 py-2 mt-5' onClick={navCreateProj}>create project</button>
               </div>
               <div className=''>
                  <img src={img} alt="" />
               </div>
          </div>
          <div className='p-10 rounded-md stats flex justify-evenly mx-auto md:text-3xl bg-[#CB1C8D]'>
              <p>2+ projects </p>
              <p>2+ freelancers</p>
              <p>3+ active users</p>
          </div>
    </div>
  )
}

export default Home