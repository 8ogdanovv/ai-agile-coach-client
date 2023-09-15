// Chat.jsx
import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import sendImage from '../../assets/send_32x32.svg';
import AiTyping from './AiTyping/AiTyping';
import Messages from './Messages/Messages';

// Import CSS classes
import './Chat.css';

function Chat() {
  // Your chat logic will go here

  // Example: Define a state variable to control the animation
  const [isTyping, setIsTyping] = useState(false);

  // Example: Function to start the typing animation
  const startTypingAnimation = () => {
    setIsTyping(true);

    // Example: Stop the animation after a delay (3 seconds in this case)
    setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    startTypingAnimation();
  }, [])

  return (
    <div>
      <Paper elevation={3} className="chat-paper">

        <Messages />
        {/* Chat messages will be displayed here */}
        <div className="input-container">
          <div className="input">
            <AiTyping className={`ai-typing ${isTyping ? 'is-typing' : ''}`} />
            <div className="flex">
              <input
                className="text-field"
                placeholder="Ask me anything that I can help you or your team..."
              />
              <button className='button-send'>
                <img src={sendImage} alt="send prompt message" className="send-button" />
              </button>
          </div>
        </div>
          </div>
      </Paper>
    </div>
  );
}

export default Chat;
