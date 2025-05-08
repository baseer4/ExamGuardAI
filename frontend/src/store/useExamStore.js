import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useExamStore = create((set) => ({
    isTestValid:false,
    FinalTestData:null,
    isJoinLinkLoading:false,
    joinLink:"",
    setJoinLink: (link) => set({joinLink:link}),





    checkTest: async() =>{
        try {
            await axiosInstance.get("/create/isTestvalid");
            set({isTestValid:true});
        } catch (error) {
            console.log("Error while checking test validity",error.response?.data?.message);
        } finally{
            set({isTestValid:false})
        }
    },

    submitTest: async(data) =>{
        set({isJoinLinkLoading:true})
        try {
            const res =await axiosInstance.post("/create/mcq",data)
            set({
                FinalTestData:res.data,
                joinLink:res.data.joinLink
            })
        } catch (error) {
            console.log(error)
        } finally{
            set({isJoinLinkLoading:false})
        }
    },
   
}))

