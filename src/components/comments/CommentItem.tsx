import React, {FC} from 'react';
import {Comment} from '../../models/comments/Comment'

const CommentItem: FC<Comment> = ({postId, id, name, email, body}) => {
    return (
        <div key={id} className="card w-auto bg-gray-300 text-black m-4">
            <div className="card-body">
                <h1 className="card-title">{name}</h1>
                <h2>{email}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default CommentItem
