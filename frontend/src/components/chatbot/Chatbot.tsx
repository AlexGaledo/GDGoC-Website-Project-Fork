import React, { useState, useEffect, useRef, useCallback } from 'react';
import { streamChatResponse } from './services/geminiService';
import { BOT_NAME, INITIAL_MESSAGE, FAQ_SUGGESTIONS } from './constants';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import FaqSuggestions from './FaqSuggestions';
import { GooglerAiIcon, UserIcon, CloseIcon } from './Icons';
import { Sender } from './types.ts';
import type { Message } from './types.ts';

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  const handleSendMessage = useCallback(async (text: string) => {
    if (isLoading || !text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: Sender.User,
    };
    
    const botMessageId = `bot-${Date.now()}`;
    const placeholderMessage: Message = {
      id: botMessageId,
      text: '',
      sender: Sender.Bot,
    };

    setMessages(prev => [...prev, userMessage, placeholderMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const stream = streamChatResponse(text);
      let fullResponse = '';
      
      for await (const chunkText of stream) {
        fullResponse += chunkText || '';
      }

      // This removes all asterisks from the response, cleaning up markdown formatting.
      const cleanedResponse = fullResponse.replace(/\*/g, '');

      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId ? { ...msg, text: cleanedResponse } : msg
        )
      );

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setError(errorMessage);
        const errorMessageObject: Message = {
            id: `error-${Date.now()}`,
            text: `Sorry, something went wrong: ${errorMessage}`,
            sender: Sender.Bot,
        };
        setMessages(prev => {
            const newMessages = prev.filter(msg => msg.id !== botMessageId);
            return [...newMessages, errorMessageObject];
        });
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
 
  return (
    
    <div className="w-80 sm:w-96 h-[60vh] max-h-[700px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <header className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2.5 flex items-center justify-between gap-4 shadow-md flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            <GooglerAiIcon className="w-full h-full object-cover" />
          </div>
          <h2 className="text-sm font-medium">{BOT_NAME}</h2>
        </div>
        <button 
          onClick={onClose} 
          className="text-white hover:bg-white/30 rounded-full p-1.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </header>
      <div className="flex-1 p-3 overflow-y-auto bg-gray-50 custom-scrollbar">
        <div className="flex flex-col gap-2.5">
          {messages.map((message, index) => (
            <ChatBubble
              key={message.id}
              message={message}
              avatar={message.sender === Sender.User ? <UserIcon /> : <GooglerAiIcon className="object-cover" />}
              isTyping={
                isLoading &&
                index === messages.length - 1 &&
                message.sender === Sender.Bot &&
                !message.text
              }
            />
          ))}
          {messages.length === 1 && (
            <FaqSuggestions
              suggestions={FAQ_SUGGESTIONS}
              onSuggestionClick={handleSendMessage}
            />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {error && <p className="p-2 text-xs text-red-600 bg-red-50 border-t border-red-100">{error}</p>}
      <div className="p-3 border-t border-gray-200 bg-white">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Chatbot;