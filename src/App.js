import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe'
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import NotFound from './components/NotFound/NotFound';
import Signin from './components/Login/Signin';
import Blog from './components/Blog/Blog';


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
