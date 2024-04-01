import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPlayer from './pages/NewPlayer';
import DeletePlayer from './pages/DeletePlayer';
import EditPlayer from './pages/EditPlayer';
import ShowPlayer from './pages/ShowPlayer';

 const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/players/new' element={<NewPlayer />} />
      <Route path='/players/details/:id' element={<ShowPlayer />} />
      <Route path='/players/edit/:id' element={<EditPlayer />} />
      <Route path='/players/delete/:id' element={<DeletePlayer />} />
      </Routes>
  );
};

export default App;