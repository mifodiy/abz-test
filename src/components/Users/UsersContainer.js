import React from 'react';
import {connect} from 'react-redux';
import UsersList from './UsersList/UsersList';
import {getUsers} from '../../Redux/Users/UsersActions';
import usersSelectors from '../../Redux/Users/UsersSelectors';
import {Container} from "react-bootstrap";
import Loading from "../common/Loading/Loading";

export class UsersContainer extends React.Component {

    componentDidMount() {
        const {getUsers} = this.props;
        let nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
        if (window.innerWidth < 768) {
            nextUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3';
        }
        getUsers(nextUrl);
    };

    handleNextUsersList = () => {
        const {getUsers, nextUrl} = this.props;
        getUsers(nextUrl);
    };

    render() {
        const {usersList, error, isFetching, nextUrl} = this.props;
        return (
            <section id="users" className="users">
                <Container>
                    <h2 className="users__title h1">Our cheerful users</h2>
                    <p className="users__subtitle">
                        Attention! Sorting users by registration date
                    </p>
                    {usersList && !!usersList.length && <UsersList usersList={usersList}/>}
                    {isFetching && <Loading/>}
                    {error && <div className="users__error">{error}</div>}
                    {nextUrl && (
                        <button
                            type="button"
                            className={`users__button button ${isFetching && 'button--disabled'}`}
                            disabled={isFetching && true}
                            onClick={this.handleNextUsersList}
                        >
                            Show more
                        </button>
                    )}
                </Container>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    usersList: usersSelectors.getUsers(state),
    nextUrl: usersSelectors.getNextUrl(state),
    isFetching: usersSelectors.getIsFetching(state),
    error: usersSelectors.getError(state),
});

const mapDispatchToProps = {
    getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
