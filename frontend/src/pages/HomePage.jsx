import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div >

      <div className="flex justify-center animate-fade-in">
        <div className="max-w-2xl mt-20 text-center ">
           <h1 className="text-6xl font-round">AI-powered proctoring for secure exams</h1>
           <p className="mt-5 font-semibold text-lg text-gray-500">Experience the power of AI with SecureTest. Secure, reliable exam monitoring for both test-takers and creators, ensuring fair assessments every time.</p>

           <div className="mt-10 flex gap-5 justify-center btn-lg">
              <button className="btn btn-accent z-10 hover:animate-fade-in-scale" onClick={()=> navigate("/join")}>Take a Test</button>
              <button className="btn btn-accent z-10 hover:animate-fade-in-scale"  onClick={() => navigate("/create")}>Create a Test</button>
           </div>
          
        </div>
      </div>

      {/* background */}
      <div className='flex  justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 opacity-80 blur-3xl -z-20'>
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

      <div className='relative flex m-20 justify-center mb-8 '>
            <div className="card bg-base-300/15 min-w-[80vw] border border-white/15 shadow-md backdrop-filter backdrop-blur-xl p-8 shadow-base-200 gap-2 rounded-4xl">
                 <div className="tracking-tight text-6xl font-semibold text-base-content text-center leading-tight space-y-3">
                      <div>
                        <span>Secure, </span>
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-transparent bg-clip-text drop-shadow-md">
                          AI-driven exam monitoring
                        </span>
                      </div>
                      <div>
                        <span className="text-base-content">built with Google’s MediaPipe.</span>
                      </div>
                    </div>
                  <p className='text-xl font-semibold text-base-content text-center mt-2'>SecureTest is built using Google’s MediaPipe framework to deliver reliable, real-time proctoring directly in the browser. </p>
            </div>

      </div>
          <div className='flex justify-center mb-5 -mt-5'>
             
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 max-w-[80vw]">
                      {/* Top Row: 3 cards */}
                      <div className="card bg-base-300/15 border border-white/15 shadow-lg backdrop-filter backdrop-blur-xl p-8 shadow-base-300 gap-2 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">Secure Monitoring</h3>
                        <p>Stay protected with real-time exam monitoring that runs entirely in the browser — no extensions, no software, just seamless proctoring.</p>
                      </div>

                      <div className="card bg-base-300/15 border border-white/15 shadow-lg backdrop-filter backdrop-blur-xl p-8 shadow-base-300 gap-2 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">Built with MediaPipe</h3>
                        <p>Leveraging Google’s MediaPipe, SecureTest ensures precise face and head tracking for reliable, non-intrusive exam supervision.</p>
                      </div>

                      <div className="card bg-base-300/15 border border-white/15 shadow-lg backdrop-filter backdrop-blur-xl p-8 shadow-base-300 gap-2 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">Instant Proctoring</h3>
                        <p>No setup delays. Exams begin with immediate monitoring, letting candidates focus while the system handles everything behind the scenes.</p>
                      </div>

                      <div className="card bg-base-300/15 border border-white/15 shadow-lg backdrop-filter backdrop-blur-xl p-8 shadow-base-300 gap-2 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">Privacy-First</h3>
                        <p>We don’t store videos or faces. All analysis happens locally, prioritizing both student privacy and fast performance.</p>
                      </div>
                    </div>
                  </div>
              </div>
  )
}

export default HomePage