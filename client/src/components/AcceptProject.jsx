import React, { useState } from 'react';
import { useStateContext } from '../context/stateContext';
import { useLocation} from 'react-router-dom';
const  Popup = () =>  {
  const [showPopup, setShowPopup] = useState(false);
  const { state } = useLocation();
  const {acceptProject} = useStateContext();
  function handleDeleteClick() {
    setShowPopup(true);
  }

  function handleConfirmClick() {
    // Handle confirmation logic here
    const data = acceptProject(state.pId,state.budget)
    if(data) {
        console.log(data)
    }
    setShowPopup(false);
  }

  function handleCancelClick() {
    setShowPopup(false);
  }

  return (
    <div>
      <button
        className="bg-[#CB1C8D] hover:bg-[#6f104e] text-white font-bold py-2 px-4 rounded"
        onClick={handleDeleteClick}
      >
        Accept Project
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-5">
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Are you sure?</h2>
              <p className="text-gray-600">proposed amount will be transfered to freelancer</p>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-[#CB1C8D] hover:bg-[#6f104e] text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
