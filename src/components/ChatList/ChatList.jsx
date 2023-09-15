import handShake from '../../assets/heart-handshake_24x24.svg';
import './ChatList.css';

function ChatList() {
  return (
    <div className='chatList'>
      <h1 className='title'>Agile</h1>

      <ul>
        <li>
          <img src={handShake} alt="handShake" />
          <a href="">AI Agile Coach</a>
        </li>
      </ul>
    </div>
  )
}

export default ChatList