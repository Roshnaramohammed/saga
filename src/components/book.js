import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';    
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function Book() {
  return (
    <div>
      <head>
        <style>

        </style>
      </head>

    <div class="loader_bg"><br/><br/><br></br>
    <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
    </div>
    <div class="about">
    <div class="container"> 
    <h1 class="display-4"> Enter your vehicle details</h1>
    <FormControl component="fieldset">
      <FormLabel component="legend">Select your vehicle </FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          labelPlacement="start"
        />
        <Checkbox icon={<ElectricCarIcon />}/>

        <FormControlLabel
          value="start"
          control={<Checkbox />}
          labelPlacement="start"
        />
        <Checkbox icon={<ElectricMopedIcon />}/>

        <FormControlLabel
          value="start"
          control={<Checkbox />}
          labelPlacement="start"
        />
        <Checkbox icon={<ElectricRickshawIcon />}/>

      </FormGroup>
    </FormControl>


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Chrge type" />}
    /> <br/>


        <div class="col-md-4">
                <label for="inputZip" class="form-label">
                  Choose your Date of booking
                </label>
        </div>        
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
      />

    </Stack>


    <div class="col-12 text-right">
                <button
                  type="submit"
                  class="btn btn-primary"
                >
                  BOOK NOW
                </button>
              </div>

    
    </div></div></div>
    
  );
}


const top100Films = [
    { label: 'Type 1'},
    { label: 'Type 2'},
    { label: 'CCS'},
    { label: 'CHAdeMO'},
  ];

export {Book}