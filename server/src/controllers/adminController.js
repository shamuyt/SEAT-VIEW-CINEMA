import Seat from '../models/Seat.js';

export const updateLayout = async (req, res) => {
  const { movieId, seats } = req.body;
  await Seat.deleteMany({ movieId });
  await Seat.insertMany(seats.map((seat) => ({ ...seat, movieId })));
  res.json({ message: 'Layout updated' });
};
