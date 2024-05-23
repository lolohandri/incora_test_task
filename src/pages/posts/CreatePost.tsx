import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch} from "../../redux/store";
import {PostDto} from "../../models/posts/PostDto";
import {addPost} from "../../redux/slice/post";

const CreatePost = () => {
    const navigator = useNavigate()

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const dispatch = useAppDispatch()

    const handleCreateButton = (e: any) => {
        e.preventDefault();

        const newPost: PostDto = {
            title,
            body
        }

        dispatch(addPost(newPost));
        setTitle('')
        setBody('')
        navigator(-1);
    }

    return (
        <div className="flex items-center mx-auto my-auto card w-96 bg-base-100 shadow-xl p-4">
            <div className="card-body w-full flex items-center">
                <h1 className="card-title">Create new post</h1>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        onChange={e => {setTitle(e.target.value)}}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Body</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24"
                              placeholder="Type here"
                              onChange={e => {setBody(e.target.value)}}
                    ></textarea>
                </label>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary btn-outline" onClick={handleCreateButton}>Create</button>
            </div>
        </div>
    );
};

export default CreatePost;
