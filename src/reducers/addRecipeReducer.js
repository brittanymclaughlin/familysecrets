import {
    ADD_RECIPE_START,
    ADD_RECIPE_SUCCESS,
    ADD_RECIPE_FAIL

} from "../actions";

const initialState = {
    title: '',
    category: '',
    source: '',
    instructions: '',
    user_id: '',
    ingredients: '',
    isAdding: false
};

export const addRecipeReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch (action.type) {
        case ADD_RECIPE_START:
            return {
                ...state,
                isAdding: true,
            };
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                isAdding: false,
                recipe: action.payload
            }
        case ADD_RECIPE_FAIL:
            return {
                ...state,
            }

        default:
            return state;
    }
}