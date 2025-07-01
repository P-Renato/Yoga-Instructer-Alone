import React from 'react'
import "./App.css";
import Header from "./Header";
import AboutMe from './AboutMe';
import Schedule from './Schedule';
import Blog from './Blog';

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
