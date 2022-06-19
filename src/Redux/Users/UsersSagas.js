import {put, takeEvery, all, call} from 'redux-saga/effects';
import {usersApi} from "../../api/api";
import types from "./UsersActionTypes";
import {setUsersLoading, setNextUrl, setUsers, setUsersError} from "./UsersActions";

export function* sagaWatcher() {
    yield takeEvery(types.REQUEST_USERS, sagaRequestUsersWorker)
}

export function* sagaRequestUsersWorker(action) {
    yield put(setUsersLoading());
    try {
        const data = yield call(fetchUsers, action.payload.url);
        yield put(setNextUrl(data.links.next_url));
        yield put(setUsers(data.users));
    } catch (error) {
        console.log('Error saga: ', error);
        yield put(setUsersError(error.message));
    }
}

async function fetchUsers(nextUrl) {
    return await usersApi.getUsers(nextUrl);
}

export default function* rootSaga() {
    yield all([
        sagaWatcher()
    ])
}