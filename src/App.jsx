import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';
import CompanyProfile from './pages/Profile/CompanyProfile';
import Location from './pages/Location/Location';
import FindCargo from './pages/FindCargo/FindCargo';
import DriverMap from './pages/DriverMap/DriverMap';
import TrackingTruck from './pages/TrackingTruck/TrackingTruck';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/company" element={<CompanyProfile/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/find" element={<FindCargo/>}/>
        <Route path="/GPS" element={<DriverMap/>}/>
        <Route path="/tracking" element={<TrackingTruck/>}/>
      </Routes>
    </>
  )
}

export default App
