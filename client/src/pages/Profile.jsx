import React,{useState,useEffect} from 'react';
import { useStateContext } from "../context/stateContext";
import img from '../assets/wallet.png'
import Loader from '../components/Loader';
const  Profile = () => {
  const { address, getProfile } = useStateContext();
  const [profile, setProfile] = useState([
      "name",
      "www.link.com",
      "about",
      "mail",
      "twitter",
      "github"
  ]);
  const [isLoading, setIsLoading] = useState(false);
    
  const fetchProfile = async () => {
    setIsLoading(true);
    const data = await getProfile();
    if(data){
      console.log(data)
    }
    setProfile(data);
    setIsLoading(false);
  }
  useEffect(() => {
     fetchProfile();
  }, [address]);
    
  return (
   
  <div>
     {isLoading &&  <Loader />} {  address && profile  ?  
(<div className="max-w-md mx-auto bg-[#791355] text-white shadow-lg rounded-lg overflow-hidden mt-20 ">
    <p className='text-center text-3xl'>Profile</p>
    <div className="sm:items-center px-6 py-4 ">
        <div className='ml-36'>
        <img className="flex sm:mx-0 sm:flex-shrink-0 h-24 sm:h-32 sm:w-32 rounded-full object-cover object-center" src={profile[1] == "www.link.com"  ? "https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg" : profile[1]} alt="" />
        </div>
       
        <div className="mt-4 sm:mt-0 sm:ml-4 sm:text-left text-center">
          <h1 className="text-xl leading-tight text-center mt-2">{profile[0]}</h1>
          <p className="text-sm text-center mt-5">{address}</p>
          <p className="text-sm text-center">{profile[3]}</p>
          <p className='text-center mt-10'>About</p>
          <p className="text-sm text-center">{profile[2]}</p>
          <div className="mt-4 flex  sm:justify-start">
            <a href={profile[4]} className="text-white hover:text-blue-500 mr-4">
              <svg className="h-6 w-6 fill-current " viewBox="0 0 512 512">
                <path d="M437.4 151.6c.3 4.7.3 9.4.3 14.1 0 143.6-109.4 309.5-309.5 309.5-61.5 0-118.5-17.9-166.3-48.7 8.5.9 17 .9 25.4.9 49 0 94.1-16.5 130-44.5-46.1-.9-84.9-31.3-98.2-73.1 6.4.9 12.9 1.4 19.8 1.4 9.4 0 18.4-.9 27-2.6-47.3-9.4-82.6-51-82.6-100.8v-1.3c13.7 7.6 29.4 12.2 46.1 12.8-27.3-18.2-45.3-49.5-45.3-84.9 0-18.8 5-36.2 13.7-51.4 49.9 61 125 101.5 209.7 105.8-1.7-7.6-2.6-15.5-2.6-23.5 0-56.6 45.9-102.6 102.6-102.6 29.4 0 56.3 12.2 74.9 31.3 23.1-4.7 45.9-13 66.6-24.7-7.6 23.8-23.1 43.7-43.7 56.6 20.2-2.1 39.4-7.6 57.4-15.5-13.4 20.8-30.4 39.4-49.9 54z" />
              </svg>
            </a>
            <a href={profile[5]} className="text-white hover:text-black">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256c0 113.2 73.6 209.4 175.6 243.6 12.8 2.4 17.5-5.6 17.5-12.4 0-6.1-.2-22.3-.3-43-71.4 15.5-86.6-34.6-86.6-34.6-11.7-29.6-28.6-37.5-28.6-37.5-23.3-15.9 1.8-15.6 1.8-15.6 25.8 1.8 39.3 26.5 39.3 26.5 22.9 39.2 60.2 27.9 74.8 21.4 2.3-16.6 8.9-27.9 16.2-34.3-56.5-6.5-115.8-28.3-115.8-126.2 0-27.9 9.9-50.7 26.2-68.5-2.7-6.5-11.3-32.5 2.5-67.8 0 0 21.5-6.9 70.4 26.3 20.4-5.7 42.4-8.5 64.2-8.6 21.8.1 43.9 2.9 64.3 8.6 48.9-33.2 70.2-26.3 70.2-26.3 13.9 35.3 5.3 61.3 2.6 67.8 16.4 17.8 26.1 40.6 26.1 68.5 0 97.9-59.5 119.6-116.2 125 9.1 7.8 17.3 23.4 17.3 47.1 0 34.1-.3 61.6-.3 70 0 6.9 4.6 14.9 17.6 12.4C438.5 465.4 512 369.2 512 256 512 114.6 397.4 0 256 0z" />
              </svg>
            </a>
          </div>
          <div className='text-[#CB1C8D] mt-10'>
              <a href="/updateprofile" className='bg-white rounded-md px-4 py-2 '>update profile</a>
          </div>
        </div>
      </div> 
    </div>) :  <div className='mt-10 text-4xl text-white bg-[#791355] px-28 py-20 md:flex'><p className='my-auto'>connect your <span className=''>wallet</span> to see your profile <p className='mt-28'>try reconnecting the wallet if you are not able to find the profile. we are working on it 😀</p></p><img src={img} alt="" /></div>} 
    </div>
  );
}

export default Profile;
