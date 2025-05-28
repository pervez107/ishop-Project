import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShopeHome } from './components/ShopeHome';
import { AdminLogin } from './components/adminlogin';
import { UserLogin } from './components/userlogin';
import { AdminDash } from './components/admin-dashbord';
import { UserRegister } from './components/user-Register';
import { UserDash } from './components/user-dashboard';

function App() {
  return (
    <div className="body-background">
      <div className='bg-shade'>
        <h3 className='text-white text-center p-4 bg-warning'><span className='bi bi-cart4'></span>I-Shop</h3>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShopeHome/>}/>
            <Route path='admin-login' element={<AdminLogin/>} />
            <Route path='user-login' element={<UserLogin/>} />
            <Route path='admin-dash' element={<AdminDash/>}/>
            <Route path='user-register' element={<UserRegister/>} />
            <Route path='user-dash' element={<UserDash/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
