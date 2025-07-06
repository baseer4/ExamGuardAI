import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useDashboardStore = create((set) => ({
  dashdata:[], 
  fetchDash: async () => {
    try {
      const res = await axiosInstance.get('/dashboard/all');
      set({ dashdata: res.data }); 
      
    } catch (error) {
      console.log("Dashboard fetch failed", error);
    }
  }
}));
