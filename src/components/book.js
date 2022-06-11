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
import SlotPicker from 'slotpicker';


export default function Book() {
 
  return (
    <div>
   
          <div class="loader_bg"><br/><br/><br></br>
          <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
          </div>
          <div class="about">
          <div class="container"> 
          <br/><br/><br></br>

          <div class="card text-left">
        <div class="card-header">
        <h1 class="display-4 titlepage text-center"> Enter your vehicle details</h1>
        </div>
        <div class="card-body">
      
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <FormControl component="fieldset">
      <FormLabel component="legend">Select your vehicle :</FormLabel> 
      &nbsp; <FormGroup aria-label="position" row>
        
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
    <FormLabel component="legend">Select charge type : </FormLabel>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose one" />}
    /> <br/>
       <FormLabel component="legend">Select Date of charging : </FormLabel>
 
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
      
    </Stack>  
    <FormLabel component="legend">Select time of charging : </FormLabel>
 
      <SlotPicker
        // Required, interval between two slots in minutes, 30 = 30 min
        interval={60}
        // Required, when user selects a time slot, you will get the 'from' selected value
        onSelectTime={(from) => console.log(from)}
        // Optional, array of unavailable time slots
        unAvailableSlots={['10:00', '15:00']}
        // Optional, 8AM the start of the slots
        from={'06:00'}
        // Optional, 09:00PM the end of the slots
        to={'23:00'}
        // Optional, 01:00 PM, will be selected by default
        defaultSelectedTime={'13:00'}
        // Optional, selected slot color
        selectedSlotColor='#F09999'
        // Optional, language of the displayed text, default is english (en)
        lang='en'
      />;
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
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
