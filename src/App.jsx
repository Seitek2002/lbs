import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import ProfileUser from './pages/Profile/ProfileUser';
import Orders from './pages/Orders/Orders';
import CompanyProfile from './pages/Profile/CompanyProfile';
import Location from './pages/Location/Location';   
import Chat from './pages/Chat/Chat';   


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-driver" element={<Profile />}/>
        <Route path="/profile-user" element={<ProfileUser />}/>
        <Route path="/company" element={<CompanyProfile/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </>
  )
}

export default App
