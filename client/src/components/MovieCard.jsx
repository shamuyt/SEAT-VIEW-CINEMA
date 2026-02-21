import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20">
    <img src={movie.posterUrl} alt={movie.title} className="h-72 w-full object-cover" />
    <div className="space-y-3 p-4">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="line-clamp-2 text-sm text-slate-400">{movie.description}</p>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{movie.duration}</span>
        <span>{movie.showTime}</span>
      </div>
      <Link
        to={`/movie/${movie._id}`}
        className="inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold transition hover:bg-violet-500"
      >
        View Theatre Experience
      </Link>
    </div>
  </article>
);

export default MovieCard;
