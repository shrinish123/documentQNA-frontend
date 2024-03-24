import React from 'react';
import ChatInput from './ChatInput';
import Messages from './ChatMessage';
import { useSelector } from 'react-redux';

const Chat = () => {
  

  const messages = useSelector((state) => state.messages.messages);

  return (
    <div className="fixed bottom-0 left-0 right-0 px-4 py-2">
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex-1 py-4 px-6">
        <Messages messages={messages} />
      </div>
      <div className="border-t border-gray-300">
        <ChatInput/>
      </div>
    </div>
  </div>

  );
};

export default Chat;
