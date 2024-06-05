import './App.css';
import {BrowserRouter,  Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.js'
import Product from './pages/Product.js'

function App() {
  return (
    <>
      
<BrowserRouter>
<div style={{width:'400px'}}>
  <nav>
    Studytonight
  </nav>
<div className='flex-apart'>
  <Link to='/'>Home</Link>
  <Link to='/product/computer'>Computer</Link>
  <Link to='/product/desk'>Desk</Link>
  <Link to='/product/gadgets'>Gadgets</Link>
  <Link to='/product/tshirt'>T-Shirts</Link>
</div>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/product/:category' element={<Product/>}></Route>

</Routes>

</div>



</BrowserRouter>

    </>
  );
}

export default App;
