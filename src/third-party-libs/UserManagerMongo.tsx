import React, { useEffect, useState, FormEvent } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

interface Profile {
  _id: string;
  bio: string;
  userId: string;
}

export const UserManagerMongo = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [form, setForm] = useState<Omit<Profile, '_id'>>({ bio: '', userId: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const fetchProfiles = async () => {
    const res = await fetch('/api/profiles');
    const data = await res.json();
    setProfiles(data);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/profiles/${editingId}` : '/api/profiles';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      const issues = data?.issues || {};
      const collectedErrors: string[] = [];
      Object.values(issues).forEach((val) => {
        if (val && Array.isArray(val._errors)) {
          collectedErrors.push(...val._errors);
        }
      });
      setErrors(collectedErrors.length ? collectedErrors : ['Validation failed']);
      return;
    }

    setForm({ bio: '', userId: '' });
    setEditingId(null);
    setErrors([]);
    fetchProfiles();
  };

  const handleEdit = (profile: Profile) => {
    setForm({ bio: profile.bio, userId: profile.userId });
    setEditingId(profile._id);
    setErrors([]);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/profiles/${id}`, { method: 'DELETE' });
    fetchProfiles();
  };

  return (
    <div>
      <GoBackToHome />
      <h2>Profiles</h2>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
          placeholder="Bio"
        />
        <input
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
          placeholder="User ID"
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Profile</button>
      </form>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>
            {profile.bio} (User ID: {profile.userId}){' '}
            <button type='button' onClick={() => handleEdit(profile)}>✏️</button>{' '}
            <button type='button' onClick={() => handleDelete(profile._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};