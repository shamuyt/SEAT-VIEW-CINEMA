import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link to="/" className="text-xl font-bold text-violet-400">SeatView Cinema</Link>
      <div className="flex items-center gap-5 text-sm text-slate-300">
        <Link to="/" className="hover:text-violet-300">Movies</Link>
        <Link to="/auth" className="hover:text-violet-300">Login</Link>
        <Link to="/admin" className="rounded bg-violet-600 px-3 py-2 hover:bg-violet-500">Admin Panel</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
