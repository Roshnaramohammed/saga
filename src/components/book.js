import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import ElectricMopedIcon from "@mui/icons-material/ElectricMoped";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import SlotPicker from "slotpicker";
import { apiGateway } from "../services/authorizationService";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  React.useEffect(() => {
    getAllChargerTypes();
    getAllVehicles();
  }, []);

  const params = new URL(document.location).searchParams;

  const getAllChargerTypes = async () => {
    try {
      const res = await apiGateway.get(`/charger_types/`);
      if (res.status === 200) {
        let tempData = [];
        res?.data.map((item) =>
          tempData.push({ id: item.id, label: item.type })
        );
        setChargerTypes(tempData);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const getAllVehicles = async () => {
    try {
      const res = await apiGateway.get(`/vehicles/`);
      if (res.status === 200) {
        setVehicles(res.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const [chargerTypes, setChargerTypes] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);
  const [booking, setBooking] = React.useState({
    id: `${Math.floor(Math.random() * 1000000000)}`,
    date: null,
    time: null,
    duration: 60,
    price: params.get("price"),
    station: params.get("id"),
    user: params.get("id"),
    vehicle: null,
    charger_type: "",
    phone_no: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const resData = await apiGateway.post(`/bookings/`, booking);
      if (resData.status === 200 || resData.status === 201) {
        alert("Booking created successfully")
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(booking);
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
      {/* <div class="loader_bg"><br /><br /><br></br>
        <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
      </div> */}
      <div class="about">
        <div class="container">
          <br />
          <br />
          <br></br>

          <div class="card text-left">
            <div class="card-header">
              <h1 class="display-4 titlepage text-center">
                {" "}
                Enter booking details{" "}
              </h1>
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              <FormControl component="fieldset">
                <h4> Select your vehicle :</h4>
                <FormGroup aria-label="position" row>
                  {vehicles?.map((item) => (
                    <>
                      <FormControlLabel
                        key={item?.id}
                        value={item?.id}
                        control={<Checkbox />}
                        labelPlacement="start"
                        onChange={(e) =>
                          setBooking({ ...booking, vehicle: item?.id })
                        }
                        checked={booking.vehicle === item?.id}
                      />
                      <Checkbox
                        icon={
                          item?.name === "2 wheel" ? (
                            <ElectricMopedIcon />
                          ) : item?.name === "3 wheel" ? (
                            <ElectricRickshawIcon />
                          ) : item?.name === "4 wheel" ? (
                            <ElectricCarIcon />
                          ) : (
                            <ElectricCarIcon />
                          )
                        }
                      />
                    </>
                  ))}

                  {/* <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    labelPlacement="start"
                    onChange={(e) => setBooking({ ...booking, vehicle: "2" })}
                    checked={booking.vehicle === "2"}
                  />
                  <Checkbox icon={<ElectricMopedIcon />} />

                  <FormControlLabel
                    value="3"
                    control={<Checkbox />}
                    labelPlacement="start"
                    onChange={(e) => setBooking({ ...booking, vehicle: "3" })}
                    checked={booking.vehicle === "3"}
                  />
                  <Checkbox icon={<ElectricRickshawIcon />} /> */}
                </FormGroup>
              </FormControl>
              <h4>Select charge type : </h4>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={chargerTypes}
                name="charger_type"
                value={booking.charger_type}
                onChange={(event, value) =>
                  setBooking({ ...booking, charger_type: value.id })
                }
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Choose one" />
                )}
              />{" "}
              <br />
              <h4>Contct Num: </h4>
              <div class="col-sm-4">
                <input
                  type="tel"
                  class="form-control"
                  id="inputAddress"
                  placeholder="+91XXXXXXXXX"
                  name="phone_no"
                  value={booking.phone_no}
                  onChange={handleChange}
                />{" "}
              </div>
              <br />
              {/* <div class="col-md-4">
                <label for="inputZip" class="form-label">
                  Choose your Date of booking
                </label>
                </div>   */}
              <h4>Select booking date : </h4>
              <Stack component="form" noValidate spacing={3}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  value={booking.date}
                  name="date"
                  onChange={handleChange}
                  sx={{ width: 300 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <h4>Select booking time : </h4>
              </Stack>
              <SlotPicker
                // Required, interval between two slots in minutes, 30 = 30 min
                interval={60}
                // Required, when user selects a time slot, you will get the 'from' selected value
                onSelectTime={(from) =>
                  setBooking({ ...booking, time: `${from.hour()}:00:00` })
                }
                // Optional, array of unavailable time slots
                unAvailableSlots={["10:00", "15:00"]}
                // Optional, 8AM the start of the slots
                from={"06:00"}
                // Optional, 09:00PM the end of the slots
                to={"23:00"}
                // Optional, 01:00 PM, will be selected by default
                defaultSelectedTime={"13:00"}
                // Optional, selected slot color
                selectedSlotColor="#F09999"
                // Optional, language of the displayed text, default is english (en)
                lang="en"
              />
              <div className="col-lg-2">
                {" "}
                <a href="#" onClick={handleSubmit} class="btn btn-primary mb-2">
                  BOOK NOW
                </a>
              </div>
            </div>
            <div class="card-footer text-muted">*NB: proceed to pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const top100Films = [
//   { value: "", label: "Type 1" },
//   { value: "", label: "Type 2" },
//   { value: "", label: "CCS" },
//   { value: "", label: "CHAdeMO" },
// ];

export { Book };
