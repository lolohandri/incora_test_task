import React from 'react';

const UsersLoader = () => {
    return (
        <div className="flex flex-col gap-4 p-4 w-full">
            <div className="skeleton h-16 w-full"></div>
            <div className="skeleton h-16 w-full"></div>
            <div className="skeleton h-16 w-full"></div>
            <div className="skeleton h-16 w-full"></div>
        </div>
    );
};

export default UsersLoader;
