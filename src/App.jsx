import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './pages/login';
import Homepage from './pages/homepage';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setAuthenticated(true);
    }
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Router>
            <Routes>
              {/* Login Route */}
              <Route path="/" element={<Login/>} />
              
              {/* Protected Homepage Route */}
              <Route
                path="/home"
                element={isAuthenticated ? <Homepage /> : <Navigate to="/" />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
