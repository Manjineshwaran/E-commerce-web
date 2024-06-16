import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Logdetails from './Logdetails';
import Signup from './Signup';
import {BrowserRouter, Routers, Route, Routes} from 'react-router-dom'
import Home from './home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
     {/* <Login/> */}
    </BrowserRouter>
  );
}

export default App;
