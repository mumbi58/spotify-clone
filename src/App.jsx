import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "./login/login";
import Signup from "./signup/signup";
import Hero from './Hero/hero';
const App = () => {
  return ( 
    <div>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
           <Route path='/' element={<Hero />}/>          
        </Routes>
      </Router>
      
      <h1></h1>
    </div>
   );
}
 
export default App;