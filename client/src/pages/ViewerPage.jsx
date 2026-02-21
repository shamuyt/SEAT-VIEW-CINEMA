import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingOverlay from '../components/LoadingOverlay';
import TheatreScene from '../components/TheatreScene';
import api from '../hooks/useApi';
import { useCinemaStore } from '../store/useCinemaStore';

const ViewerPage = () => {
  const { movieId } = useParams();
  const { selectedSeat, setSelectedSeat, seatMetrics, setSeatMetrics } = useCinemaStore();
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await api.get(`/movies/${movieId}`);
      setMovie(data.movie);
      setSeats(data.seats);
      setSelectedSeat(data.seats.find((seat) => seat.status === 'available') || null);
      setLoading(false);
    };
    load();
  }, [movieId, setSelectedSeat]);

  const bookingLink = useMemo(() => {
    if (!movie) return 'https://in.bookmyshow.com/';
    const params = new URLSearchParams({ movie: movie.title, theatre: movie.theatreName, showTime: movie.showTime });
    return `https://in.bookmyshow.com/?${params.toString()}`;
  }, [movie]);

  return (
    <main className="relative mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[1fr_320px]">
      <section className="relative h-[75vh] overflow-hidden rounded-xl border border-slate-800">
        {loading && <LoadingOverlay />}
        {!loading && (
          <TheatreScene
            seats={seats}
            selectedSeat={selectedSeat}
            onSeatSelect={setSelectedSeat}
            trailerUrl={movie?.trailerUrl}
            onMetricsChange={setSeatMetrics}
          />
        )}
      </section>

      <aside className="glass h-fit space-y-4 rounded-xl p-4">
        <h2 className="text-xl font-bold text-violet-300">Seat Insight Panel</h2>
        <p className="text-sm text-slate-300">Movie: {movie?.title || '...'}</p>
        <p className="text-sm text-slate-300">Theatre: {movie?.theatreName || '...'}</p>
        <div className="space-y-1 rounded-md bg-slate-800/70 p-3 text-sm">
          <p>Seat Number: {seatMetrics?.seatNumber || '-'}</p>
          <p>Row: {seatMetrics?.row || '-'}</p>
          <p>Distance from Screen: {seatMetrics?.distance || '-'}m</p>
          <p>Viewing Rating: <span className="font-semibold text-emerald-400">{seatMetrics?.rating || '-'}</span></p>
          <p>Screen Angle Distortion: {seatMetrics?.angle || '-'}%</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="rounded bg-slate-800 p-2"><span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Available</div>
          <div className="rounded bg-slate-800 p-2"><span className="inline-block h-2 w-2 rounded-full bg-red-500" /> Booked</div>
          <div className="rounded bg-slate-800 p-2"><span className="inline-block h-2 w-2 rounded-full bg-violet-400" /> Selected</div>
        </div>

        <a
          href={bookingLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold hover:bg-violet-500"
        >
          Book This Seat
        </a>
      </aside>
    </main>
  );
};

export default ViewerPage;
