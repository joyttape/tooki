import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import AnimalList from './paginas/AnimalList';
import AnimalDetail from './paginas/AnimalDetail';
import Login from './paginas/Login';
import Register from './paginas/Register';
import AnimalForm from './paginas/AnimalForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<AnimalList />} />
        <Route path="/animais/:id" element={<AnimalDetail />} /> {/* Rota com parâmetro ID */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cadastrar-animal" element={<AnimalForm />} />
      </Routes>
    </Router>
  );
};

export default App;