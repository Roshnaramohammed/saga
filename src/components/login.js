import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { apiGateway } from "../services/authorizationService";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const resData = await apiGateway.post(`/account/login/`, formData);
    console.log(resData.status);
    if(resData.status ===200){
      localStorage.setItem("token", resData?.data?.token)
      navigate('/home')
    }
    // console.log(resData);
  }

  return (
      <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
          
    <div class="loader_bg">
    <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
    </div>
    <div class="about">
    <div class="container">     

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField
              multiline={true}
              rows={1}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              autoFocus
              value={formData.email}
            />
            <TextField
                multiline={true}
                rows={1}
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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
};

export {SignIn,Copyright}

// import React from 'react';

// function Login() {
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
//                                              <h2>Login</h2>
//                                           </div>
//                                           </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Email" type="email" name="email"/> 
//                                        </div>
//                                        <div class="col-md-12">
//                                           <input class="contactus" placeholder="Password" type="password" name="Password"/>                          
                                       
//                                        <div class="col-md-12">
//                                           <button class="send_btn">Sign-in</button>
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
// export default Login;