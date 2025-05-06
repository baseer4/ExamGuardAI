import {React,useState} from 'react'
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuthStore } from '../store/useAuthStore';


const LoginPage = () => {
  const {login} =useAuthStore();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) =>{
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit= (e) =>{
    e.preventDefault();
    login(formData);
  }
  return (
    <div className="animate-fade-in">
    
        <form 
           onSubmit={handleSubmit}
           className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
            <div className="border-2 p-6 w-full max-w-md rounded-xl ">
    
              <div className="mb-5 p-2">
                <h1 className="text-center text-5xl font-round font-light">Login</h1>
                <h4 className="text-center mt-2 text-lg"> Enter the credentials to continue</h4>
    
              </div>
                <div className="flex flex-col gap-2 p-8 relative">
      
                      <label className="label">
                            <span className="label-text font-medium">Email</span>
                      </label>
                      <input 
                         type="text" 
                         name="email"
                         placeholder="" 
                         className="input input-ghost input-lg w-full border-2 border-neutral-700" 
                         value={formData.email}
                         onChange={handleChange}
                         />
    


                      <label className="label">
                            <span className="label-text font-medium">Password</span>
                      </label>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        placeholder="" 
                        className="input input-ghost input-lg w-full  border-neutral-700" 
                        value={formData.password}
                        onChange={handleChange}
                        />
    
                      <button type="button" className="absolute inset-y-0 right-12 top-30 z-10" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? (<FaRegEyeSlash />):( <GoEye />
                        )}
                      </button>
    
                </div>
                      <div className=" flex justify-center ">
                      <button type="submit" className="btn btn-neutral hover:animate-fade-in-scale ">Login</button>
                </div>
            </div>
        </form>
   </div>
  )
}

export default LoginPage;