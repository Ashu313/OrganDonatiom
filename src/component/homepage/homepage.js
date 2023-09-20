import react from "react"
import { styled } from "styled-components";
import { Link } from 'react-router-dom'; 
import { useState } from "react";
import "./homepage.css";

const Homepage=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };


   

 
return (
<>
<div className="Section">

    <NavData class="Navbar">
        <nav>
            <div className="image-content">
        <BigImage className="big-image">
                <img src="./images/ellipse-8.png"/>
            <ImageLogo className="homepage-image">
                <img src="./images/logo.png"></img>
            </ImageLogo>
            </BigImage>

    
            </div>
            <div className="nav-data">
                <UnorderedList>
                    <Home>
                        home
                    </Home>
                    <AboutUs>
                        About us
                    </AboutUs>
                    <FindBlood>
                       Find Blood
                    </FindBlood>
                    <Register onClick={toggleDropdown}>
                        Register Now<i class="fa fa-caret-down" aria-hidden="true"></i>

                       
                        <i className={`dropdown-icon ${isOpen ? 'open' : ''}`}></i>
                        {isOpen && (
        <div className="dropdown-options">
          <Link to="/login" className="dropdown-option">
            Register as person
          </Link>
          <br></br>
          <Link to="/register" className="dropdown-option">
            Register As Hospital 
          </Link>
        </div>
      )}
                    </Register>
      
                    <Button className="button" onClick={toggleDropdown1}> 
                        <ButtonClick type="submit">Sign In<i class="fa fa-caret-down" aria-hidden="true"></i>

                        <i className={`dropdown-icon ${isOpen1 ? 'open' : ''}`}></i>
                        {isOpen1 && (
        <div className="dropdown-options">
          <Link to="/login" className="dropdown-option">
            SignIn as person
          </Link>
          <br></br>
          <Link to="/register" className="dropdown-option">
            SignIn as Hospital 
          </Link>
        </div>
      )}
                        
                        </ButtonClick>
                    </Button>
                </UnorderedList>
            </div>
            <AdjustContent className="about-detail">
        <Height1>Save Life Donate
Blood </Height1>
       <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>

       <BloodContent className="buttonContent">
        <GetBloodButton type="submit">Get Blood Now</GetBloodButton>
       </BloodContent>
    </AdjustContent>
        </nav>
    </NavData>

    <BoxContainer className="box">
        <Rectangle className="rectangle">
            <div class="Heading">
                <h1 style={{position:'relative',top:'0px',left:'90px'}}>About us</h1>
            </div>
        <Label1 className="label">
<Paragraph1 className="lorem-ipsum-is">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
electronic typesetting, remaining essentially unchanged.
</Paragraph1>
</Label1>
        </Rectangle>
    </BoxContainer>
    <div className="footer" style={{position:'relative'}}>
    
    <div class="footer-content">
    
      
        <p style={{textAlign:'center'}}>Copyright@2023 by Ashutosh Kumar</p>
    </div>
</div>
  
  
</div>



</>
)
}
const Label1=styled.div`
height: 63px;
width: 1230px;
`;
const Paragraph1=styled.p`
color: #3b3b3b;
font-family: "Roboto-Light", Helvetica;
font-size: 18px;
font-weight: 300;
left: 90px;
letter-spacing: 0.9px;
line-height: normal;
position:relative;
width: 1230px;

`;

const AboutUs=styled.li`
color: #000;
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;

`;
const BoxContainer=styled.li`
    height: 252px;
    width: 1345px;

`;
const Rectangle=styled.div`
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 100px 3px #dbdbdb40;
    height: 252px;
    left: 0;
     position:absolute;
    width: 1345px;
`;
const Home=styled.li`
color: #000;
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const FindBlood=styled.li`
color: #000;
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const Register=styled.li`
color: #000;
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor:pointer;
`;
const UnorderedList=styled.ul`

list-style: none;
    display: flex;
    gap: 4rem;
    position: absolute;
    top: 50px;
    left: 400px;
`
const ImageLogo=styled.div`
width: 61px;
height: 62px;
flex-shrink: 0;
position: absolute;
    /* z-index: -1; */
    /* background: blueviolet; */
    top: 0;

`;
const NavData=styled.div`
width: 1440px;

background: #FFF;
`
const BigImage=styled.div`
width: 1425.957px;
height: 1013px;
flex-shrink: 0;
`
const Button=styled.div`
width: 224px;
 
flex-shrink: 0;
border-radius: 10px;
border: 2px solid #000;
background: #FFF;
position:relative;
top:-20px;

`
const ButtonClick=styled.button`
text-align:center;
color: #000;
font-size: 24px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
background:white;
border:none;
display: flex;justify-content:center;
border: none;
    display: flex;
    background: white;
    border-radius: none;
    text-align: center;
    padding: 1rem;
    position: relative;
    left: 50px;


`;
const Height1=styled.h1`
color: #3C3C3C;
text-align: right;
font-size: 48px;
font-family: Roboto;
font-style: normal;
font-weight: 700;
line-height: 56px;
letter-spacing: 2.4px;
display: flex;
width: 453px;
height: 150px;
flex-direction: column;
flex-shrink: 0;
`
const Paragraph=styled.p`
color: #000;
text-align: right;
font-size: 13px;
font-family: Roboto;
font-style: normal;
font-weight: 300;
line-height: 25px;
letter-spacing: 0.65px;
display: flex;
width: 444px;
flex-direction: column;
flex-shrink: 0;
`
const AdjustContent=styled.div`
position:absolute;
top:120px;
right:10px;

`
const BloodContent=styled.div`
border-radius: 15px;
background: #000;
box-shadow: 0px 4px 90px 5px #DEDFDF;
width: 261px;
height: 75px;
flex-shrink: 0;
position:relative;
top:20px;
left:100px;
text-align:center;
`
const GetBloodButton=styled.button`
display: flex;
width: 224px;
height: 39px;
flex-direction: column;
flex-shrink: 0;
color: #FFF;
font-size: 30px;
font-family: Roboto;
font-style: normal;
font-weight: 900;
line-height: normal;
background:black;
border:none;
position:relative;
top:20px;
text-align:center;
cursor:pointer;
left:30px;
`
export default Homepage;