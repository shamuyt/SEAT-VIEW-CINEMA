import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favoriteSeats: [
      {
        movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
        theatreName: String,
        seatNumber: String,
        row: String
      }
    ],
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
