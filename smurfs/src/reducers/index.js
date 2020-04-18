import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from "../actions";

const initialStore = {
    isFetching: false,
    error: '',
    smurfs:[]
}

export const reducer = (state = initialStore, action) => {
    switch( action.type ){
        case FETCH_DATA_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:'',
                smurfs: action.payload
            }
        case FETCH_DATA_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
    
}

export const NEW_SMURF = "NEW_SMURF";

export const newSmurf = (input) => {
    return{
        type: NEW_SMURF,
        payload: input
    }
}