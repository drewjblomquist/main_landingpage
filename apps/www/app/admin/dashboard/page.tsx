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

  if (loading) return <div style={{ padding: 32 }}>Loading sections...</div>;
  if (error) return <div style={{ color: 'red', padding: 32 }}>{error}</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '2rem auto' }}>
      <h1>Admin Dashboard</h1>
      {sections.map((section) => (
        <div key={section.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, marginBottom: 24 }}>
          <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{section.name}</div>
          <label style={{ display: 'block', marginBottom: 4 }}>Text Content:</label>
          <textarea
            value={section.content || ''}
            onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, content: e.target.value } : s))}
            rows={3}
            style={{ width: '100%', marginBottom: 8 }}
          />
          <label style={{ display: 'block', marginBottom: 4 }}>Image URL:</label>
          <input
            type="text"
            value={section.image_url || ''}
            onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, image_url: e.target.value } : s))}
            style={{ width: '100%', marginBottom: 8 }}
          />
          <label style={{ display: 'block', marginBottom: 4 }}>
            <input
              type="checkbox"
              checked={section.visible}
              onChange={e => setSections(sections => sections.map(s => s.id === section.id ? { ...s, visible: e.target.checked } : s))}
              style={{ marginRight: 8 }}
            />
            Show this section
          </label>
          <button
            onClick={() => saveSection(section)}
            disabled={saving}
            style={{ marginTop: 8, padding: '8px 16px', fontWeight: 'bold' }}
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      ))}
    </div>
  );
} 