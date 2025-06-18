import { create } from "zustand";

export const useFlagStore = create((set) => ({
  violations: [],
  addViolation: (violation) =>
    set((state) => ({
      violations: [...state.violations, violation],
    })),
  clearViolations: () => set({ violations: [] }),
}));
