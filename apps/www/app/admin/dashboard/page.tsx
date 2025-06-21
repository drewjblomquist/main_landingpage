"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Section {
  id: number;
  name: string;
  content: string;
  image_url: string;
  visible: boolean;
}

export default function AdminDashboardPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Require login
    if (typeof window !== 'undefined' && localStorage.getItem('admin_logged_in') !== 'true') {
      router.push('/admin');
    }
  }, [router]);

  useEffect(() => {
    fetchSections();
  }, []);

  async function fetchSections() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/sections');
      const data = await res.json();
      if (res.ok) setSections(data);
      else setError(data.error || 'Failed to fetch sections');
    } catch (err) {
      setError('Failed to fetch sections');
    } finally {
      setLoading(false);
    }
  }

  async function saveSection(section: Section) {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(section),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Failed to save section');
      else fetchSections();
    } catch (err) {
      setError('Failed to save section');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="text-white text-center p-8">Loading sections...</div>;
  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Admin Dashboard</h1>
      {sections.map((section) => (
        <div key={section.id} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl mb-8">
          <div className="text-2xl font-bold text-white mb-4 capitalize">{section.name}</div>
          
          <label className="block text-white mb-2 text-lg font-medium">Text Content:</label>
          <textarea
            value={section.content || ''}
            onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, content: e.target.value } : s))}
            rows={4}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none mb-4"
          />
          
          <label className="block text-white mb-2 text-lg font-medium">Image URL:</label>
          <input
            type="text"
            value={section.image_url || ''}
            onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, image_url: e.target.value } : s))}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none mb-4"
          />
          
          <label className="flex items-center gap-2 text-[#c8cacc] text-lg">
            <input
              type="checkbox"
              checked={section.visible}
              onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, visible: e.target.checked } : s))}
              className="accent-green-700 w-5 h-5 rounded"
            />
            Show this section
          </label>
          
          <button
            onClick={() => saveSection(section)}
            disabled={saving}
            className="w-full py-3 px-6 rounded-2xl font-bold text-white text-lg mt-6 bg-[#1D3A1D] hover:bg-green-900 transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Section'}
          </button>
        </div>
      ))}
    </div>
  );
} 