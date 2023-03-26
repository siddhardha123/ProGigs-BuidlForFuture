import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ProposalCard from '../components/ProposalCard';
import { ethers } from 'ethers';
import { useStateContext } from '../context/stateContext';
import { calculateBarPercentage, daysLeft } from '../utils';
import Loader from '../components/Loader'
import AcceptProject from '../components/AcceptProject'
const ProjectDetails =() => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {createProposal, address,getProposalsFromContract,contract,approve} = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false)
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('')
  const [proposalsAddress, setProposalAddress] = useState([]);
  const [proposals, setProposals] = useState([]);
 

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
 
  const getProposals = async() => {
    try {
      setIsLoading(true)
      const data = await getProposalsFromContract(state.pId)
      setProposals(data)
      setIsLoading(false)
    } catch(err) {
      console.error("failed to get proposals", err);
      setProposals([]);
      setIsLoading(false) // set proposals to an empty array to avoid unexpected behavior
    }
  }
  useEffect(() => {
    setProposalAddress(state.proposals)  
    getProposals()
  }, [address,contract])
  const remainingDays = daysLeft(state.daysLeft);
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);
      let id = state.pId
      const form = {
        id,
        description,
        amount
    }
    // console.log(form)
    const s = await createProposal({...form, amount: ethers.utils.parseUnits(form.amount, 18)}); 
    setIsLoading(false);
    navigate("/")
    
  }

  return (
    <div className='p-12'>
      {isLoading && <Loader />}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />
          {/* <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div className="absolute h-full bg-[#4acd8d]" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%' }}>
            </div>
          </div> */}
        </div>

        {/* <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title="Total Backers" value={donators.length} />
        </div> */}
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Owner</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{state.owner}</h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">2 Projects</p>
                
              </div>
              {console.log(state)}
              <p className='bg-[green] px-2  rounded-md'>{
             state.isApproved  && !state.status? "ongoing" : state.status ? "completed" : "new"
          }</p>
            {/* {console.log(state)} */}
             { address == state.owner && state.isApproved  && < AcceptProject />}
            </div>
            
           {state.freelancer && <div className='mt-2 text-white'>
                 <h1>assigned to</h1>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">{state.freelancer}</h4>
              </div> }
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Description</h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.description}</p>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Budget</h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">{state.budget} Matic</p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">Proposals</h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {proposalsAddress && proposals ? proposals.map((item, index) => (
                <div key={`${index}`} className="flex justify-between items-center gap-4">
                  {console.log(state.freelancer)}
                  <ProposalCard profilePic={item} description={item.description} amount={item.amount}  owner={proposalsAddress[index]} stateOwner={state.owner} index={index} isApproved={state.isApproved} isRejected={item.isRejected}/>
                </div>
              )) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">No Proposals yet. Be the first one!</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">post proposals</h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <form onSubmit={handleSubmit} className="max-w-2xl ">


              <div className="mb-4">

                <textarea
                  type="description"
                  placeholder="description"
                  id="description"
                  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="mb-4">


                <input
                  id="amount"
                  placeholder="amount"
                  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
                  value={amount}
                  onChange={handleAmountChange}
                />
                
              </div>





            {!state.isAccepted ? <div className="flex items-center justify-between">
                
                {address != state.owner ? <button
                  type="submit"
                  className="bg-[#CB1C8D] hover:bg-[#fff] hover:text-[#CB1C8D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {buttonLoading == true ? "Loading" : "post proposal" }
                </button> : <p className='text-[#CB1C8D]'>owner cant post proposal</p>}
              </div> :<p className='text-[#CB1C8D]'>project is already started</p>}

            </form>
          </div>
          <div className="flex-1">
          

          
        </div>
        </div>

       
      </div>
     
    </div>
  )
}

export default ProjectDetails