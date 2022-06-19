import types from './UsersActionTypes';

const initialState = {
    usersList: [],
    nextUrl: '',
    isFetching: false,
    error: null
};


const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_NEXT_URL:
            return {
                ...state,
                nextUrl: payload.nextUrl
            };
        case types.SET_USERS:
            return {
                ...state,
                isFetching: false,
                usersList: [...state.usersList, ...payload.usersList],
            };
        case types.SET_USERS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case types.SET_USERS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: `Error: ${payload.error}`
            };
        case types.RESET_USERS_DATA:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default usersReducer
