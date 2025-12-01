// import React, { useEffect, useState } from 'react';
// const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

// export default function Messages() {
//   const [messages, setMessages] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchMessages() {
//       try {
//         const res = await fetch(`${API_BASE}/api/messages`);
//         const data = await res.json();

//         if (!res.ok) {
//           throw new Error(data.error || 'Failed to fetch messages.');
//         }

//         setMessages(data);
//       } catch (err) {
//         setError('Could not load messages.');
//       }
//     }
//     fetchMessages();
//   }, []);

//   return (
//     <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
//       <h2>Messages</h2>
//       {error && <div style={{ color: 'crimson' }}>{error}</div>}
//       {messages.length === 0 && <div>No messages yet.</div>}

//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {messages.map(m => (
//           <li key={m.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 10, borderRadius: 6 }}>
//             <div style={{ fontWeight: 'bold' }}>{m.name}</div>
//             <div style={{ fontStyle: 'italic', color: '#555' }}>{m.subject}</div>
//             <div style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>{m.message}</div>
//             <div style={{ marginTop: 8, fontSize: 12, color: '#888' }}>
//               {new Date(m.createdAt).toLocaleString()}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch(`${API_BASE}/api/messages`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch messages.');
        setMessages(data);
      } catch (err) {
        setError('Could not load messages.');
      }
    }
    fetchMessages();
  }, []);

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      {error && <div className="error-text">{error}</div>}
      {messages.length === 0 && <div>No messages yet.</div>}

      <ul className="messages-list">
        {messages.map(m => (
          <li key={m.id}>
            <div className="message-name">{m.name}</div>
            <div className="message-subject">{m.subject}</div>
            <div className="message-content">{m.message}</div>
            <div className="message-date">{new Date(m.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

