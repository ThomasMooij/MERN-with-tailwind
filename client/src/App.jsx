import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Player from './pages/Player';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/player' element={<Player />}>
        <Route path='/player' element={<Player />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
