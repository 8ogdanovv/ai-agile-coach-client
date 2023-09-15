import Message from "./Message/Message";
import './Messages.css';

function Messages() {
  return (
    <ul className="messages">
      {/* <Message author={'ai'} /> */}
      {/* <Message author={'client'} /> */}
      <Message author={'ai'} />
      <Message author={'client'} />
    </ul>
  )
}

export default Messages