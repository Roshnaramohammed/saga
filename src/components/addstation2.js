// import React from 'react';

// function Addstation2() {
//     return (
//       <div>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
//           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
//           <body class="main-layout inner_posituong contact_page">
//       <div class="loader_bg">
//          <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
//       </div>
//       <div class="about">
//          <div class="container">     
//          <h1 class="display-4">Add station details</h1>
 
//           <form class="row g-3">
//             <div class="col-md-12">
//               <label for="inputEmail4" class="form-label text-start">Name</label>
//               <input type="email" class="form-control" id="inputEmail4"/>
//             </div>
//             <div class="col-md-6">
//               <label for="inputPassword4" class="form-label">Charging staion name</label>
//               <input type="text" class="form-control" id="inputPassword4"/>
//             </div>
//             <div class="col-md-6">
//               <label for="inputEmail4" class="form-label">Charging staion location</label>
//               <input type="email" class="form-control" id="inputEmail4"/>
//             </div>
//             <div class="col-md-12">
//               <label for="inputPassword4" class="form-label">Address</label>
//               <input type="text" class="form-control" id="inputPassword4"/>
//             </div>
//             <div class="col-md-3">
//               <label for="inputZip" class="form-label">Zip</label>
//               <input type="text" class="form-control" id="inputZip"/>
//             </div>
//             <div class="col-md-5">
//               <label for="inputAddress" class="form-label">Contact num</label>
//               <input type="text" class="form-control" id="inputAddress" placeholder="+91XXXXXXXXX"/>
//             </div>
//             <div class="col-md-4">
//               <label for="inputState" class="form-label"> Domestic/Non-dom  </label> &nbsp;&nbsp; 
//               <select id="inputState" class="form-select">
//                 <option selected>Choose...</option>
//                 <option>Domestic</option>
//                 <option>Non-Domestic</option>
//               </select>
//             </div>
//             {/* <div class="col-md-4">
//               <label for="inputCity" class="form-label">Type</label>
//               <input type="text" class="form-control" id="inputCity"/>
//             </div> */}
//             <div class="col-md-4">
//               <label for="inputState" class="form-label"> Kw  </label> &nbsp;&nbsp; 
//               <select id="inputState" class="form-select">
//                 <option selected>Choose...</option>
//                 <option>3</option>
//                 <option>5</option>
//                 <option>7</option>
//               </select>
//             </div>
//             {/* <div class="col-md-2">
//               <label for="inputZip" class="form-label">Zip</label>
//               <input type="text" class="form-control" id="inputZip"/>
//             </div> */}
//              <div class="col-md-4">
//               <label for="inputZip" class="form-label">Price/Hour</label>
//               <input type="text" class="form-control" id="inputZip"/>
//             </div>
//             <div class="col-md-4">
//               <label for="inputState" class="form-label"> Charger type  </label> &nbsp;&nbsp; 
//               <select id="inputState" class="form-select">
//                 <option selected>Choose...</option>
//                 <option>AC Type 1</option>
//                 <option>AC Type 2</option>
//                 <option>DC CHAdeMO</option>
//                 <option>DC CCS</option>
//                 <option>DC Type 2</option>
//               </select>
//             </div>
//             <div class="col-12">
//               <button type="submit" class="btn btn-primary">Add Station</button>
//             </div>
//           </form>
//           </div>
//           </div>
//         </body>
//         </div>
//     );
//   }
// export default Addstation2;


import React, { useState } from "react";
import { apiGateway } from "../services/authorizationService";

function Addstation2() {
  const [formData, setFormData] = useState({
    name: "",
    station_name: "",
    location: "",
    address: "",
    contact_number: "",
    supplier: "",
    kw: "",
    zip: "",
    domestic: "",
    price: "",
    charger_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const resData = apiGateway.post(`/api/v1/submitform`, formData);
    console.log(formData);
    console.log(resData);
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
      <body class="main-layout inner_posituong contact_page">
        <div class="loader_bg">
          <div class="loader">
            <img src="./assets/images/loading.gif" alt="#" />
          </div>
        </div>
        <div class="about">
          <div class="container">
            <h1 class="display-4">Add station details</h1>

            <form class="row g-3">
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label text-start">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Charging staion name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="station_name"
                  value={formData.station_name}
                  onChange={handleChange}
                  id="inputPassword4"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Charging staion location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  class="form-control"
                  id="inputEmail4"
                />
              </div>
              <div class="col-md-12">
                <label for="inputPassword4" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-md-3">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  class="form-control"
                  id="inputZip"
                />
              </div>
              <div class="col-md-5">
                <label for="inputAddress" class="form-label">
                  Contact num
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="+91XXXXXXXXX"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  {" "}
                  Domestic/Non-dom{" "}
                </label>{" "}
                &nbsp;&nbsp;
                <select
                  id="inputState"
                  name="domestic"
                  value={formData.domestic}
                  onChange={handleChange}
                  class="form-select"
                >
                  <option selected>Choose...</option>
                  <option>Domestic</option>
                  <option>Non-Domestic</option>
                </select>
              </div>
              {/* <div class="col-md-4">
              <label for="inputCity" class="form-label">Type</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div> */}
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  {" "}
                  Kw{" "}
                </label>{" "}
                &nbsp;&nbsp;
                <select
                  id="inputState"
                  name="kw"
                  value={formData.kw}
                  onChange={handleChange}
                  class="form-select"
                >
                  <option selected>Choose...</option>
                  <option>3</option>
                  <option>5</option>
                  <option>7</option>
                </select>
              </div>
              {/* <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip"/>
            </div> */}
              <div class="col-md-4">
                <label for="inputZip" class="form-label">
                  Price/Hour
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  class="form-control"
                  id="inputZip"
                />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  {" "}
                  Charger type{" "}
                </label>{" "}
                &nbsp;&nbsp;
                <select
                  id="inputState"
                  name="charger_type"
                  value={formData.charger_type}
                  onChange={handleChange}
                  class="form-select"
                >
                  <option selected>Choose...</option>
                  <option>AC Type 1</option>
                  <option>AC Type 2</option>
                  <option>DC CHAdeMO</option>
                  <option>DC CCS</option>
                  <option>DC Type 2</option>
                </select>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Station
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}
export default Addstation2;