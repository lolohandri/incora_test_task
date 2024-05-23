import {Coordinates} from "./Coordinates";

export interface UserAdress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Coordinates;
}