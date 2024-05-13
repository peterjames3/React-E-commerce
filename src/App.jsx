import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnimatedRoute from './Components/AnimatedRoute';
import Spinner from './Components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Navbar />
              <AnimatedRoute />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
