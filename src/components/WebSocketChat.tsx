//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import GoBackToHome from './GoBacktoHome';

const WebSocketChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    // Connect to WebSocket server
    ws.current = new WebSocket('ws://localhost:8080'); // Replace with your WS URL

    ws.current.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.current.onmessage = (event) => {
      const message = event.data;
      setMessages((prev) => [...prev, message]);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      // ✅ Cleanup on unmount
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <GoBackToHome />
      <h2>WebSocket Chat</h2>
      <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'scroll', marginBottom: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button type="button" onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketChat;