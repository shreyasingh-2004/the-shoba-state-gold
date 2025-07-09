import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TopNavigation from './component/TopNavigation';
import Homepage from './component/Homepage';
import Footer from './component/Footer';
import Room from './component/Room';
import Dining from './component/Dining';
import Gallery from './component/Gallery';
import Booking from './component/Booking';
import Contact from './component/Contact';
import { useEffect } from 'react';

// Move ScrollToTop INSIDE BrowserRouter
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop /> {/* Now correctly nested under BrowserRouter */}
        <TopNavigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/room' element={<Room />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;