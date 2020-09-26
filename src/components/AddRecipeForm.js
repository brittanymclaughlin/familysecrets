import React, { useState } from 'react';
import styled from 'styled-components';
import { addRecipe } from "../actions";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import image from '../images/woodback.jpg'

const AddRecipeForm = (props) => {

    let history = useHistory();
    const userId = localStorage.getItem('userId')
    const backToList = () =>{
        history.push("/recipe-list")
    }
    const defaultformState = {
        title: '',
        source: '',
        category:'',
        ingredients: '',
        instructions: '',
        user_id: userId
    };

    let [formData, setformData] = useState(defaultformState);

    const handleChange = (e) => {
        if (e.target.value) {
            setformData({ ...formData, [e.target.name]: e.target.value })
        };
    }

    // let handleCategory = (e) => {
    //     let catName = e.target.getAttribute("name");
    //     setformData({
    //         ...formData,
    //         categories: {
    //             ...formData.categories,
    //             [catName]: !formData.categories[catName]
    //         }
    //     });

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addRecipe(formData, history);
        
    };

    return (
        <RecipeContainer style={{backgroundImage:"url(" + image + ")"}}>
           <h2 id="RecipeAdd"><span>Add Recipe</span></h2> 
           <div id="stickynote">
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" id="titleLabel">
                        Recipe Title:
                <input type="text" placeholder="i.e. Granny's Famous Cookies"  name="title" id="title" value={formData.title} onChange={handleChange} />
                    </label>
                    <br/>
                    <label htmlFor="source" id="sourceLabel">
                        Source of Recipe:
                <input type="text" placeholder="Who created this masterpiece?" id="source" name="source"  value={formData.source} onChange={handleChange} />
                    </label>
                    <br/>
                    <label htmlFor="category" id="catLabel">
                        Category:
                <input type="text" id="category" name="category" placeholder="Breakfast, Lunch, Dinner, Snack" value={formData.category} onChange={handleChange} />
                    </label>
                    <br/>
                    <label htmlFor="ingredients" id="ingredientsLabel">
                        Ingredients:
                <input type="text" id="ingredients" name="ingredients" placeholder="1 cup butter, 2/3 cup of chocolate chips, etc"  value={formData.ingredients} onChange={handleChange} />
                    </label>
                    <br/>
                    <label htmlFor="instructions" id="instructionsLabel">
                       Instructions:
                 <textarea id="instructions"  name="instructions" placeholder="1. Prepare veggies, 2. Mix up ingredients, etc." value={formData.instructions} onChange={handleChange} />
                   </label>
                    <br/>
                    <div className="buttonDivs">
                       <button onClick={backToList}>Back to Recipes</button> 
                       <button> Add Recipe</button>
                        
                    </div>
                </form>
            </div>
        </RecipeContainer>
    )

}
const RecipeContainer = styled.div`
    font-size:1.2rem;
    text-align:center;
    position:relative;
    font-family: 'Montserrat', sans-serif;
    margin-top:-45px;
    height:85vh;
    background-position:0% 45%;
    background-size:cover;
    z-index:3;
    
    h2{
      font-family: 'Kaushan Script', cursive;
      font-size:3rem;
      font-weight:lighter;
      color:#4a3f35;
      opacity:0.9;
      padding-top:6%;

      span{
        background-color:white;
        padding:2%;
        border-radius:50% 50% 50% 50% / 49% 49% 51% 51%  ;
        box-shadow:0px 15px 15px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    }
    #stickynote{
        
        h2{
            
            font-size:4rem;
            margin-left:15%;
            margin-bottom:0%;
            margin-top:0%;
        }
        form{
            background-color:#fbfbfb;
            margin:0 auto;
            opacity:0.9;
            border-radius:5px;
            padding:2%;
            width:80%;
            text-align:left;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            button{
            font-size: 1rem;
            }
            label{
                display:flex;
                width:auto;
                flex-direction:column;
                align-items:flex-start;
                font-size:1rem;
             }
             input{
                margin-left: 12px;
                margin-right:12px;
                border:1px inset #4a3f35;
                border-radius:3px;
                font-family:inherit;
                width: calc(100% - 24px);
             }
             textarea{
                margin-left: 12px;
                font-family:inherit;
                margin-right:12px;
                border-radius:3px;
                border:1px inset #4a3f35;
                width: calc(100% - 24px);
            }
        }
        .buttonDivs{
            display:flex;
            justify-content:space-between;
            button{
                background-color:orange;
                border-radius:3px;
                color:#4a3f35;
                border:1px inset #4a3f35;
                :hover{
                    background-color:#56b04c;
                    color:white;
                }
            }
            
        }
        }  
    }
    `
const mapStateToProps = state => {
    return {
        user: state.logInReducer.user
    }
}

const mapDispatchToProps = { addRecipe };

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);