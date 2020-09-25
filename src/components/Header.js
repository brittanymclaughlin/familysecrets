import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header () {
   

    return(
        <HeaderDiv>
            <div className="logo">Secret Family Recipe Cookbook</div>
            <div className="nav">
                <div className="navbutton"><Link to="/add-recipe" className="headerLinks">Add A Recipe</Link></div>
                {/* <div className="navbutton"><Link to="/recipe-list" className="headerLinks">All Recipes</Link></div> */}

            </div>
        </HeaderDiv>
    )
};
const HeaderDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color: #fa7d09;
    color:white;
    padding-bottom:2%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
    z-index:5;
    position:relative;
    .logo{
       font-size:1.5rem;
       font-family:'Playfair Display', serif; 
       margin-top:1%;
       margin-left:3%;
       text-shadow: 1px 1px 2px #000000;
       flex-grow:2; 
    }
    .nav{
        display:flex;
        
       
        .navbutton{
            width:15vw;
            margin-top:6%;
            margin-right:5%;
            background-color: #fa7d09;
            
            .headerLinks{ 
                margin-top:1%;
                text-decoration:none;
                color:white;
                margin-left:2%;
                font-size:1rem;
                font-family:"Playfair Display", serif;
                text-shadow: 1px 1px 1px #000000;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }
    
`

export default Header;