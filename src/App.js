import logo from './logo.svg';
import './App.css';
import Product from './Components/Products/Product';
import SingleProduct from './Components/Products/SingleProduct';
import Error from './Components/Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
