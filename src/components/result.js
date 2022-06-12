import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGateway } from "../services/authorizationService";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    let params = new URL(document.location).searchParams;
    let location = params.get("location");
    const res = await apiGateway.get(`/stations/`, { params: { location } });
    if (res.status === 200) {
      setResults(res.data);
    }
  };

  const token = localStorage.getItem("token");
  return (
    <div>
      <div class="about">
        <div class="container">
          <div>
            <body class="main-layout inner_posituong computer_page">
              <div>
                {/* <div class="loader_bg">
                  <div class="loader">
                    <img src="./assets/images/loading.gif" alt="#" />
                  </div>
                </div> */}

                {/* <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div> */}

                {results?.length ? (
                  results.map((item) => (
                    <>
                      <br />
                      <div class="card">
                        <h3 class="card-header">
                          <b>{item?.name}</b>
                        </h3>
                        <div class="card-body ">
                          <h5 class="card-title">
                            <b>CHARGER TYPE:</b>
                            {item?.charger_type}
                          </h5>
                          <h5 class="text-left">
                            <b>PRICE/HOUR :</b> ₹{item?.price}
                          </h5>
                          <h5 class="card-text">
                            <b>POWER : </b>
                            {item?.kilowatt}kW
                          </h5>
                          <h5 class="card-text">
                            <b>ADDRESS: </b>
                            {item?.address}
                          </h5>
                          <h5 class="card-text">
                            <b>CONTACT NUM : </b>
                            {item?.phone_no}
                          </h5>
                          <div class="text-right">
                            <Link
                              to={
                                token
                                  ? `/book?id=${item?.id}&price=${item?.price}&charger_type=${item?.charger_type}&phone_no=${item?.phone_no}`
                                  : "/login"
                              }
                              class="btn btn-primary"
                            >
                              {" "}
                              Book Slot
                            </Link>
                          </div>
                        </div>
                      </div>
                      <br />
                    </>
                  ))
                ) : (
                  <div class="card">
                    <h3 class="card-header">
                      <b>Sorry. No Stations Found</b>
                    </h3>
                  </div>
                )}
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
