import React, { useEffect, useState } from "react";
import { apiGateway } from "../services/authorizationService";

function Result() {
  const [results, setResults] = useState([
    {
      name: "Priya Electricals",
      type: "CHAdeMo,CCS",
      price: "16",
      power: "25.0",
      address: "cuddalore Pondiherry,SH49,Ariyankuppam,605007",
      contact_number: "09486156156",
    },
    {
      name: "Yogan Charge centre",
      type: "Type2",
      price: "20",
      power: "60.0",
      address:
        "No.77, Gundu Salai, Near 100 Feet Road, Mariamman Nagar, Mudaliarpet, Puducherry, 605004",
      contact_number: "09486156156",
    },
    {
      name: "Test centre",
      type: "Type2",
      price: "20",
      power: "60.0",
      address:
        "No.77, Gundu Salai, Near 100 Feet Road, Mariamman Nagar, Mudaliarpet, Puducherry, 605004",
      contact_number: "09486156156",
    },
  ]);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let location = params.get("location");
    // location api end point
    const res = apiGateway.post(`/api/v1/location`, { location });
    if (res.data) {
      //settings backend data into the results state
      setResults(res.data);
    }
  }, []);

  return (
    <div>
      <div class="about">
        <div class="container">
          <div>
            <body class="main-layout inner_posituong computer_page">
              <div>
                <div class="loader_bg">
                  <div class="loader">
                    <img src="./assets/images/loading.gif" alt="#" />
                  </div>
                </div>

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

                {results.map((item) => (
                  <>
                    <br />
                    <div class="card">
                      <h3 class="card-header">
                        <b>{item.name}</b>
                      </h3>
                      <div class="card-body ">
                        <h5 class="card-title">
                          <b>CHARGER TYPE:</b>
                          {item.type}
                        </h5>
                        <h5 class="text-left">
                          <b>PRICE/HOUR :</b> ₹{item.price}
                        </h5>
                        <h5 class="card-text">
                          <b>POWER : </b>
                          {item.power}kW
                        </h5>
                        <h5 class="card-text">
                          <b>ADDRESS: </b>
                          {item.address}
                        </h5>
                        <h5 class="card-text">
                          <b>CONTACT NUM : </b>
                          {item.contact_number}
                        </h5>
                        <div class="text-right">
                          <a href="#" class="btn btn-primary">
                            {" "}
                            Book Slot
                          </a>
                        </div>
                      </div>
                    </div>
                    <br />
                  </>
                ))}
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
