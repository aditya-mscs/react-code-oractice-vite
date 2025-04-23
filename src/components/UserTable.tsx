/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck Temporary ignore
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { debounce } from '../hooks/useDebounce';
import GoBackToHome from './GoBacktoHome';

const fetchUsers = () => new Promise((resolve, reject) =>
  setTimeout(() => resolve([
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
    { id: 3, name: 'Charlie', email: 'charlie@mail.com' },
    { id: 4, name: 'David', email: 'charlie@mail.com' },
    { id: 5, name: 'Eve', email: 'charlie@mail.com' },
    { id: 6, name: 'Frank', email: 'charlie@mail.com' },
    { id: 7, name: 'Grace', email: 'charlie@mail.com' },
  ]), 500)
);

function UserTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editing, setEditing] = useState({ id: null, field: null });
  const [editValue, setEditValue] = useState('');

  // Fetch users on mount
  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  // Create debounced version of search update
  const debouncedUpdate = useCallback(
    debounce((val) => setDebouncedSearch(val), 400),
    []
  );

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);              // immediate update
    debouncedUpdate(val);        // delayed update
  };

  const filteredUsers = useMemo(() => {
    let res = users;
    if (debouncedSearch) {
      res = res.filter(u =>
        u.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    res = [...res].sort((a, b) => {
      const cmp = a[sortKey].localeCompare(b[sortKey]);
      return sortOrder === 'asc' ? cmp : -cmp;
    });
    return res;
  }, [users, debouncedSearch, sortKey, sortOrder]);

  const handleEdit = (id, field, value) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id ? { ...u, [field]: value } : u
      )
    );
    setEditing({ id: null, field: null });
  };

  const handleKeyDown = (e, id, field) => {
    if (e.key === 'Enter') {
      handleEdit(id, field, editValue);
    } else if (e.key === 'Escape') {
      setEditing({ id: null, field: null });
    }
  };

  const UserRow = React.memo(({ user }) => (
    <tr>
      <td>
        {editing.id === user.id && editing.field === 'name' ? (
          <input
            value={editValue}
            autoFocus
            onChange={e => setEditValue(e.target.value)}
            onBlur={() => handleEdit(user.id, 'name', editValue)}
            onKeyDown={e => handleKeyDown(e, user.id, 'name')}
          />
        ) : (
          <span onDoubleClick={() => {
            setEditing({ id: user.id, field: 'name' });
            setEditValue(user.name);
          }}>
            {user.name}
          </span>
        )}
      </td>
      <td>
        {editing.id === user.id && editing.field === 'email' ? (
          <input
            value={editValue}
            autoFocus
            onChange={e => setEditValue(e.target.value)}
            onBlur={() => handleEdit(user.id, 'email', editValue)}
            onKeyDown={e => handleKeyDown(e, user.id, 'email')}
          />
        ) : (
          <span onDoubleClick={() => {
            setEditing({ id: user.id, field: 'email' });
            setEditValue(user.email);
          }}>
            {user.email}
          </span>
        )}
      </td>
    </tr>
  ));

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <GoBackToHome />
      <h2>User Table</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
        style={{ marginBottom: 10, width: '100%' }}
      />
      <table border={1} cellPadding={8} cellSpacing={0} width="100%">
        <thead>
          <tr>
            <th
              onClick={() => {
                setSortKey('name');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
              style={{ cursor: 'pointer' }}
            >
              Name {sortKey === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th
              onClick={() => {
                setSortKey('email');
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              }}
              style={{ cursor: 'pointer' }}
            >
              Email {sortKey === 'email' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={2}>No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;