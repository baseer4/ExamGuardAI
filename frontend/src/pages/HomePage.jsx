import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
   
      <div className="mt-20 flex justify-center">
        <div className="max-w-2xl text-center ">
           <h1 className="text-5xl font-semibold font-round">AI-powered proctoring for secure exams</h1>
           <p className="mt-5 font-semibold text-lg text-gray-500">Experience the power of AI with [Placeholder]. Secure, reliable exam monitoring for both test-takers and creators, ensuring fair assessments every time.</p>

           <div className="mt-10 flex gap-5 justify-center btn-lg">
              <button className="btn btn-accent">Take a Test</button>
              <button className="btn btn-accent"  onClick={() => navigate("/create")}>Create a Test</button>
           </div>

        </div>

      </div>

  )
}

export default HomePage