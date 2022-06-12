import React  from "react";
import ProBook from './profile2mybooking';
import ProOther from './profile2other';

function Profile2() {

  return (
    <div>
      
      <body class="main-layout inner_posituong contact_page">
        <div class="loader_bg">
          <div class="loader">
            <img src="./assets/images/loading.gif" alt="#" />
          </div>
        </div>
        <div class="about">
          <div class="container text-center">
            <h1 class="display-4">Booking details</h1><br/>

                <button
                  type="submit"
                  class="btn btn-secondary">
                  MY Bookings
                </button> &nbsp;
                <button
                  type="submit"
                  class="btn btn-secondary">
                  Other Bookings
                </button> <br/><br/>
                <ProBook/><br/><br/>
                <ProOther/>
          </div>
        </div>
      </body>
    </div>
  );
}
export default Profile2;
