import {React,useState} from 'react'
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import {useAuthStore} from "../store/useAuthStore.js"

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "",
    password:"",
  });

  const [showPassword, setShowPassword] = useState(false);

  const {signup} = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 8) return toast.error("Password must be at least 8 characters");

    return true;
  };

  const handleChange =(e) =>{
    setFormData(prev => ({...prev,[e.target.name]:e.target.value

    }));
  };

  const handleSubmit =(e) =>{
        e.preventDefault();
        
        const isValid= validateForm();

        if (isValid){
          signup(formData);
        } 
  };

  return (
    <div className="mt-24  animate-fade-in">

    <form 
       onSubmit={handleSubmit}
       className="flex justify-center items-center min-h-screen[calc(100vh-8rem)]">
        <div className="border-2 p-6 w-full max-w-md rounded-xl ">

          <div className="mb-5 p-2">
            <h1 className="text-center text-5xl font-round font-light">Sign Up</h1>
            <h4 className="text-center mt-2 text-lg"> sign up to create new account</h4>

          </div>
            <div className="flex flex-col gap-2 p-8 relative">
                  <label className="label">
                      <span className="label-text font-medium">Full Name</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="" 
                    name="fullName"
                    className="input input-ghost input-lg w-full border-neutral-700"
                    value={formData.fullName} 
                    onChange={handleChange}
                    />

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

                  <button type="button" className="absolute inset-y-0 right-12 top-52 z-10" onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? (<FaRegEyeSlash />):( <GoEye />
                    )}
                  </button>

            </div>
                  <div className=" flex justify-center ">
                  <button type="submit" className="btn btn-neutral hover:animate-fade-in-scale ">SignUp</button>

            </div>
            

        </div>
    </form>
    </div>
  )
}

export default SignUpPage