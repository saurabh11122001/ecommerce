import Home from './Components/Home';
import Navbar from './Components/Navbar';
import image from './Assests/home-new-bg-free-img.jpg'
import image2 from './Assests/banner-04.jpg'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'
import About from './Components/About';
import LastPart from './Components/LastPart';
import { AboutUs as About2 } from './Components/AboutUs';
import { useContext } from 'react';
import MyContext from './Context/Context';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Cart from './Components/Cart';


function App() {

  const context=useContext(MyContext)
  let {AboutUs,profile,login,cart}=context;
  return (
    <>
      <div className="wrapper-div max-sm:w-screen max-sm:overscroll-y-auto max-sm:h-screen bg-black min-h-screen xl:w-screen ">
        <div className="main-img relative h-screen max-sm:w-full max-sm:my-10   max-sm:h-96 w-screen max-sm:bg-center bg-cover  " style={{ backgroundImage: `url(${AboutUs?image2:image})` }}>
        </div>
        <div className= {`absolute inside-main max-sm:w-full ${profile || login || cart ?'xl:overflow-hidden bg-opacity-70':'xl:overflow-y-auto'} w-full bg-black h-full bg-opacity-40 top-0`}>
          <div className="relative navbar-home w-full h-full max-sm:h-3/6">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/'element={<Home/>}></Route>
              <Route path='/about'element={<About2/>}></Route>
            </Routes>
            {profile?<Profile/>:''}
            {login?<Login/>:''}
            {cart?<Cart/>:''}
            <About />
            <LastPart/>
          </Router>
          </div>
        </div> 
        
      </div>
    </>
  );
}

export default App;
