import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { connect } from "react-redux";
import styled from "styled-components";
import image from '../images/woodback.jpg'

const RecipeList = ({user}) => {

    //let history = useHistory();
    const [recipeList, setRecipeList] = useState([]);
    // const handleClick = e => {
    //     history.push("/add-recipe");
    // }
   
    // const moreInfo = (recipeId) => {
    //     console.log("recipe id", recipeId);
    //     history.push(`/recipe-card/${recipeId}`);
    // }
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if(user) {
            AxiosWithAuth()
            .get(`api/recipes`)
            .then(res => {
                console.log('recipes on the server', res.data);
                setRecipeList(res.data);
            })
            .catch(err => console.log(err))
        } 
    }, [])

    return(
        <StyledDiv style={{backgroundImage:"url(" + image + ")"}}>
            <h1><span>What's Cooking?</span></h1>

            {/* <RecipeCard/> */}
            {/* {props.recipe.map(recipe => (
          <RecipeDetails key={recipe.id} recipe={recipe} />
        ))} */}
           <div className="section">

            
                    {
                        recipeList.map((recipe, index) => (
                                    <div className="recipeSections" key={index}>
                                    
                                    <Link to={`/recipe-card/${recipe.id}`} className="Link">
                                        <span className="titleStyle">{recipe.title}</span>
                                    </Link>
                                    <br/>
                                    <span className="source"> By: {recipe.source}</span>
                                    <br/>
                                    <br/>
                                    <span className="prefixIngred">Ingredients You'll Need:</span>
                                    <p className="ingredientsList">{recipe.ingredients}</p>
                                </div>
                            
                            )
                        )}
            </div>
             {/* <div>
                <button onClick = {handleClick}>Don't see a recipe here? Add one today!</button>
            </div> */}
        </StyledDiv>
    )
}
const mapStateToProps = state => {
    return{
        user: state.logInReducer.user
    }
}
const mapDisplatchToProps = {};
export default connect (mapStateToProps, mapDisplatchToProps)(RecipeList);

const StyledDiv = styled.div`
    text-align:center;
    position:relative;
    margin-top:-35px;
    background-position:0% 35%;
    background-size:cover;
    z-index:3;

    h1{
      font-family: 'Berkshire Swash', cursive;
      font-size:3rem;
      font-weight:lighter;
      color:#4a3f35;
      opacity:0.8;
      padding-top:6%;
      font-weight:lighter;

      span{
        background-color:white;
        padding:2%;
        border-radius:50% 50% 50% 50% / 49% 49% 51% 51%  ;
        box-shadow:0px 15px 15px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      
      }.section{
          width:95vw;
          display:flex;
          flex-wrap:wrap;
          justify-content:space-evenly;
          text-align:left;

          .recipeSections{
            width:15%;
            white-space:normal;
            min-width:200px;
            background-color:white;
            opacity:0.8;
            border-radius:2px;
            margin:2%;
            padding:2%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          
            .prefixIngred{
                background-color:orange;
                font-weight:bolder;
                font-size:0.8rem;
                border-radius:2px;
                color:white;
                padding:1.5%;
                width:100%;
            }
            .Link{
                text-decoration:none;

                .titleStyle{
                    border-bottom:2px solid orange;
                    color:black;
                    text-decoration:none;
                    font-size:1.5rem;
                    text-align:center;
                    font-weight:lighter;
                }
            }
            .source{
                font-size:.8rem;
                margin-left:30px;
            }
            p{
                font-size:0.8rem;
                text-indent:30px;
            }
        }
    }
`