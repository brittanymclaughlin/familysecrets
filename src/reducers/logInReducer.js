import { 
    FETCHING_SIGN_IN_START,
    FETCHING_SIGN_IN_SUCCESS,
    FETCHING_SIGN_IN_FAIL

} from "../actions";


const initialState = {
    isFetching: false,
    isFailedCreds: false,
    user: {}
};

export const logInReducer = (state = initialState, action) => {
    console.log('loginReducer action', action);
    switch(action.type){
        case FETCHING_SIGN_IN_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        case FETCHING_SIGN_IN_FAIL:
            return {
                ...state,
                isFetching: false,
                isFailedCreds: true
            }  

        default:
            return state;
    }
}