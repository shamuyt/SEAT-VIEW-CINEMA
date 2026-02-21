import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import api from '../hooks/useApi';
import { useCinemaStore } from '../store/useCinemaStore';

const HomePage = () => {
  const { movies, setMovies } = useCinemaStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await api.get('/movies');
        setMovies(data);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="mb-10 rounded-2xl bg-gradient-to-r from-violet-700/40 via-slate-800 to-slate-900 p-8">
        <h1 className="text-4xl font-bold">Preview your exact theatre view before booking</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          SeatView Cinema recreates the full 3D hall so you can pick the perfect seat with confidence.
        </p>
      </section>

      <h2 className="mb-5 text-2xl font-semibold">Now Running</h2>
      {loading ? (
        <p className="text-slate-400">Fetching shows...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
