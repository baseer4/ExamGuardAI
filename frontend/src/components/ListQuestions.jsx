import React from 'react'
import { CiCircleMinus } from "react-icons/ci";


const ListQuestions = ({index,onRemove}) => {
  return (
    <div>
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold">Question {index+1}</div>
            <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
            <div className="flex justify-end">
            <button onClick={onRemove} className="btn btn-circle mx-1 mb-2">
                <CiCircleMinus />
            </button>
       
            </div>

        </div>
    </div>
  )
}

export default ListQuestions;