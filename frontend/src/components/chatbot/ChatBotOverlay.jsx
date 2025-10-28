import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Chatbot from './Chatbot';
import { ChatIcon, CloseIcon } from './Icons';

export default function ChatbotOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>      
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open chat"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1500,
          width: 64,
          height: 64,
          borderRadius: 999,
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4), 0 4px 6px rgba(0,0,0,0.1)',
          padding: 0,
          transition: 'all 0.3s ease',
          border: '2px solid white'
        }}
        className="hover:scale-105 hover:shadow-lg transform duration-200"
      >
        <ChatIcon />
      </button>

      {open && createPortal(
        <div
          style={{
            position: 'fixed',
            right: 24,
            bottom: 100,
            zIndex: 1500,
            transition: 'all 0.3s ease',
          }}
        >
          <Chatbot onClose={() => setOpen(false)} />
        </div>,
        document.body
      )}
    </>
  );
}