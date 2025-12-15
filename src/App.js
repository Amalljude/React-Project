import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { mycontext } from './components/Context';
import { useState } from 'react';
import User from './components/User';
import { products } from './components/List';
import UserDash from './components/UserDash';
import Register from './components/Register';
import About from './components/About';
import Liked from './components/Liked';
import Cart from './components/Cart';
import Admin from './components/Admin'; 
import Adminview from './components/Adminview';


function App() {
  const [user,setUser] = useState([])
  const [product,setproduct]=useState(products)
  const [like, setlike] = useState([]);
  const [cart, setcart] = useState([]);

  return (
    <div >

      <mycontext.Provider value={{user,setUser,product,setproduct,like,setlike,cart,setcart}}>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home/>}></Route>
           <Route path='head' element={<Header/>}></Route>
           <Route path='foot' element={<Footer/>}></Route>
             <Route path='reg' element={<User/>}></Route>
              <Route path='newuser' element={<UserDash/>}></Route>
              <Route path='regis' element={<Register/>}></Route>
              <Route path='about' element={<About/>}></Route>
               <Route path='like' element={<Liked/>}></Route>
                 <Route path='add' element={<Cart/>}></Route> 
                 <Route path='adminlog' element={<Admin/>}></Route>
                 <Route path='adminview' element={<Adminview/>}></Route>

             


        </Routes>
      </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
}

export default App;