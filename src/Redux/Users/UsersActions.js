import types from './UsersActionTypes';

export const getUsers = (nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6') => ({
    type: types.REQUEST_USERS,
    payload: {
        url: nextUrl
    }
});

export const setUsersLoading = () => ({
    type: types.SET_USERS_LOADING,
});

export const setUsersError = error => ({
    type: types.SET_USERS_ERROR,
    payload: {
        error,
    },
});

export const setNextUrl = nextUrl => ({
    type: types.SET_NEXT_URL,
    payload: {
        nextUrl
    }
});

export const setUsers = usersList => ({
    type: types.SET_USERS,
    payload: {
        usersList,
    },
});

export const resetUsersData = () => ({
    type: types.RESET_USERS_DATA,
});
