import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Main from './components/Main';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;