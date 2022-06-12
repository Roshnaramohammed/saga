import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Aboutus from './components/aboutus';
import Header from './components/header';
import Search from './components/search';
import Result from './components/result';
import {SignUp,Copyrightt} from './components/signup';
import {SignIn,Copyright} from './components/login';
import Addstation2 from './components/addstation2';
import Footer from './components/footer';
import Book from './components/book';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom';
import Profile2 from './components/profile2';


function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/addstation2" element={<Addstation2 />} />
          <Route exact path="/res" element={<Result/>} />
          <Route exact path="/book" element={<Book />} />
          <Route exact path="/profile" element={<Profile2 />} />
          
          

          
          {/* <Computer/> */}
          {/* <Product/> */}
          {/* <Search />
          <Result /> */}
        </Routes>
        <Footer/>
      </Router> 
        
        
      
    </div>
  );
}

export default App;
