import React from 'react'

function Footer() {
  return (
        <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     {/* <img class="logo1" src="./assets/images/logo1.png" alt="#"/> */}
                     <ul class="social_icon">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                     <h3>About Us</h3>
                     <ul class="about_us">
                        <li>This project was carried out with the aim of developing a Web Application to connect electric motor 
                        vehicle owner with Charging Station owner for the hassle-free usage of electric motor vehicles</li>                    </ul>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6">
                     <h3>Contact Us</h3>
                     <ul class="conta">
                     <li>Dept. Computer Science<br/> School of Engineering And Technology<br/> Pondicherry University <br/>Pondicherry </li>
                     </ul>
                  </div>
                  {/* <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <form class="bottom_form">
                        <h3>Message to us</h3>
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                  </div> */}
               </div>
            </div>
            <hr></hr>
         </div>
      </footer>
    
  );
}

export default Footer