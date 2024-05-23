import {UserAdress} from "./UserAdress";
import {Company} from "./Company";

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAdress;
    phone: string;
    website: string;
    company: Company;
}