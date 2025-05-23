import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

export const useExamStore = create((set) => ({
    isTestValid:false,
    isTestLoading:false,
    testError:null,

    testQuestions:null,
    testQuestionsError:null,

    FinalTestData:null,
    isJoinLinkLoading:false,
    joinLink:"",
    setJoinLink: (link) => set({joinLink:link}),


    checkTestValid: async(id) =>{
        set({isTestLoading:true})
        try {
            const res =await axiosInstance.get(`/join/${id}`);
            set({isTestValid:true});
            return res.data
        } catch (error) {
            if (error.response?.status === 404) {
                set({ testError: "Test not found :(" });
              } else if (error.response?.status === 403) {
                set({ testError: "This test has expired. Please contact your instructor for assistance." });
            } else if (error.response?.status === 400) {
                set({ testError: "You have already submitted this test. If you believe this is a mistake, please contact your instructor." });
            } else {
                set({ testError: "Unknown error" });
              }
              set({ isTestValid: false });
        } finally{
            set({isTestLoading:false})
        }
    },

    submitTest: async(data) =>{
        set({isJoinLinkLoading:true})
        try {
            const res =await axiosInstance.post("/create/test",data)
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

    fetchTestQuestions: async (id) => {
        set({ testQuestionsError: null });
        try {
            const res = await axiosInstance.get(`/test/${id}`);
            set({ testQuestions: res.data });
        } catch (error) {
            console.log("Error fetching test:", error);
            set({ testQuestionsError: error.message || "Unknown error" });
        }
    },

}))

