import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe'
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import NotFound from './Components/NotFound/NotFound';
import Signin from './Components/Login/Signin';
import Blog from './Components/Blog/Blog';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/wildphoto/:photoid' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

  );
}

export default App;
