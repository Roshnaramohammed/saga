import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { apiGateway } from "../services/authorizationService";
import { useNavigate } from "react-router-dom";

function Copyrightt(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const { first_name, last_name, password, password2, email } = formData;
    if (!email) {
      setErrorMessage("Please provide a valid email address");
      return false;
    } else if (!first_name) {
      setErrorMessage("First name is required");
      return false;
    } else if (!last_name) {
      setErrorMessage("Last name is required");
      return false;
    } else if (!password) {
      setErrorMessage("Password is required");
      return false;
    } else if (!password2) {
      setErrorMessage("Confirm Password is required");
      return false;
    } else if (password !== password2) {
      setErrorMessage("Password missmatch");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const resData = await apiGateway.post(`/account/register/`, formData);
        if (resData.status === 200 || resData.status === 201) {
          setErrorMessage("");
          navigate("/login");
        } else if (resData.status === 400) {
          setErrorMessage(
            resData.data.email[0] ||
              resData?.data?.password ||
              "User Already Exist"
          );
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data.email[0] ||
            error.response?.data?.password ||
            "User Already Exist"
        );
      }
    }
  };
  return (
    <div>
      {/* <div class="loader_bg">
    <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
    </div> */}
      <div class="about">
        <div class="container">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        multiline={true}
                        rows={1}
                        autoComplete="given-name"
                        name="first_name"
                        required
                        fullWidth
                        id="first_name"
                        label="First Name"
                        onChange={handleChange}
                        autoFocus
                        value={formData.first_name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        multiline={true}
                        rows={1}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        autoComplete="family-name"
                        value={formData.last_name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline={true}
                        rows={1}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        autoComplete="email"
                        value={formData.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline={true}
                        rows={1}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        autoComplete="new-password"
                        value={formData.password}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline={true}
                        rows={1}
                        required
                        fullWidth
                        name="password2"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                        onChange={handleChange}
                        autoComplete="new-password"
                        value={formData.password2}
                      />
                    </Grid>
                  </Grid>
                  <Typography color="red" variant="h6">
                    {errorMessage}
                  </Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export { Copyrightt, SignUp };

// import React from 'react';

// function Signup() {
//     return (
//       <div>
//           <body class="main-layout">
//       <div class="loader_bg">
//          <div class="loader"><img src="assets/images/loading.gif" alt="#" /></div>
//       </div>

//       <section class="banner_main">
//          <div id="banner1" class="carousel slide" data-ride="carousel">
//             <ol class="carousel-indicators">
//                <li data-target="#banner1" data-slide-to="0" class="active"></li>
//                <li data-target="#banner1" data-slide-to="1"></li>
//                <li data-target="#banner1" data-slide-to="2"></li>
//                <li data-target="#banner1" data-slide-to="3"></li>
//                <li data-target="#banner1" data-slide-to="4"></li>
//             </ol>
//             <div class="carousel-inner">
//                <div class="carousel-item active">
//                   <div class="container">
//                      <div class="carousel-caption">
//                         <div class="row">
//                            <div class="col-md-6">
//                                           <div class="row">
//                               {/* <div class="col-md-10 offset-md-1"> */}
//                                  <form id="request" class="main_form">
//                                     <div class="row">
//                                        <div class="col-md-12">
//                                           <div class="titlepage">
//                                              <h2>SignUp</h2>
//                                           </div>
//                                           </div>
//                                        <div class="col-md-12 ">
//                                           <input class="contactus" placeholder="First Name" type="type" name="fname"/>
//                                        </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Last name" type="type" name="lname"/>
//                                        </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Email" type="email" name="email"/>
//                                        </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>
//                                        </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Password" type="password" name="Password"/>

//                                        <div class="col-md-12">
//                                           <button class="send_btn">Sign-Up</button>
//                                        </div>
//                                        </div>
//                                     </div>
//                                  </form>
//                               {/* </div> */}
//                            </div>
//                            </div>
//                            <div class="col-md-6">
//                               <div class="text_img">
//                                  <figure><img src="assets/images/pctt.png" alt="#"/></figure>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="carousel-item">
//                   <div class="container">
//                      <div class="carousel-caption">
//                         <div class="row">
//                            <div class="col-md-6">
//                            <div class="text-bg">
//                                  <span>Electric Vehicle</span>
//                                  <h1>Charging Hub</h1>
//                                  <p>The Indias bookable home and destination EV charging network, Charge your electric vehicle a anywhere and at anytime </p>
//                                  <a href="#">Find Station </a> <a href="contact.html">Add Station </a>
//                               </div>
//                            </div>
//                            <div class="col-md-6">
//                               <div class="text_img">
//                                  <figure><img src="assets/images/pcttt.png" alt="#"/></figure>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="carousel-item">
//                   <div class="container">
//                      <div class="carousel-caption">
//                         <div class="row">
//                            <div class="col-md-6">
//                            <div class="text-bg">
//                                  <span>Electric Vehicle</span>
//                                  <h1>Charging Hub</h1>
//                                  <p>The Indias bookable home and destination EV charging network, Charge your electric vehicle a anywhere and at anytime </p>
//                                  <a href="#">Find Station </a> <a href="contact.html">Add Station </a>
//                               </div>
//                            </div>
//                            <div class="col-md-6">
//                               <div class="text_img">
//                                  <figure><img src="assets/images/pctt.png" alt="#"/></figure>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="carousel-item">
//                   <div class="container">
//                      <div class="carousel-caption">
//                         <div class="row">
//                            <div class="col-md-6">
//                            <div class="text-bg">
//                                  <span>Electric Vehicle</span>
//                                  <h1>Charging Hub</h1>
//                                  <p>The Indias bookable home and destination EV charging network, Charge your electric vehicle a anywhere and at anytime </p>
//                                  <a href="#">Find Station </a> <a href="contact.html">Add Station </a>
//                               </div>
//                            </div>
//                            <div class="col-md-6">
//                               <div class="text_img">
//                                  <figure><img src="assets/images/pcttt.png" alt="#"/></figure>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="carousel-item">
//                   <div class="container">
//                      <div class="carousel-caption">
//                         <div class="row">
//                            <div class="col-md-6">
//                            <div class="text-bg">
//                                  <span>Electric Vehicle</span>
//                                  <h1>Charging Hub</h1>
//                                  <p>The Indias bookable home and destination EV charging network, Charge your electric vehicle a anywhere and at anytime </p>
//                                  <a href="#">Find Station </a> <a href="contact.html">Add Station </a>
//                               </div>
//                            </div>
//                            <div class="col-md-6">
//                               <div class="text_img">
//                                  <figure><img src="assets/images/pctt.png" alt="#"/></figure>
//                               </div>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
//             <i class="fa fa-chevron-left" aria-hidden="true"></i>
//             </a>
//             <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
//             <i class="fa fa-chevron-right" aria-hidden="true"></i>
//             </a>
//          </div>
//       </section>

//      </body>
//      </div>

//     );
//   }
// export default Signup;

// import React from 'react';

// function Signup() {
//     return (
//       <div>
//           <body class="main-layout inner_posituong contact_page">
//       <div class="loader_bg">
//          <div class="loader"><img src="images/loading.gif" alt="#" /></div>
//       </div>

//       <div class="contact">
//          <div class="container">
//             {/* <div class="row"> */}
//                {/* <div class="col-md-12"> */}
//                   <div class="titlepage">
//                      <h2>SignUp</h2>
//                   </div>
//                {/* </div> */}
//             {/* </div> */}
//             <div class="row">
//                {/* <div class="col-md-10 offset-md-1"> */}
//                   <form id="request" class="main_form">
//                      <div class="row">
//                         <div class="col-md-12 ">
//                            <input class="contactus" placeholder="First Name" type="type" name="fname"/>
//                         </div>
//                         <div class="col-md-12">
//                            <input class="contactus" placeholder="Last name" type="type" name="lname"/>
//                         </div>
//                         <div class="col-md-12">
//                            <input class="contactus" placeholder="Email" type="email" name="email"/>
//                         </div>
//                         <div class="col-md-12">
//                            <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>
//                         </div>
//                         <div class="col-md-12">
//                            <input class="contactus" placeholder="Password" type="password" name="Password"/>

//                         <div class="col-md-12">
//                            <button class="send_btn">Sign-Up</button>
//                         </div>
//                         </div>
//                      </div>
//                   </form>
//                {/* </div> */}
//             </div>
//          </div>
//       </div>
//         </body>
//         </div>
//     );
//   }
// export default Signup;
