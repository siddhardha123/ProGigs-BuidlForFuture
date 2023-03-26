import { useState } from "react";
import { ethers } from 'ethers';
import { useStateContext } from "../context/stateContext";
const  CreateProject =() => {
  const {updateProfile,address} = useStateContext();
  const [loading,setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [image,setImage] = useState("");
  const [mail, setMail] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleGithubChange = (event) => {
    setGithub(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTwitterChange = (event) => {
    setTwitter(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something with form data
    if(title && description &&mail && twitter && github && image){
        const form = {
             title,
             description,
             image,
             mail,
             twitter,
             github,
        }
       setLoading(true)
       await updateProfile({...form})
       setLoading(false);
       setTitle("")
       setTwitter("")
       setGithub("")
       setMail("")
       setDescription("")
    }else{
       console.log("missing")
    }
    }
  

  return (
    <> 
   
    <div className="mt-20 text-3xl text-center p-10 text-white">
      <div>
      {!address && <p className="text-center text-white">please connect your wallet to </p>}
      </div>

      
    Update your  <span className="text-[#CB1C8D]">Profile</span> 
</div>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">


<div className="mb-4">
  
  <input
    type="text"
    placeholder="Name"
    id="name"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={title}
    onChange={handleTitleChange}
  />
</div>
<div className="mb-4">
  
  
  <textarea
    id="about"
    placeholder="about"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={description}
    onChange={handleDescriptionChange}
  />
</div>
<div className="mb-4">
  
  
  <input
    id="profile picture"
    placeholder="profile picture"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={image}
    onChange={handleImageChange}
  />
</div>


<div className="mb-4">
 
  <input
    type="text"
    id="image"
    placeholder="mail"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={mail}
    onChange={handleMailChange}
  />
</div>
<div className="mb-4">
 
  <input
    type="text"
    id="image"
    placeholder="Twitter Link"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={twitter}
    onChange={handleTwitterChange}
  />
</div>
<div className="mb-4">
 
  <input
    type="text"
    id="image"
    placeholder="Github link"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={github}
    onChange={handleGithubChange}
  />
</div>
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-[#CB1C8D] hover:bg-[#fff] hover:text-[#CB1C8D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
   { loading == true ? "Loading" : "Update Profile" }
  </button>
</div>

</form>
    </>
   
  );
}

export default CreateProject;