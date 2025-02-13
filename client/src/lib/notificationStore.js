import { create } from "zustand";
import apiRequest from "./apiRequest";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    try {
      console.log("Fetching notifications..."); // Debug log 1
      // Here was the bug - you were missing apiRequest
      const res = await apiRequest("/auth/users/notification");
      console.log("API Response:", res); // Debug log 2
      console.log("Setting number to:", res.data); // Debug log 3
      set({ number: res.data });
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
    }
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));