
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
import Finish from './finish';
import OtpVerify from './otpVerify';
import HospitalDetail from './HospitalDetails';
import SignUp from './donor';
import {Steps } from "antd";



const {Step}=Steps;

  
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

const SignupCard=()=>{

    const [step,setStep]=useState(0);
    const [hasError,setError]=useState(false);

    const nextStep=()=>{
        setStep(step+1);
        setError(false);
    }
    const error=()=>{
        setError(true);
    }

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
      <Stack spacing={1} style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)"}}>
        <Item  style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)",color:"white",height:'100px',fontSize:"30px",textAlign:"left",padding:"1rem"}} >Login Page</Item>
       
      </Stack>
    </Box>
    <Steps
        style={{
          marginBottom: "1rem",
          padding:"2rem",
        }}
        size="small"
        current={step}
        status={hasError ? "error" : "process"}
      >
        <Step title="Credentials" />
        <Step title="Email verification" />
        <Step title="Basic details" />
        <Step title="Finish" />
      </Steps>

      
      
      {step === 0 && <SignUp onSuccess={nextStep} onError={error} />}
      {step === 1 && <OtpVerify onSuccess={nextStep} onError={error} />}
      {step === 2 && <HospitalDetail onSuccess={nextStep} onError={error} />}
      {step === 3 && <Finish />}
     

      

          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
  );
}


    

export default SignupCard;
