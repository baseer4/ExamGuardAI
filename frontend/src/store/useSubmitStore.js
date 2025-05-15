import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast"

export const useSubmitStore = create((set) =>({
    submitPayload:{},
    isUserSubmitting:false,


    submitMCQ: async(data) =>{
        set({isUserSubmitting:true})
        try {
            const res = await axiosInstance.post("/submit/mcq",data);
            set({submitPayload:res.data})
            toast.success("Submitted Successfully")
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally{
            set({isUserSubmitting:false})
        }

            
    },

    submitAssignment: async(data) =>{
        set({isUserSubmitting:true})
        try {
            const res = await axiosInstance.post("/submit/assignment",data);
            set({submitPayload:res.data})
            toast.success("Submitted Successfully")
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally{
            set({isUserSubmitting:false})
        }

    },



    
}))