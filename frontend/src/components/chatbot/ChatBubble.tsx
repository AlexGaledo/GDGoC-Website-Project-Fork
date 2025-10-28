import React from 'react';
import { Sender } from './types.ts';
import type { Message } from './types.ts';

interface ChatBubbleProps {
  message: Message;
  avatar: React.ReactNode;
  isTyping?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, avatar, isTyping = false }) => {
  const isUser = message.sender === Sender.User;

  const bubbleClasses = isUser
    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl rounded-br-none'
    : 'bg-white text-slate-800 border border-gray-200 rounded-2xl rounded-bl-none shadow-sm';

  const typingAnimation = (
    <div className="flex items-center gap-1.5 py-1">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-0"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
    </div>
  );

  return (
    <div className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'} mb-3`}>
       <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 flex items-center justify-center">
          {React.cloneElement(avatar as React.ReactElement, { 
            className: "w-full h-full object-cover " + (avatar as React.ReactElement).props.className 
          })}
        </div>
      <div
        className={`max-w-[75%] px-3.5 py-2.5 transition-all duration-300 ${bubbleClasses} min-h-[36px] flex items-center`}
      >
        {isTyping ? typingAnimation : <p className="text-sm whitespace-pre-wrap m-0 leading-relaxed">{message.text}</p>}
      </div>
    </div>
  );
};

export default ChatBubble;