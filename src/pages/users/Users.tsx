import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import user, {fetchUsers} from "../../redux/slice/user";
import UsersLoader from "./UsersLoader";
import UserItem from "../../components/users/UserItem";

const Users = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading} = useAppSelector(state => state.user)

    const headers = () => {
        return <>
            {Object.keys(users[0]).map((item) =>
                <th key={item}>{item.toUpperCase()}</th>
            )}
        </>
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);


    return (
        <div className="overflow-x-auto">
            {!isLoading && users?.length &&
                <table className="table">
                    <thead>
                    <tr>
                        {headers()}
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) =>
                        <UserItem key={user.id} {...user}></UserItem>
                    )}
                    </tbody>
                </table>
            }
            {
                !isLoading && user?.length === 0 &&
                <div className="flex flex-1 justify-center items-center">
                    No Data :(
                </div>
            }
            {isLoading &&
                <UsersLoader/>
            }
        </div>
    );
};

export default Users;
