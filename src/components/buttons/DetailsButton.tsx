import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

interface Props{
    userId: number;
}

const DetailsButton: FC<Props> = (props) =>
    (
        <>
            <NavLink to={`${props.userId}/posts`} className="btn btn-outline btn-accent">Details</NavLink>
        </>
    );

export default DetailsButton;
