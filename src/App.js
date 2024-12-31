import logo from './logo.svg';
import './App.css';
import MealPage from './Componets/MealPage';
import { Route,Routes } from 'react-router-dom';
import Mealnfo from './Componets/Mealnfo';

function App() {
  return (
  //   <MealPage/> 
     <Routes>
      <Route path='/' element={<MealPage/>}/>
      <Route path='/:mealid' element={<Mealnfo/>}/>
     </Routes>
  );
}

export default App;
