import React, { useState } from 'react';
import { SendIcon } from './Icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message here..."
        className="flex-1 w-full px-5 py-3.5 text-sm bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent disabled:opacity-50 text-slate-800 placeholder:text-gray-500 pr-14 shadow-sm transition-all duration-200"
        disabled={isLoading}
        aria-label="Chat input"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className={`absolute right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
          isLoading || !inputValue.trim() 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-red-600 hover:bg-red-100 hover:text-red-700'
        } focus:outline-none focus:ring-2 focus:ring-red-300`}
        aria-label="Send message"
      >
        <SendIcon />
      </button>
    </form>
  );
};

export default ChatInput;