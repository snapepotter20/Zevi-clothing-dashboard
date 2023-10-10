import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import Dashboard from './Components/Dashboard';

function App() {
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;