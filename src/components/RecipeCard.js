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
            <StyledForm className="recipeCardForm">
                <div>
                <label htmlFor="title">
                    <StyledTextInput
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        value={formInfo.title}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="source">
                    <StyledTextInput
                        type="text"
                        name="source"
                        id="source"
                        placeholder="source"
                        value={formInfo.source}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="category">
                    <StyledTextInput
                        type="text"
                        name="category"
                        id="category"
                        placeholder="category"
                        value={formInfo.category}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="ingredients">
                    <StyledTextInput
                        type="text"
                        name="ingredients"
                        id="ingredients"
                        placeholder="ingredients"
                        value={formInfo.ingredients}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="instructions">
                    <textarea
                        rows="4"
                        name="instructions"
                        id="instructions"
                        placeholder="instructions"
                        value={formInfo.instructions}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <ButtonsWrapper>
                    <button onClick={editRecipe}>Submit</button>
                    <button onClick={delRecipe}>Remove Recipe</button>
                    <button onClick={backToList}>Back to Recipe List</button>
                </ButtonsWrapper>
            </StyledForm>
         
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
`
const StyledForm = styled.form`
background-color:#fbfbfb;
margin:0 auto;
opacity:0.9;
border-radius:5px;
padding:2%;
width:80%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    textarea {
        margin: 12px;
        width: calc(100% - 24px);
    }
`
const StyledTextInput = styled.input`
    margin: 12px;
    width: calc(50% - 24px);
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`