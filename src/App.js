import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './component/homepage/homepage';
import SignIn from './signIn/sign';
import SignInOrganisation from './signIn/SignAsOrganisation';
import SignupCard from './register/signupCard';
import OtpVerify from './register/otpVerify';
import HospitalDetail from './register/HospitalDetails';
import Finish from './register/finish';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<SignupCard/>}/>
        <Route path="/loginOrganisation" element={<SignInOrganisation/>}/>
        <Route path="/Otp" element={<OtpVerify/>}/>
        <Route path="/Hospital" element={<HospitalDetail/>}/>
        <Route path="/finish" element={<Finish/>}/>
      </Routes>
    </Router>

  
    </>
  );
}

export default App;
