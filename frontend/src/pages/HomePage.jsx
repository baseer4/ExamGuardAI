import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>

      <div className="mt-20 flex justify-center animate-fade-in">
        <div className="max-w-2xl text-center ">
           <h1 className="text-5xl font-semibold font-round">AI-powered proctoring for secure exams</h1>
           <p className="mt-5 font-semibold text-lg text-gray-500">Experience the power of AI with ExamGuardAI. Secure, reliable exam monitoring for both test-takers and creators, ensuring fair assessments every time.</p>

           <div className="mt-10 flex gap-5 justify-center btn-lg">
              <button className="btn btn-accent z-10 hover:animate-fade-in-scale" onClick={()=> navigate("/join")}>Take a Test</button>
              <button className="btn btn-accent z-10 hover:animate-fade-in-scale"  onClick={() => navigate("/create")}>Create a Test</button>
           </div>

        </div>

      </div>

      {/* background */}
      <div className='flex  justify-center relative  opacity-80 blur-3xl -z-10'>
            <div className="container  bg-orange-400  border-2 w-64 h-64 rounded-full mix-blend-multiply filter ">

            </div>     
            <div className="container absolute border-2 bg-purple-400 w-64 h-64 rounded-full">

            </div>
            <div className="container absolute top-20 border-2 bg-red-400 w-64 h-64 rounded-full">

            </div>
            <div className="container absolute bottom-20 border-2 bg-blue-400 w-64 h-64 rounded-full">

            </div>
            <div className="container border-2  bg-emerald-400 w-64 h-64 rounded-full">

            </div>


          </div>
    </div>

  )
}

export default HomePage