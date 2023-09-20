
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import { Form, useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import OtpInput from 'react-otp-input';


  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const OtpVerify=()=>{

    const [step,setStep]=useState(0);
    const [error,setError]=useState(false);

    const nextStep=()=>{
        setStep(step+1);
        setError(false);
    }
    const Error=()=>{
        setError(true);
    }
    const [Login, setLogin] = useState(false);
   
     const [otp, setOtp] = useState('');

 
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 600,
        position:'relative',
        top:"20px",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
       
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
     
    
      <Box sx={{ width: '100%'}}>
      <Stack spacing={2} style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)",position:'relative',left:'10px'}}>
        <Item  style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)",color:"white",height:'100px',fontSize:"30px",textAlign:"center",padding:"1rem"}} >OTP validation</Item>
       
      </Stack>
    </Box>
    <div className="otp-valdiation">
      <div className="validate">
        <h1 style={{textAlign:'center'}}>OTP Verification</h1>
        <p style={{textAlign:'center'}}>An OTP has been sent to<br></br><span style={{textAlign:'center'}}>XXX XXX XXXX</span></p>
      </div>
      <div ClassName="otp-validate" style={{
            justifyContent:'center',
    display:'flex',
    marginBottom:'20px'
      }}>
       <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      inputStyle={{
        border: "3px solid #d9d9d9",
        width: "3rem",
        height: "3rem",
        borderRadius: "10px",
      }}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      style={{justifyContent:'center',
    position:'relative',
    bottom:'10px',
  fontSize:'50px'}}
    />
    </div>
      <div className='verify-button' style={{backgroundColor:'#000000',
borderRadius:'8px',
height:'48px',
left:'10px',
position:'relative',
top:'0px',

cursor:'pointer'}}>
        <button1 style={{color:'white',position:'relative',top:'10px',justifyContent:'center',display:'flex'}}>Verify & Proceed</button1>
      </div>
    </div>

   
      

          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
  );
} 
 
    

export default OtpVerify;
