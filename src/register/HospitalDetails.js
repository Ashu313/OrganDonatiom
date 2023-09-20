
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


const initialValues={
    name:"",
    email:"",
    password:"",
    cnfpassword:"",
    gender:"",
    address:"",
    class:"",
    RollNo:"",
    Address:"",
  };
  const validationSchema= Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  Address: Yup.string()
    .max(200, 'Must be 200 characters or less')
    .required('Required'),
    RollNo: Yup.string()
    .max(20, 'must be a number')
    .required('Required'),
     class: Yup.string()
    .max(20, 'Must be 10 characters or less')
    .required('Required'), 
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
    cnfpassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ).oneOf([Yup.ref("password")], "Passwords do not match").required('cnf password is required'),
  
  email: Yup.string().email('Invalid email address').required('Required'),
  gender: Yup.string().required('gender is required'),
  });
  
  const  onSubmit = async (values, { resetForm }) => {
    // Simulating an async request with setTimeout
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }, 3000);
  };
  
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

const HospitalDetail=()=>{

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
    const formik = useFormik({
      initialValues,
      validationSchema,
     onSubmit
    });
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
          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
       
        margin: 'auto',
        padding: '24px',
        border: '1px solid #DADADA',
        borderRadius: '10px',
        background: "#FFF",
     position:'relative',
    top: "0px",
    right: "0",
    left: "0",

      }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Box sx={{ width: '100%'}}>
      <Stack spacing={2} style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)"}}>
        <Item  style={{background:"linear-gradient(91deg, #46052D 0%, #46052D 0.01%, #500732 15.52%, #5E0933 32.71%, #610834 47.81%, #6A0B37 63.44%, #991747 76.98%, #B32346 94.17%)",color:"white",height:'100px',fontSize:"30px",textAlign:"left",padding:"1rem"}} >Login Page</Item>
       
      </Stack>
    </Box>

       <div style={{display:'flex',justifyContent:'center',gap:'1rem'}}> 
      <TextField
        required
        id="hospitalName"
        name="hospitalName"
        type="hospitalName"
        label="hospitalName"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.hospitalName}
        error={formik.touched.hospitalName && Boolean(formik.errors.hospitalName)}
        helperText={formik.touched.hospitalName && formik.errors.hospitalName}
      />
      
      <TextField
        required
        id="WorkEmail"
        name="WorkEmail"
        type="WorkEmail"
        label="WorkEmail"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.WorkEmail}
        error={formik.touched.WorkEmail && Boolean(formik.errors.WorkEmail)}
        helperText={formik.touched.WorkEmail && formik.errors.WorkEmail}
      />
      </div>
      <div  style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
       <TextField
        required
        id="helplineNumber"
        name="helplineNumber"
        type="helplineNumber"
        label="helplineNumber"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.helplineNumber}
        error={formik.touched.helplineNumber && Boolean(formik.errors.helplineNumber)}
        helperText={formik.touched.helplineNumber && formik.errors.helplineNumber}
      />
      
      <TextField
        required
        id="Number"
        name="YourNumber"
        type="YourNumber"
        label="Number"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Number}
        error={formik.touched.Number && Boolean(formik.errors.Number)}
        helperText={formik.touched.Number && formik.errors.Number}
      />
      </div>
      <div  style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
       <TextField
        required
        id="Address"
        name="Address"
        type="Address"
        label="Address"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Address}
        error={formik.touched.Address && Boolean(formik.errors.Address)}
        helperText={formik.touched.Address && formik.errors.Address}
      />
      
      <TextField
        required
        id="TotalEmployee"
        name="TotalEmployee"
        type="TotalEmployee"
        label="TotalEmployee"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.TotalEmployee}
        error={formik.touched.TotalEmployee && Boolean(formik.errors.TotalEmployee)}
        helperText={formik.touched.TotalEmployee && formik.errors.TotalEmployee}
      />
     
      
     
      </div>
  
       
       <Button
       style={{background:"black",color:'white'}} >Submit
        
      </Button>
      
     

      </Box>
      

          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
  );
}


    

export default HospitalDetail;
