import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    posterUrl: { type: String, required: true },
    trailerUrl: String,
    theatreName: { type: String, default: 'SeatView Grand Screen 1' },
    showTime: { type: String, default: '7:30 PM' },
    duration: String,
    genre: [String]
  },
  { timestamps: true }
);

export default mongoose.model('Movie', movieSchema);
