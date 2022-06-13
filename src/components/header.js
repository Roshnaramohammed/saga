import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import Home from './home';
// import Contact from './contact';
// import Computer from './computer';
// import Aboutus from './aboutus';
// import Header from './components/header';
// import Laptop from './laptop';
// import Product from './product';
function Header() {
   const navigate = useNavigate();
   
   const token = localStorage.getItem('token')
   const handleLogout= ()=> {
   localStorage.removeItem("token")
   navigate('/login')
   }
   return (
      <div>
         <header>
            <div class="header">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                           <div class="center-desk">
                              {/* <div class="logo">
                              <a href="index.html"><img src="assets/images/logo.png" alt="#" /></a>
                           </div> */}
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <nav class="navigation navbar navbar-expand-md navbar-dark ">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">


                                 <li class="nav-item ">
                                    <Link class="nav-link" to="/home">Home</Link>
                                 </li>

                                 <li class="nav-item">
                                    <Link class="nav-link" to="/about">Aboutus</Link>
                                 </li>

                                 <li>
                                    <Link class="nav-link" to="/contact">Contact Us</Link>
                                 </li>

                                 <li class="nav-item d_none">
                                    {/* <button type="button" class="btn btn-light btn-sm">Small button</button> */}


                                    {/* <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a> */}
                                 </li>

                                 {!token ? (
                                    <>
                                       <li class="nav-item d_none">
                                          <button type="button" class="btn btn-secondary btn-sm" href="signup"><Link class="nav-link" to="/signup">Sign-Up</Link></button>
                                       </li>
                                       {" "}
                                       <li class="nav-item d_none ml-2">
                                          <button type="button" class="btn btn-dark btn-sm" href="login"><Link class="nav-link" to="/login">Sign-In</Link></button>
                                       </li>
                                    </>
                                 ) : (
                                    <> 
                                    
                                    <li class="nav-item d_none">
                                       
                                       <button onClick={handleLogout} type="button" class="btn btn-secondary btn-sm nav-link">Logout</button><br/>
                                    </li><br/><br/>
                                    <li class="nav-item d_none">
                                    <Link class="nav-link" to="/profile"> <AccountCircleIcon 
                                    color="action"
                                    sx={{ fontSize: 30 }}/></Link>
                                    </li>
                                    </>
                                 )}


                              </ul>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </div>


   );
}
export default Header;
