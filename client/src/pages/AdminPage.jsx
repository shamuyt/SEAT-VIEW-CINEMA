import { useState } from 'react';
import api from '../hooks/useApi';

const AdminPage = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    trailerUrl: '',
    theatreName: 'SeatView Prime',
    showTime: '8:00 PM',
    duration: '2h 00m'
  });
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('seatview-token');
    await api.post('/movies', movie, { headers: { Authorization: `Bearer ${token}` } });
    setMsg('Movie uploaded and theatre layout generated.');
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <form onSubmit={submit} className="glass grid gap-3 rounded-xl p-6 md:grid-cols-2">
        <h1 className="md:col-span-2 text-2xl font-semibold">Admin Upload Console</h1>
        {Object.keys(movie).map((key) => (
          <input
            key={key}
            className="rounded bg-slate-800 p-2"
            placeholder={key}
            value={movie[key]}
            onChange={(e) => setMovie({ ...movie, [key]: e.target.value })}
          />
        ))}
        <button className="md:col-span-2 rounded bg-violet-600 py-2 font-semibold">Upload movie + seats</button>
        {msg && <p className="md:col-span-2 text-emerald-400">{msg}</p>}
      </form>
    </main>
  );
};

export default AdminPage;
