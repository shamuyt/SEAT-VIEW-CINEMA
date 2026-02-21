import { create } from 'zustand';

export const useCinemaStore = create((set) => ({
  movies: [],
  selectedSeat: null,
  seatMetrics: null,
  setMovies: (movies) => set({ movies }),
  setSelectedSeat: (seat) => set({ selectedSeat: seat }),
  setSeatMetrics: (metrics) => set({ seatMetrics: metrics })
}));
