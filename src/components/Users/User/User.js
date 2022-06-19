import React from 'react';
import ReactTooltip from "react-tooltip";
import defaultAvatar from '../../../assets/photo-cover.svg';
import {formatPhone} from "../../../utils/format/format";

const User = ({user}) => (
    <div className="user">
        <img
            className="user__photo"
            src={user.photo || defaultAvatar}
            alt={user.name}
            onError={e => {
                e.target.src = defaultAvatar;
            }}
        />
        <div className="user-info-wrapper">
            <h3 className="user__name h2">{user.name}</h3>
            <p className="user__position">{user.position}</p>
            <p className="user__email" data-tip={user.email}>{user.email}</p>
            <ReactTooltip border={false} place={'bottom'} className={'user__tooltip'}/>
            <p className="user__phone">{
                formatPhone(user.phone)}
            </p>
        </div>
    </div>

);

export default User;
