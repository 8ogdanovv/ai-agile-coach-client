// App.jsx
import Chat from './components/Chat/Chat';
import ChatList from './components/ChatList/ChatList';
import './App.css';

function App() {
  return (
    <div id="app">
      <ChatList />
      <Chat />
    </div>
  );
}

export default App;
