import React, { useState } from 'react';
import { VscSend } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../app/features/messagesSlice';
import { setLoading } from '../../app/features/msgLoaderSlice';
import axios from 'axios';
import { BASEURL } from '../../constants';
import {toast } from 'react-toastify';



const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const doc = useSelector((state) => state.document.doc);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      setMessage('');
      dispatch(addMessage({ text: message, sender: 'me' }));
      dispatch(setLoading(true));
      try{
        
        const url =  `${BASEURL}/chat_message/get_answer/${doc.id}`;
        const response = await axios.post(url, { question : message });
        dispatch(addMessage({ text: response.data, sender: 'AI' }));
        dispatch(setLoading(false));
      }
      catch(err){
        setMessage('');
        dispatch(setLoading(false));
        toast.error("Error generating response.The error can be in processing the file. Please try again.");
        console.log(err);
      }
     
    }
  };

  return (
    <div className="flex items-center border-t border-gray-300 px-4 py-2">
    <div className="flex-grow relative">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        placeholder="Send your message..."
        className="w-full border border-gray-400 rounded-l-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      <div
        onClick={handleSendMessage}
        className="absolute inset-y-0 right-0 flex items-center justify-center px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-200"
      >
        <VscSend />
      </div>
    </div>
  </div>

  );
};

export default ChatInput;
