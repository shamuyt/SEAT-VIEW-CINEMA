import mongoose from 'mongoose';

const seatSchema = new mongoose.Schema(
  {
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    row: { type: String, required: true },
    number: { type: Number, required: true },
    position: {
      x: Number,
      y: Number,
      z: Number
    },
    status: { type: String, enum: ['available', 'booked', 'unavailable'], default: 'available' }
  },
  { timestamps: true }
);

seatSchema.index({ movieId: 1, row: 1, number: 1 }, { unique: true });

export default mongoose.model('Seat', seatSchema);
