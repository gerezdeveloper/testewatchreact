import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logada from './components/Logada';
import LoginScreen from './components/LoginScreen';
import MenuBuscas from './components/MenuBuscas';
import Profile from './components/Profiles'
import TitleConteudo from './components/TitleConteudo';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/home' element={<Logada />} />
      <Route path='/title' element={<TitleConteudo />} />
      <Route path='/buscas' element={<MenuBuscas />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;