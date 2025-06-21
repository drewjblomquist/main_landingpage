'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'drewblomquist' && password === 'drewblomquist') {
      localStorage.setItem('admin_logged_in', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full mx-auto p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label className="block text-white mb-2 text-lg font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-2 text-lg font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-2xl font-bold text-white text-lg mt-4 bg-[#1D3A1D] hover:bg-green-900 transition"
          >
            Login
          </button>
          {error && <div className="text-red-400 mt-4 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
} 