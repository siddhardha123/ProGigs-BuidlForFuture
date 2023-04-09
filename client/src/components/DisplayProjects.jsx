import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';


const DisplayProjects = ({ title, isLoading, projects }) => {
  const navigate = useNavigate();

  const handleNavigate = (project) => {
    navigate(`/projectdetails/${project.title}`, { state: project })
  }
  
  return (
    <div className='p-12'>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({projects.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
        //   <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
          <p> loading.....</p>
        )}

        {!isLoading && projects.length === 0 && (
          
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          no projects yet!
          </p>
          
        )}


        {!isLoading && projects.length > 0 && projects.map((project) => <Card 
          key={project.id}
          {...project}
          handleClick={() => handleNavigate(project)}
        />)}
      </div>
    </div>
  )
}

export default DisplayProjects;