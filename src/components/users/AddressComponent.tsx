import React, {FC} from 'react';
import {UserAdress} from "../../models/users/UserAdress";

const AddressComponent: FC<UserAdress> = ({street, suite, city, zipcode, geo}) => {
    return (
        <div className="flex flex-col p-1">
            <span>Street: {street}</span>
            <span>Suite: {suite}</span>
            <span>City: {city}</span>
            <span>Zipcode: {zipcode}</span>
            <span>Coordinates:
                <br/> lat: {geo.lat}
                <br/> lat: {geo.lng}
            </span>
        </div>
    );
};

export default AddressComponent;
