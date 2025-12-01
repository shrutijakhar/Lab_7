// import React, { useEffect, useState } from 'react';
// import { escapeHtml } from '../utils/sanitize';

// const DRAFT_KEY = 'contact_draft_v1';
// const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

// function validName(name) {
//   return /^[\p{L}\s'\-]+$/u.test(name.trim()) && name.trim().length > 0 && name.trim().length <= 100;
// }
// function validSubject(subject) {
//   return /^[\p{L}\s]+$/u.test(subject.trim()) && subject.trim().length > 0 && subject.trim().length <= 100;
// }
// function validEmail(email) {
//   // simple email regex (do not be too strict)
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
// }
// function validMessage(message) {
//   return message.trim().length > 0 && message.trim().length <= 2000 && !(/[<>]/.test(message));
// }

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//     consent: false
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState(null); // { type: 'saved'|'error'|'success', text: '' }

//   // restore draft from localStorage
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem(DRAFT_KEY);
//       if (raw) {
//         setForm(prev => ({...prev, ...JSON.parse(raw)}));
//         setStatus({ type: 'saved', text: 'Draft restored from saved data.' });
//       }
//     } catch (err) {
//       console.warn('Failed to parse draft', err);
//     }
//   }, []);

//   // auto save draft on changes (debounced)
//   useEffect(() => {
//     const id = setTimeout(() => {
//       const { consent, ...toSave } = form;
//       localStorage.setItem(DRAFT_KEY, JSON.stringify(toSave));
//       setStatus({ type: 'saved', text: 'Draft saved locally.' });
//     }, 600);
//     return () => clearTimeout(id);
//   }, [form]);

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
//     setErrors(prev => ({ ...prev, [name]: null }));
//   }

//   function validateAll() {
//     const e = {};
//     if (!validName(form.name)) e.name = 'Please enter a valid name (letters, spaces, hyphens, apostrophes).';
//     if (!validEmail(form.email)) e.email = 'Please enter a valid email address.';
//     if (!validSubject(form.subject)) e.subject = 'Subject should contain letters only.';
//     if (!validMessage(form.message)) e.message = 'Message required and must not contain < or >.';
//     if (!form.consent) e.consent = 'You must consent to be contacted.';
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus(null);

//     if (!validateAll()) {
//       setStatus({ type: 'error', text: 'Please fix errors before submitting.' });
//       return;
//     }

//     // prepare sanitized payload (escape HTML characters)
//     const payload = {
//       name: escapeHtml(form.name),
//       email: escapeHtml(form.email),
//       subject: escapeHtml(form.subject),
//       message: escapeHtml(form.message),
//       consent: form.consent
//     };

//     try {
//       const res = await fetch(`${API_BASE}/api/messages`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         setStatus({ type: 'error', text: data?.error || 'Failed to submit message.' });
//         return;
//       }

//       // success: clear local draft & form
//       localStorage.removeItem(DRAFT_KEY);
//       setForm({ name: '', email: '', subject: '', message: '', consent: false });
//       setErrors({});
//       setStatus({ type: 'success', text: 'Message submitted. Thank you!' });
//     } catch (err) {
//       console.error(err);
//       setStatus({ type: 'error', text: 'Network/server error while submitting.' });
//     }
//   }

//   return (
//     <div style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
//       <h2>Contact</h2>

//       <form onSubmit={handleSubmit} noValidate>
//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Name
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               style={{ display: 'block', width: '100%', padding: 8 }}
//             />
//           </label>
//           {errors.name && <div style={{ color: 'crimson', fontSize: 13 }}>{errors.name}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Email
//             <input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               style={{ display: 'block', width: '100%', padding: 8 }}
//             />
//           </label>
//           {errors.email && <div style={{ color: 'crimson', fontSize: 13 }}>{errors.email}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Subject
//             <input
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               placeholder="Subject"
//               style={{ display: 'block', width: '100%', padding: 8 }}
//             />
//           </label>
//           {errors.subject && <div style={{ color: 'crimson', fontSize: 13 }}>{errors.subject}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Message
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Write your message (no HTML characters allowed)"
//               style={{ display: 'block', width: '100%', padding: 8, minHeight: 120 }}
//             />
//           </label>
//           {errors.message && <div style={{ color: 'crimson', fontSize: 13 }}>{errors.message}</div>}
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//             <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange} />
//             <span>
//               I consent to be contacted using the information provided and consent to secure storage of my data.
//             </span>
//           </label>
//           {errors.consent && <div style={{ color: 'crimson', fontSize: 13 }}>{errors.consent}</div>}
//         </div>

