import PropTypes from 'prop-types'; // Import PropTypes

import './Message.css';

function Message({ author }) {
  return (
    <div className={`message-wrapper ${author === 'ai' ? 'left'  : 'right'}`}>
      <div className={`message ${author}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi, iusto non accusantium voluptatibus aperiam similique minima voluptatem consequuntur neque error eligendi ad ipsum expedita, reiciendis qui dolorum sint pariatur animi?
      </div>
    </div>
  );
}

// Define PropTypes for the 'author' prop
Message.propTypes = {
  author: PropTypes.string.isRequired, // Adjust the type to match your use case (e.g., string)
};

export default Message;
