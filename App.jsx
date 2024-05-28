import "./App.css";
import Navigation from "./components/Navigation";
import RoomList from "./pages/ViewRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookings from "./pages/ViewBooking";
import BookingForm from "./pages/AddBooking";
import UpdateBookingForm from "./pages/UpdateBooking";
import { IoLogoSnapchat } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Line from "./components/Line";
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navigation />
        <Line />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route exact path="/home" element={<RoomList />} />

          <Route path="/view" element={<Bookings />} />
          <Route path="/add" element={<BookingForm />} />
          <Route path="/update" element={<UpdateBookingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
const Login=()=>{
  const hand_login=()=>{

  }
  return (
    
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className='login'>
            <div style={{textAlign:"center",marginBottom:"27px"}}>
            <IoLogoSnapchat size={40} style={{marginBottom:"0px"}}/>
                <h3>Welcome back!</h3>
            </div>
            <p>Username</p>
            <input id='1'/>
            <p>
            Password
            </p>
            <input id='2'/>
            <br/>
            <Link to="/Home" >
            <button className='login-button' onClick={(e)=>{hand_login()}}>Login</button>
            </Link>
            <p>Don't have an account?<a href='/room'>  Sign in</a></p>

        </div>

    </div>

  )
}