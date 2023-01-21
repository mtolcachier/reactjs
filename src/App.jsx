import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Error from './components/Error/Error';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';

function App() {  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Field Hockey Store' />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item-detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartWidget/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
