import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import BackToTopButton from "./components/backToTopButton";
import { CreatePost } from './pages/create-post/create-post';
import './index.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BackToTopButton />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
