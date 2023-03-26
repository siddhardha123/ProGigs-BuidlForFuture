import { useState } from "react";
import { ethers } from 'ethers';
import { useStateContext } from "../context/stateContext";
import { useNavigate } from "react-router-dom";
const  CreateProject =() => {
  const {createProject,address} = useStateContext();
  const [loading,setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTargetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(title && description && deadline && budget && image){
        const form = {
             title,
             description,
             budget,
             deadline,
             image
        }
      
       setLoading(true)
       await createProject({...form, budget: ethers.utils.parseUnits(form.budget, 18)})
       setLoading(false);
       setTitle("")
       setBudget("")
       setDeadline("")
       setImage("")
       setDescription("")
    }else{
      console.log("missing fields error")
    }
  };

  return (
    <> 
   
    <div className="mt-20 text-3xl text-center p-10 text-white">
      <div>
      {!address && <p className="text-center text-white">please connect your wallet to </p>}
      </div>

      
    Create your own <span className="text-[#CB1C8D]">Project</span> 
</div>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">


<div className="mb-4">
  
  <input
    type="text"
    placeholder="Title"
    id="title"
    className="appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight bg-inherit"
    value={title}
    onChange={handleTitleChange}
  />
</div>
<div className="mb-4">
  
  
  <textarea
    id="description"
    placeholder="description"
    className="appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight bg-inherit"
    value={description}
    onChange={handleDescriptionChange}
  />
</div>
<div className="mb-4">
  
  <input
    type="text"
    id="budget"
    placeholder="budget amount"
    className="appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight bg-inherit"
    onChange={handleTargetChange}
  />
</div>
<div className="mb-4">

  <input
    type="date"
    id="deadline"
    placeholder="deadline"
    className="appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight bg-inherit"
    value={deadline}
    onChange={handleDeadlineChange}
  />
</div>
<div className="mb-4">
 
  <input
    type="text"
    id="image"
    placeholder="image link"
    className="appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight bg-inherit"
    value={image}
    onChange={handleImageChange}
  />
</div>
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-[#CB1C8D] hover:bg-[#fff] hover:text-[#CB1C8D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
   { loading == true ? "Loading" : "Create Project" }
  </button>
</div>

</form>
    </>
   
  );
}

export default CreateProject;