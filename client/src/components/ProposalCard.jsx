import React,{useState} from 'react';
import Loader from './Loader';
import { useStateContext } from '../context/stateContext';
import { useNavigate } from 'react-router-dom';
const ProposalCard = ({description,amount,owner,stateOwner,index,isApproved,isRejected}) => {
    const {address,approve,reject } = useStateContext();
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)
    const acceptHandle = async(e) =>{
      e.preventDefault()
      setIsLoading(true)
    console.log(index)
    console.log(owner)
      const data = await approve(index,owner)
      setIsLoading(false)

      if(data){
        console.log(data)
      }
   }
   const rejectHandle = async(e) =>{
    e.preventDefault()
    console.log(index)
    console.log(owner)
    const data = await reject(index,owner)
    if(data){
      console.log(data)
    }
 }
  return (
    <div>
    {isLoading && <Loader/>}
    <div className="bg-white text-[#791355] rounded-lg  shadow-lg max-w-xl">
     <div className='flex p-5'>
     <img className="w-20 h-20  rounded-full object-cover" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Profile Pic" />
     <div className='ml-5 text-justify'>
     <p className='mt-2'>{owner}</p>
     <p className="text-gray-700 text-base mt-2">quotation: {amount}</p>
     </div>
     
     </div>

      <div className="px-4 ">
      <p className=' px-2 py-[0.01rem] rounded-md max-w-sm bg-gray-200 text-center'>{
             isRejected && <p className='bg-red'>rejected</p>
          }</p>
        <p>Description:- </p>
        <p className="text-gray-700 font-bold text-lg mb-2">{description}</p>
       
      </div>
      {address == stateOwner && !isApproved && !isRejected &&  <div className='mt-2 p-2  text-white'>
         <button className='px-2 py-1 rounded-lg bg-[#CB1C8D]' onClick={(e) => acceptHandle(e)}>Accept</button>
         <button className='px-2 py-1 ml-5 rounded-lg bg-[#CB1C8D]' onClick={(e)=> rejectHandle(e)}>Reject</button>
      </div> }
      
    </div>
    </div>
  );
};

export default ProposalCard;
