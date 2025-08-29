import { useState, useRef, useEffect } from 'react'
import viteLogo from '/coffee-cup.png'
import TwitchWebSocket from './components/TwitchWebSocket';
import './App.css'

function App() {
  // const keepaliveTimeoutRef = useRef(null);
  const [sessionId, setSessionId] = useState('');
  // useRef for persistence across re-renders and so event handlers can keep a stable reference.
  const wsRef = useRef<TwitchWebSocket>(
    new TwitchWebSocket(setSessionId)
  );
  

  // Note: When Strict Mode is on, React will also run one extra
  // setup+cleanup cycle in development for every Effect. 
  useEffect( () => {
    wsRef.current.connect();

    // Cleanup.
    return () => {
      wsRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
