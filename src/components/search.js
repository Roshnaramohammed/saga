import React from 'react';

function Search() {
    return (
      <div>
          <body class="main-layout inner_posituong contact_page">
      <div class="loader_bg">
         <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
      </div>

      <div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Enter your location</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Search by location" type="type" name="Name"/> 
                        </div>
                        
                        <div class="col-md-12">
                           <button class="send_btn"><a href="res">Search </a></button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
        </body>
        </div>
    );
  }
export default Search;
