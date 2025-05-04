import {React,useState} from 'react'
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex justify-center items-center h-[calc(100vh-8rem)] animate-fade-in">
        <div className="border-2 p-6 w-full max-w-md rounded-xl ">

          <div className="p-2">
            <h1 className="text-center text-5xl font-round font-light">Login</h1>
            <h4 className="text-center mt-2 text-lg"> Enter credentials to continue</h4>

          </div>
            <div className="flex flex-col gap-2 p-8 relative">
                  <label className="label">
                      <span className="label-text font-medium">Email</span>
                  </label>
                  <input type="text" placeholder="" className="input input-ghost input-lg w-full  border-neutral-700" />



                  <label className="label">
                        <span className="label-text font-medium">Password</span>
                  </label>
                  <input type={showPassword ? "text" : "password"} placeholder="" className="input input-ghost input-lg w-full  border-neutral-700" />
                  <button className="absolute inset-y-0 right-12 top-30 z-10" onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? (
                    <FaRegEyeSlash />
                  ):(
                      <GoEye />
                    )}
                  </button>
            </div>
            <div className=" flex justify-center ">
            <button className="btn btn-neutral hover:animate-fade-in-scale ">Login</button>

            </div>
            

        </div>
    </div>
  )
}

export default LoginPage;