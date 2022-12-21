import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartWidget/>} />
      </Routes>
    </Router>
  );
}

export default App;
