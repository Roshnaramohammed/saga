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

export default function Book() {
  return (
    <div>
    <div class="loader_bg">
    <div class="loader"><img src="./assets/images/loading.gif" alt="#" /></div>
    </div>
    <div class="about">
    <div class="container"> 
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
    />
    
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