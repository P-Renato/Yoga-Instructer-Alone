import React from 'react'
import "./App.css";
import Header from "./Header";
import AboutMe from './pages/AboutMe';
import Schedule from './pages/Schedule';
import Blog from './pages/Blog';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <Schedule />
      <Blog />
    </>
  );
}

export default App;
