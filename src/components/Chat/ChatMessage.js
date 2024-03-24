import React , {useEffect,useRef} from 'react';
import AIProfile from '../../assets/profile_pic.png';


const Messages = ({ messages }) => {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  return (
    <div className="flex flex-col gap-2" style={{ maxHeight: "75vh", overflowY: "auto" }}>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-center`}
        >
          {msg.sender === 'AI' ? (
            <img src={AIProfile} alt="AI" className="rounded-full w-8 h-8 mr-2" />
          ) : (
            <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              {/* Your avatar */}
              S
            </div>
          )}
          <div className={`max-w-lg px-4 py-2 rounded-lg ${msg.sender === 'AI' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
