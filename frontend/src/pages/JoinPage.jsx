import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import online_test from "../assets/images/online_test.svg"

const JoinPage = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState("");


  const join = () => {
    try {
      const url = new URL(link);
      const path = url.pathname;
      // console.log(path)
      navigate(path);
    } catch {
      alert("Invalid link");
    }
  };
  
  return (
<div className="flex flex-col min-h-[calc(100vh-10rem)] animate-fade-in">

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-col justify-center h-[60vh] gap-5 m-20 p-10 lg:p-20">
          <h1 className="text-2xl font-bold">Join Your Exam</h1>

          <label className="input input-lg lg:w-96 border-2">
            <span className="label">https://</span>
            <input
              type="text"
              placeholder="URL"
              className="w-full"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />         
             </label>

          <div>
            <button onClick={join} className="btn btn-neutral btn-md lg:btn-lg hover:animate-fade-in-scale">Join</button>
          </div>

          <div>
            <p className="text-xl">
              Your participation will be monitored to ensure fairness and integrity.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-center p-30">
        <img
            src={online_test}
            alt="multiple choice questions"
            className="size-100"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 ">
        <div className="info-box">
          <h3 className="text-lg font-semibold">Need Help?</h3>
          <p className="text-sm">Make sure the link is correct and active. If you encounter issues, contact your instructor.</p>
        </div>
      </footer>
    </div>
  )
}

export default JoinPage
