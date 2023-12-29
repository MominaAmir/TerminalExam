import './App.css';
import {useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Button from './Components/Button';
import Category from './Components/Category';
import { slice } from './Slice/createSlice';

function App() {
  const state = useSelector((state) => state);
  
  console.log('State',state);
  if(state.slice.isLoading){
    return <h1>Lodding....</h1>
  }
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="button" element={<Button/>}/>
      <Route path="category" element={<Category/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
