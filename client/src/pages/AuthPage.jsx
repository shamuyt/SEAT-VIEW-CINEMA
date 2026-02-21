import { useState } from 'react';
import api from '../hooks/useApi';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? '/auth/signup' : '/auth/login';
    const payload = isSignup ? form : { email: form.email, password: form.password };
    const { data } = await api.post(endpoint, payload);
    localStorage.setItem('seatview-token', data.token);
    setMessage('Authenticated. Favorite seat syncing enabled.');
  };

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">{isSignup ? 'Create account' : 'Login'}</h1>
        {isSignup && (
          <input className="w-full rounded bg-slate-800 p-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        )}
        <input className="w-full rounded bg-slate-800 p-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input
          className="w-full rounded bg-slate-800 p-2"
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full rounded bg-violet-600 py-2 font-semibold">{isSignup ? 'Sign up' : 'Login'}</button>
        <button type="button" onClick={() => setIsSignup(!isSignup)} className="text-sm text-violet-300">
          {isSignup ? 'Already have an account? Login' : 'Need an account? Sign up'}
        </button>
        {message && <p className="text-sm text-emerald-400">{message}</p>}
      </form>
    </main>
  );
};

export default AuthPage;
