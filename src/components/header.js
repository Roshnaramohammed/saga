import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link,} from "react-router-dom";

// import Home from './home';
// import Contact from './contact';
// import Computer from './computer';
// import Aboutus from './aboutus';
// import Header from './components/header';
// import Laptop from './laptop';
// import Product from './product';

function Header () {
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
                                 <a class="nav-link" href="home">Home</a>
                              </li>

                              <li class="nav-item">
                                 <a class="nav-link" href="about">Aboutus</a>
                              </li>

                              <li>                               
                                 <a class="nav-link" href="contact">Contact Us</a>
                              </li>
                              
                              <li class="nav-item d_none">
                              {/* <button type="button" class="btn btn-light btn-sm">Small button</button> */}

 
                                 {/* <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a> */}
                              </li>

                              <li class="nav-item d_none">
                              <button type="button" class="btn btn-secondary btn-sm"  href="signup"><a class="nav-link" href="signup">Sign-Up</a></button>
                              </li> 
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              {/* <li class="nav-item d_none">
                                 <a class="nav-link" href="#"></a>
                              </li> */}
                              
                              <li class="nav-item d_none">
                              <button type="button" class="btn btn-dark btn-sm"  href="login"><a class="nav-link" href="login">Sign-In</a></button>
                              </li>

                            
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
      