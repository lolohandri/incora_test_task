import React from 'react';
import AddressComponent from "./AddressComponent";
import CompanyComponent from "./CompanyComponent";
import {FC} from "react";
import {User} from "../../models/users/User";
import DetailsButton from "../buttons/DetailsButton";


const UserItem: FC<User> = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <AddressComponent {...address}/>
                </td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>
                    <CompanyComponent {...company}/>
                </td>
                <td>
                    <DetailsButton userId={id}/>
                </td>
            </tr>
        </>
    );
};

export default UserItem;
