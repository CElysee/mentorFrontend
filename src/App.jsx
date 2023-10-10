import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
