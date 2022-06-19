import React from 'react';
import User from "../User/User";
import {Col, Row} from "react-bootstrap";

const UsersList = ({usersList}) => (
    <Row>
        {usersList.map(user => (
            <Col key={`user-item-${user.id}`} md={'4'}>
                <User user={user}/>
            </Col>
        ))}
    </Row>
);

export default UsersList;
