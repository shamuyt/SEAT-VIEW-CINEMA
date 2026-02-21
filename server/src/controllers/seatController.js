import Seat from '../models/Seat.js';
import User from '../models/User.js';

export const updateSeatStatus = async (req, res) => {
  const { status } = req.body;
  const seat = await Seat.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(seat);
};

export const saveFavoriteSeat = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.favoriteSeats.push(req.body);
  await user.save();
  res.json(user.favoriteSeats);
};
