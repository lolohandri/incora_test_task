import React, {FC} from 'react';
import {Post} from "../../models/posts/Post";
import {NavLink} from "react-router-dom";

const PostItem: FC<Post> = ({id, title, body}) => {
    return (
        <NavLink className="hover:scale-[1.02] transform transition duration-500
            cursor-pointer m-6 rounded-2xl bg-gray-400" to={`/posts/${id}`}
        >
            <div key={id} className="card w-auto m-4 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <button></button>
                </div>
            </div>
        </NavLink>

    );
};

export default PostItem;
