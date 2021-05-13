
import {
    GET_ACTION_SUCCESS, 
    GET_ACTION_REQUESTING,
    GET_ACTION_FAILURE
} from '../../actions';

const INITIAL_STATE = {
    initialized: false,
    isRequesting: false,
    error: null,
    response: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ACTION_SUCCESS:
            return {
                initialized: true,
                isRequesting: false,
                error: null,
                response: action.response
            };
        case GET_ACTION_REQUESTING:
            return {
                ...state,
                isRequesting: true
            };
        case GET_ACTION_FAILURE:
            return {
                ...state,
                initialized: true,
                isRequesting: false,
                error: action.error
            };
        default:
            return state;
    }
};

