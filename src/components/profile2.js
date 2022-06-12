import React, { useEffect, useState } from "react";
import { apiGateway } from "../services/authorizationService";
import ProBook from "./profile2mybooking";
import ProOther from "./profile2other";

function Profile2() {
  useEffect(() => {
    getBookingDetails();
    getOtherBookingDetails();
  }, []);

  const getBookingDetails = async () => {
    try {
      const res = await apiGateway.get(`/bookings/`);
      if (res.status === 200) {
        setMyBookings(res.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const getOtherBookingDetails = async () => {
    try {
      const res = await apiGateway.get(`/stations/`);
      if (res.status === 200) {
        setOtherBookings(res.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const [myBookings, setMyBookings] = useState([]);
  const [otherBookings, setOtherBookings] = useState([]);
  return (
    <div>
      <body class="main-layout inner_posituong contact_page">
        {/* <div class="loader_bg">
          <div class="loader">
            <img src="./assets/images/loading.gif" alt="#" />
          </div>
        </div> */}
        <div class="about">
          <div class="container text-center">
            <h1 class="display-4">Booking details</h1>
            <br />
            <button type="submit" class="btn btn-secondary">
              MY Bookings
            </button>{" "}
            &nbsp;
            <button type="submit" class="btn btn-secondary">
              Other Bookings
            </button>{" "}
            <br />
            <br />
            <ProBook data={myBookings} />
            <br />
            <br />
            <ProOther data={otherBookings} />
          </div>
        </div>
      </body>
    </div>
  );
}
export default Profile2;
