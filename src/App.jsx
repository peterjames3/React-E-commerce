import  { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnimatedRoute from "./Components/AnimatedRoute";
import Spinner from "./Components/Spinner";
import UserProvider from "./context/UserAuthContext";
import {
  QueryClient,
  QueryClientProvider
  
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <UserProvider>
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
        </UserProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
