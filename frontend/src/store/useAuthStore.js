import {create} from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp:false,
    isCheckingAuth:true,
    isLoggingIn:false,


    checkAuth: async()=>{
        try {
            const res = await axiosInstance.get("/auth/check");
            set({authUser:res.data});
        } catch (error) {
            set({authUser: null});
            console.log("Error in checkAuth",error);
        } finally{
            set({isCheckingAuth:false});
        }
    },

    signup: async(data)=>{
        set({isSigningUp:true})
        
        try {
            const res =await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data})
            toast.success("Account created successfully");
        } catch (error) {
            toast.error(error.reponse?.data?.message);
        }finally{
            set({isSigningUp:false});
        }
    },
    logout:async()=>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error("Can't logout, please try again",error)
        }
    },
    login: async(data)=>{
        set({isLoggingIn:true});
        try {
            const res = await axiosInstance.post("/auth/login",data);
            set({authUser:res.data})
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error("Can't login, please try again",error)
        } finally{
            set({isLoggingIn:false});
        }
    }
}));