import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
import { InfinitySpin } from 'react-loader-spinner'; // Importing the loader

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate the loader being visible for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Hide the loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);  // Clean up the timer on component unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
