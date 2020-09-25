import React from "react";
import LogIn from './LogIn';
import SignUserUp from './SignUp';
import styled from 'styled-components';
import image from '../images/woodback.jpg'

const Container = styled.div`
text-align:center;
position:relative;
margin-top:-35px;
height:80vh;
background-position:0% 35%;
background-size:cover;
z-index:3;
    #flexthem{
      display:flex;
      justify-content:space-between;
      width:95vw;
      opacity:0.9;
      margin:0 auto;
      #leftside{
          margin-top:15%;
        width:50vw;
      }
      #rightside{
          margin-top:15%;
        width:50vw;
      }
    }
`

const Home = () => {
    return(
        <Container style={{backgroundImage:"url(" + image + ")"}}>  
            <div id="flexthem">
                <div id="leftside">
                    <LogIn />
                </div>
                <div id="rightside">
                    <SignUserUp/>
                </div>
            </div>
        </Container>
    )
}





export default Home;