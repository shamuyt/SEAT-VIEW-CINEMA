export const sampleMovies = [
  {
    title: 'Interstellar Re-Experience',
    description: 'A journey beyond the stars with immersive visuals.',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80',
    trailerUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theatreName: 'SeatView IMAX Hall',
    showTime: '6:45 PM',
    duration: '2h 49m',
    genre: ['Sci-Fi', 'Adventure']
  },
  {
    title: 'Noir Nights',
    description: 'A modern thriller with edge-of-seat suspense.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80',
    trailerUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theatreName: 'SeatView Dolby Atmos',
    showTime: '9:15 PM',
    duration: '2h 10m',
    genre: ['Thriller', 'Drama']
  }
];

export const buildSeats = (movieId) => {
  const rows = 'ABCDEFGH'.split('');
  const seats = [];
  rows.forEach((row, rIndex) => {
    for (let s = 1; s <= 12; s += 1) {
      const isBooked = (rIndex + s) % 7 === 0;
      seats.push({
        movieId,
        row,
        number: s,
        position: { x: (s - 6.5) * 1.2, y: 0.4, z: -rIndex * 1.8 },
        status: isBooked ? 'booked' : 'available'
      });
    }
  });
  return seats;
};
