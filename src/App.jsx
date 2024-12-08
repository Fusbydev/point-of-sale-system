import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Login from './pages/login';
import Homepage from './pages/homepage';
import Register from './pages/register';
import Products from './pages/products';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setAuthenticated(true);  
    }
  }, []);

  return (
    <div className="container-fluid App">
      <div className="row">
        <div className="col-12 p-0">
          <Router>
            <Routes>
              {/* Login Route */}
              <Route path="/" element={<Login />} />

              {/* Register Route */}
              <Route path="/register" element={<Register />} />
              
              {/* Protected Homepage Route */}
              <Route
                path="/home"
                element={true ? <Homepage /> : <Navigate to="/" />}
              />
              <Route
                path="/products"
                element={true ? <Products /> : <Navigate to="/" />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
