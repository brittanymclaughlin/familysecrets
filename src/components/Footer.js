import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer () {

    return(
        <FooterDiv>
            <Link to="/recipe-list" className="LinkBottom"><span className="logoBottom">Secret Family Secrets Cookbook</span></Link>
            <div className="links">
                <Link to="/">Login</Link>
                <Link to="/recipe-list">Current Recipes</Link>
                <Link to="/add-recipe">Add A Recipe</Link>
                <a href="https://htmlpreview.github.io/?https://github.com/BW-Secret-Family-Recipes-pt/Marketing-Page/blob/marketing/aboutblog/about.html" alt="About">About</a>
                <a href="https://htmlpreview.github.io/?https://github.com/BW-Secret-Family-Recipes-pt/Marketing-Page/blob/marketing/aboutblog/blog.html" alt="Check out our blog!">Blog</a>
            </div>
            <br/>
            <br />
            <br/>
            <div className="copy">&copy; 2020 Secret Family Recipe Cookbook</div>
            
        </FooterDiv>
    )
};
const FooterDiv = styled.div`
    background-color:#4a3f35;
    height:15vh;
    color:white;
    font-size:0.5rem;
    text-align:center;
    padding:4%;
    z-index:6;
    position:relative;
    margin-bottom:-5px;
    box-shadow: 0px -8px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
      

    .links{
                       
        display:flex;
        text-align:center;
        justify-content:center;
        
        a{
            text-decoration:none;
            color:white;
            margin-right:1%;
        }
    
    }
    .LinkBottom{
        text-decoration:none;
        color:white;

        &:hover{
            color:orange;
        }
        
        .logoBottom{
            font-family: 'Playfair Display', serif;
            text-shadow: 1px 1px 2px #000000;
            font-size:1.5rem;
            font-weight:lighter;

            

        }

    }
    
`
export default Footer;