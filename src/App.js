
import './App.css';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import TopNavigation from './component/TopNavigation';
import Home from './component/home';
import Footer from './component/Footer';
import Room from './component/Room';
import Dining from './component/Dining';
import Gallery from './component/Gallery';
import Booking from './component/Booking';

// import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNavigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room' element={<Room/>}/>
        <Route path='/dining' element={<Dining/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/booking' element={<Booking/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
