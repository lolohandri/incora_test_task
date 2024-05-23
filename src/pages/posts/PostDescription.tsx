import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import UsersLoader from "../users/UsersLoader";
import CommentItem from "../../components/comments/CommentItem";
import {fetchAllComments} from "../../redux/slice/comment";
import {deletePostById} from "../../redux/slice/post";


const PostDescription = () => {
    const {id} = useParams() as { id: string };
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const post = useAppSelector(state => {
        return state.post.posts.find(post => post.id === +id);
    })
    const {comments, isLoading} = useAppSelector(state => state.comment)

    useEffect(() => {
        dispatch(fetchAllComments(+id))
    }, [dispatch, id]);
    
    const handleDelete = (e: any) => {
        e.preventDefault();
        dispatch(deletePostById(+id));
        navigator(-1);
    }

    return (
        <div className="card w-auto p-4 text-primary-content flex gap-4">
            {
                post &&
                <div key={post.id} className="card-body flex-row justify-between border-2 rounded-2xl border-amber-100">
                    <div className='flex flex-col text-black'>
                        <h1 className="card-title">{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <NavLink to={`/posts/${id}/update`} className="btn btn-success btn-outline">Update</NavLink>
                        <button className="btn btn-error btn-outline" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            }
            <h1 className="card-title">Comments</h1>
            {
                comments && !isLoading &&
                comments.map((comment) => {
                    return <CommentItem key={comment.id} {...comment}/>
                })
            }
            {
                isLoading &&
                <UsersLoader/>
            }
        </div>
    );
};

export default PostDescription;
