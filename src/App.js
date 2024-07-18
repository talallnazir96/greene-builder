import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Home from './pages/Home';
import InnerBlog from './pages/InnerBlog';
import {useEffect, userEffect} from "react";

function App() {
  const ScrollTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
  }
  return (
    <Router>
      <ScrollTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/innerblog/:id" element={<InnerBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
