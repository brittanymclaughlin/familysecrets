import {
    UPDATE_RECIPE_START,
    UPDATE_RECIPE_SUCCESS,
    UPDATE_RECIPE_FAIL,
    REMOVE_RECIPE_START,
    REMOVE_RECIPE_SUCCESS,
    REMOVE_RECIPE_FAIL
} from "../actions";

export const initialFormState = {
    title: "",
    source: "",
    instructions: "",
    category: "",
    ingredients: "",
    user_id: "",
    id:""
};

const initialState = {
    isUpdating: false,
    isUpdated: false,
    isRemoving: false,
    isRemoved: false
}

export const recipeCardReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch(action.type){
        case UPDATE_RECIPE_START:
            return {
                ...state,
                isUpdating: true
            };
        case UPDATE_RECIPE_SUCCESS:
            return {
                ...state,
                isUpdated: true,
                isUpdating: false   
            }
        case UPDATE_RECIPE_FAIL:
            return {
                ...state,
                isUpdating: false 
            } 
        case REMOVE_RECIPE_START:
            return {
                ...state,
                isRemoving: true
            }  
        case REMOVE_RECIPE_SUCCESS:
            return {
                ...state,
                isRemoving: false,
                isRemoved: true
            }
         case REMOVE_RECIPE_FAIL:
            return {
                ...state,
            }       
        default:
            return state;
    }
}