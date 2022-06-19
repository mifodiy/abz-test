const getUsers = state => state.users && state.users.usersList;
const getNextUrl = state => state.users && state.users.nextUrl;
const getIsFetching = state => state.users && state.users.isFetching;
const getError = state => state.users && state.users.error;

export default { getUsers, getNextUrl, getIsFetching, getError };