//         <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
//           <button type="submit">Submit</button>
//           <button
//             type="button"
//             onClick={() => {
//               localStorage.removeItem(DRAFT_KEY);
//               setStatus({ type: 'saved', text: 'Draft cleared.' });
//             }}
//           >
//             Clear Draft
//           </button>
//           {status && <div style={{ color: status.type === 'error' ? 'crimson' : 'green' }}>{status.text}</div>}
//         </div>
//       </form>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import { escapeHtml } from '../Utils/sanitize.js';

const DRAFT_KEY = 'contact_draft_v1';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

function validName(name) {
  return /^[\p{L}\s'\-]+$/u.test(name.trim()) && name.trim().length > 0 && name.trim().length <= 100;
}
function validSubject(subject) {
  return /^[\p{L}\s]+$/u.test(subject.trim()) && subject.trim().length > 0 && subject.trim().length <= 100;
}
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function validMessage(message) {
  return message.trim().length > 0 && message.trim().length <= 2000 && !(/[<>]/.test(message));
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setForm(prev => ({ ...prev, ...JSON.parse(raw) }));
    } catch (err) {
      console.warn('Failed to parse draft', err);
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      const { consent, ...toSave } = form;
      localStorage.setItem(DRAFT_KEY, JSON.stringify(toSave));
      setStatus({ type: 'saved', text: 'Draft saved locally.' });
    }, 600);
    return () => clearTimeout(id);
  }, [form]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  }

  function validateAll() {
    const e = {};
    if (!validName(form.name)) e.name = 'Please enter a valid name (letters, spaces, hyphens, apostrophes).';
    if (!validEmail(form.email)) e.email = 'Please enter a valid email address.';
    if (!validSubject(form.subject)) e.subject = 'Subject should contain letters only.';
    if (!validMessage(form.message)) e.message = 'Message required and must not contain < or >.';
    if (!form.consent) e.consent = 'You must consent to be contacted.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!validateAll()) {
      setStatus({ type: 'error', text: 'Please fix errors before submitting.' });
      return;
    }

    const payload = {
      name: escapeHtml(form.name),
      email: escapeHtml(form.email),
      subject: escapeHtml(form.subject),
      message: escapeHtml(form.message),
      consent: form.consent
    };

    try {
      const res = await fetch(`${API_BASE}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit message.');

      localStorage.removeItem(DRAFT_KEY);
      setForm({ name: '', email: '', subject: '', message: '', consent: false });
      setErrors({});
      setStatus({ type: 'success', text: 'Message submitted. Thank you!' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Network/server error while submitting.' });
    }
  }

  return (
    <div className="contact-container">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </label>

        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </label>

        <label>
          Subject
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
          {errors.subject && <div className="error-text">{errors.subject}</div>}
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message (no HTML characters allowed)" />
          {errors.message && <div className="error-text">{errors.message}</div>}
        </label>

        {/* Corrected consent checkbox */}
        <label className="consent-label">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
          <span className="consent-text">
            I consent to be contacted using the information provided and consent to secure storage of my data.
          </span>
        </label>
        {errors.consent && <div className="error-text">{errors.consent}</div>}

        <div style={{ marginTop: 16 }}>
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem(DRAFT_KEY);
              setStatus({ type: 'saved', text: 'Draft cleared.' });
            }}
          >
            Clear Draft
          </button>
        </div>

        {status && (
          <div
            className="status-text"
            style={{ color: status.type === 'error' ? 'crimson' : 'green', marginTop: 10 }}
          >
            {status.text}
          </div>
        )}
      </form>
    </div>
  );
}
