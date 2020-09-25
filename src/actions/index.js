import axiosWithAuth from "../utils/AxiosWithAuth";
// import axios from "axios";

// export const SIGN_IN = "SIGN_IN";
export const FETCHING_SIGN_IN_START = "FETCHING_SIGN_IN_START";
export const FETCHING_SIGN_IN_SUCCESS = "FETCHING_SIGN_IN_SUCCESS";
export const FETCHING_SIGN_IN_FAIL = "FETCHING_SIGN_IN_FAIL";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const UPDATE_RECIPE_START = "UPDATE_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAIL = "UPDATE_RECIPE_FAIL";
export const REMOVE_RECIPE_START = "REMOVE_RECIPE_START";
export const REMOVE_RECIPE_SUCCESS = "REMOVE_RECIPE_SUCCESS";
export const REMOVE_RECIPE_FAIL = "REMOVE_RECIPE_FAIL";
export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL";




export const signIn = (credentials, history) => dispatch => {
    console.log("signIn", credentials);
    dispatch({ type: FETCHING_SIGN_IN_START })
    axiosWithAuth()
        .post("/api/login", credentials)
        .then(res => {
            console.log("res from signIn", res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', credentials.username);
            let payload = {
                username: credentials.username,
                token: res.data.token
            }

            axiosWithAuth()
            .get("api/users")
            .then( res => {
                const getUser = res.data.filter(item => item.username === credentials.username);
                payload.userId = getUser[0].id;
                localStorage.setItem('userId', payload.userId);
                dispatch({ type: FETCHING_SIGN_IN_SUCCESS, payload: payload });
                history.push("/recipe-list");
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCHING_SIGN_IN_FAIL, payload: err })
        })
};

export const signUp = (userInfo) => dispatch => {

    dispatch({ type: SIGN_UP_START })
    axiosWithAuth()
        .post("/api/register", userInfo)
        .then(res => {
            dispatch({ type: SIGN_UP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGN_UP_FAIL, payload: err })
        })
};

export const submitEditRecipe = (recipeId, updateRecipeInfo, history) => dispatch => {
    // console.log("submitEditRecipe",updateRecipeInfo )
    dispatch({ type: UPDATE_RECIPE_START })
    console.log('update ', updateRecipeInfo);
    axiosWithAuth()
        .put(`/api/recipes/${recipeId}`, updateRecipeInfo)  //put in id dynamically
        .then(res => {
            dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data })
            history.push("/recipe-list")
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: UPDATE_RECIPE_FAIL, payload: err })
        })

}

export const removeRecipe = (recipeId,history) => dispatch => {
    dispatch({ type: REMOVE_RECIPE_START })
    axiosWithAuth()
        .delete(`/api/recipes/${recipeId}`)
        .then(res => {
            console.log("res from deleteRecipe", res.data)
            dispatch({ type: REMOVE_RECIPE_SUCCESS, payload: res.data })
            history.push("/recipe-list")
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REMOVE_RECIPE_FAIL, payload: err })
        })
}

export const addRecipe = (recipe, history) => dispatch => {
    console.log("addRecipe");
    dispatch({ type: ADD_RECIPE_START })
    axiosWithAuth()
        .post("/api/recipes", recipe)
        .then(res => {
            console.log("res from addRecipe", res.data)
            dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data })
            history.push("/recipe-list")
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_RECIPE_FAIL, payload: err })
        })
}