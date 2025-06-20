
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import TopNavigation from './component/TopNavigation';
import Home from './component/home';
import Footer from './component/Footer';
// import Room from './component/Room';

// import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNavigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/room' element={<Room/>}/> */}
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
