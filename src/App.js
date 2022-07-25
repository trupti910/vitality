import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Business from './Components/Business';
import Home from './Components/Home';
import Personal from './Components/Personal';
import Accounts from './Components/Accounts';
import Cards from './Components/Cards';
import Loans from './Components/Loans';
import Invests from './Components/Invests';
import Insurance from './Components/Insurance';
import Pay from './Components/Pay';
import Help from './Components/Help';
import Header from './Components/Header';
import Offers from './Components/Offers';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/personal' element={<Personal/>}/>
      <Route path='/accounts' element={<Accounts/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/loans' element={<Loans/>}/>
      <Route path='/invests' element={<Invests/>}/>
      <Route path='/insurance' element={<Insurance/>}/>
      <Route path='/pay' element={<Pay/>}/>
      <Route path='/offer' element={<Offers/>}/>
      <Route path='/help' element={<Help/>}/>
    </Routes>
    </>
  )
}

export default App
