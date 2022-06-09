import React from 'react';

function Addstation() {
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
                     <h2>Add Station</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-3">
                        <h1 class="display-5"> Name </h1>
                        </div>
                        <div class="col-md-9">
                           <input class="contactus" type="type" name="Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Charging station name" type="type" name="Charging station name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Charging station location" type="type" name="Charging staion location"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Address" type="type" name="Address"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Contact Number" type="type" name="Contact number"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Supplier" type="type" name="supplier"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Kw" type="type" name="kw"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Charge Point Type" type="type" name="charge point type"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Price/Hour" type="type" name="price"/> 
                        </div>
                    
                        <div class="col-md-12">
                           <button class="send_btn">Send</button>
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
export default Addstation;
