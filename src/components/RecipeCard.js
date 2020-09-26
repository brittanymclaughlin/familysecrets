import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import {removeRecipe, submitEditRecipe} from "../actions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { initialFormState } from "../reducers/recipeCardReducer";
import styled from "styled-components";
import image from '../images/woodback.jpg';

const RecipeCard = ({
    submitEditRecipe, 
    removeRecipe, 
    isUpdating, 
    isRemoving,
    isRemoved
}) => {
    let history = useHistory();
    const [formInfo, setFormInfo] = useState(initialFormState)
    let { recipeId } = useParams();

    // const cardId = 2; 
    useEffect(() => {
        AxiosWithAuth()
        .get(`/api/recipes/${recipeId}`)
        .then( res => {
            console.log('res ', res.data);
            setFormInfo(res.data);
        })
        .catch(err => console.log(err))
    },[]);
    const handleChanges = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const editRecipe = e => {
        e.preventDefault();
        submitEditRecipe(recipeId, formInfo, history);
    } 
    const delRecipe = e => {
        e.preventDefault();
        removeRecipe(recipeId, history)
    }
    const backToList = () =>{
        history.push("/recipe-list")
    }
    if (isUpdating) {
        return <h4>Loading Update...</h4>
    }
    if (isRemoving){
        return <h4>Removing Article...</h4>
    }
    
    return(
        <RecipeDiv style={{backgroundImage:"url(" + image + ")"}}>
            <h2 id="RecipeAdd"><span>Edit {formInfo.title}</span></h2> 
            <form className="recipeCardForm">
                <label htmlFor="title">
                    Recipe Name:
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        value={formInfo.title}
                        onChange={handleChanges}
                    />
                </label>
                <br/>
                <label htmlFor="source">
                    Source:
                    <input
                        type="text"
                        name="source"
                        id="source"
                        placeholder="source"
                        value={formInfo.source}
                        onChange={handleChanges}
                    />
                </label>
                <br/>
                <label htmlFor="category">
                    Category:
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="category"
                        value={formInfo.category}
                        onChange={handleChanges}
                    />
                </label>
                <br/>
                <label htmlFor="ingredients">
                    Ingredients:
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        placeholder="ingredients"
                        value={formInfo.ingredients}
                        onChange={handleChanges}
                    />
                </label>
                <br/>
                <label htmlFor="instructions">
                    Instructions:
                    <textarea
                        rows="4"
                        name="instructions"
                        id="instructions"
                        placeholder="instructions"
                        value={formInfo.instructions}
                        onChange={handleChanges}
                    />
                </label>
               
                <ButtonsWrapper>
                   <button onClick={backToList}>Back to Recipe List</button>
                    <button onClick={delRecipe}>Remove Recipe</button>
                     <button onClick={editRecipe}>Submit</button>
                </ButtonsWrapper>
            </form>
         
            {
                (isRemoved) ? <h4>Recipe Removed</h4> : null
            }
        </RecipeDiv>
    )

}

const mapStateToProps = state => {
    console.log('state', state);
    return{
        isUpdating: state.recipeCardReducer.isUpdating,
        isUpdated: state.recipeCardReducer.isUpdated,
        isRemoving: state.recipeCardReducer.isRemoving,
        isRemoved: state.recipeCardReducer.isRemoved 
    }
}; 

const mapDispatchToProps = {submitEditRecipe, removeRecipe}
export default connect (mapStateToProps, mapDispatchToProps) (RecipeCard);

const RecipeDiv = styled.div`  
    
    font-size:1.2rem;
    text-align:center;
    position:relative;
    font-family: 'Montserrat', sans-serif;
    margin-top:-45px;
    height:85vh;
    background-position:0% 45%;
    background-size:cover;
    z-index:3;
    display:flex;
    flex-direction:column;

    h2{
        font-family: 'Kaushan Script', cursive;
        font-size:3rem;
        font-weight:lighter;
        color:#4a3f35;
        opacity:0.8;
        padding-top:6%;
  
        span{
          background-color:white;
          padding:2%;
          border-radius:50% 50% 50% 50% / 49% 49% 51% 51%  ;
          box-shadow:0px 15px 15px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
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
            textarea {
                margin-left: 12px;
                margin-right:12px;
                width: calc(100% - 24px);
                font-family:inherit;
                border-radius:3px;
                border:1px inset #4a3f35;

            }
            label{
                display:flex;
                width:auto;
                flex-direction:column;
                align-items:flex-start;
                font-size:1rem;
            input{
                margin-left: 12px;
                margin-right:12px;
                border:1px inset #4a3f35;
                border-radius:3px;
                font-family:inherit;
                width: calc(100% - 24px);
            }
        }
    }
`


const ButtonsWrapper = styled.div`
    display: flex;
    margin-top:1%;
    justify-content: space-between;
    button{

    background-color:#fa7d09;
    border-radius:3px;

    border:1px inset #4a3f35;
    :hover{
        background-color:#56b04c;
        color:white;
    }
    }

`