import React, {useState} from "react";
import { connect } from "react-redux";
import { signIn } from "../actions"
import { useHistory } from "react-router-dom";
import styled from 'styled-components';


const LogIn = (props) => {
   
    let history = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        console.log("SignIn", credentials)
        props.signIn(credentials, history);
           }
 console.log("props from LogIn", props)
    return(
        <LogDiv>
            <div id="sticky">
            <h2>Already have an account?</h2>
            
            <form onSubmit={onSubmit}>
                {props.isFailedCreds ? <h3 style={{color:'red'}}>Incorrect Username/Password combination. Please try again.</h3> :<h3> Log in to continue.</h3>}
                <label htmlFor="username">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="User Name"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign In</button>
            </form>
            </div>
        </LogDiv>
    )

}
const LogDiv = styled.div`
    padding:20px;
    font-size:1.2rem;
    text-align:center;
    #sticky{
        background-color:#fbfbfb;
        border-radius:2px;
        padding:2%;
        height:40vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        h2{
            font-size:2rem;
            margin-bottom:0%;
            border-bottom:2px solid orange;
            
        }
        
        form{
            display:flex;
            flex-direction:column;
            align-items:center;
            h3{
            margin-top:10%;
            margin-bottom:0px;
            font-size:.8rem;
        }
            label{
                margin-bottom:2%;
            }
            input{
                border:1px inset #4a3f35;
                border-radius:5px;
            }
            button{
                background-color: #fa7d09;
                color:#fbfbfb;
                padding:2%;
                border:0px;
                border-radius:5px;
                font-weight:bolder;
            }
        }
    
    
    }
`
const mapStateToProps = state => {
    console.log('this is state from login redux', state)
    return {
        isFailedCreds: state.logInReducer.isFailedCreds
    }
}

const mapDispatchToProps = { signIn };


export default connect (mapStateToProps, mapDispatchToProps)(LogIn);