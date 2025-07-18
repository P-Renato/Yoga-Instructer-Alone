import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from './components/Homepage/MainPage';
import BlogContent from './pages/BlogContent';
import ErrorPage from './pages/ErrorPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} errorElement={<ErrorPage />} />
        <Route path='blog-content/:id' element={<BlogContent/>}>
          {/* <Route path='/:id' element={<BlogContent />}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
