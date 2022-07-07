import './App.css';
import Navigation from './Components/NavBar/Navigation';
import Mainpage from './Components/HomePage/Mainpage';
import DisplayPage from './Components/DisplayPage/DisplayPage';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Checkout from './Components/Checkout/Checkout';
import CartContextProvider from './Components/CartContext';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Components/Login/Login';
import CreateAccount from './Components/Login/CreateAccount'

function App() {

  return (

    <Router>
    <div className="App">
    <CartContextProvider >
       <Navigation/>
      
        <Routes>
      < Route path='/' element={<Mainpage/>} />  
      < Route path='display' element={ <DisplayPage/>}/>
      <Route path='order/:id' element ={<PlaceOrder/>}/>
      <Route path='checkout' element={<Checkout/> } />
      <Route path='/login' element={<Login/> } />
      <Route path='/createaccount' element={<CreateAccount/> } />
        </Routes>
        </CartContextProvider >
    </div>
    </Router>

  );
}
//2.30.39

export default App;
