import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import { Form, useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


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
const SignIn=()=>
 {
 
  const [Login, setLogin] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
   onSubmit
  });

  return (
     <>
       <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '24px',
        border: '1px solid #DADADA',
        borderRadius: '10px',
        background: "#FFF",
        position: "absolute",
    top: "0",
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

      <TextField
        required
        id="email"
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      
      <TextField
        required
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
  
       <div class="forget-passowrd">
        <p style={{marginLeft:"auto",position:"relative"}}>forget Password?</p>
       </div>
       <Button
        type="submit"
        disabled={Login}
         style={{background:"black",color:'white'}} >
        {Login ? 'Login...' : 'Login'}
      </Button>
      
     

      </Box>
      
      
    

     </>
  );
}

 
export default SignIn;