import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import PostItem from "../../components/posts/PostItem";
import UsersLoader from "../users/UsersLoader";
import {fetchPosts} from "../../redux/slice/post";
import {NavLink, useParams} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import {Post} from "../../models/posts/Post";

const Posts = () => {
    const {id} = useParams() as { id: string }
    const {posts, isLoading} = useAppSelector(state => state.post) as {posts: Post[], isLoading: boolean}
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPosts(+id))
    }, [dispatch, id]);

    return (
        <div className="flex flex-col">
            <NavLink to="createPost" className="btn btn-accent btn-outline m-4"><FaPlus/>Add New Post</NavLink>
            {!isLoading && posts?.length &&
                posts.map((post) => {
                    return <PostItem key={post.id} {...post}/>
                })
            }
            {isLoading &&
                <UsersLoader/>
            }
        </div>
    );
};

export default Posts;
