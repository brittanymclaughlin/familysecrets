import { combineReducers } from "redux";
import { logInReducer } from "./logInReducer";
import { signUpReducer} from "../reducers/signUpReducer";
import { recipeCardReducer } from "../reducers/recipeCardReducer";
import { addRecipeReducer } from "../reducers/addRecipeReducer";

export const appReducer = combineReducers({
    logInReducer,
    signUpReducer,
    recipeCardReducer,
    addRecipeReducer
})