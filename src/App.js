import { useEffect, useState } from 'react';
import './App.css';
import PulseLoader from 'react-spinners/PulseLoader';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='start-image'>
      {loading ? (
        <div
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
          }}
        >
          <PulseLoader color={'white'} loading={loading} size={10} />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path='/' exact element={<Start />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
