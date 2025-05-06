import React, { useEffect, useState, FormEvent } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserManagerPgsql = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<Omit<User, 'id'>>({ name: '', email: '' });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/users/${editingId}` : '/api/users';

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

    setForm({ name: '', email: '' });
    setEditingId(null);
    setErrors([]);
    fetchUsers();
  };

  const handleEdit = (user: User) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
    setErrors([]);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    <div>
      <GoBackToHome />
      <h2>Users</h2>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){' '}
            <button type='button' onClick={() => handleEdit(user)}>✏️</button>{' '}
            <button type='button' onClick={() => handleDelete(user.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
