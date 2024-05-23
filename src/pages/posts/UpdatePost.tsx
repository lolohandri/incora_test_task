import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from "../../redux/store";
import {updatePost} from "../../redux/slice/post";
import {PutPostDto} from "../../models/posts/PutPostDto";

const UpdatePost = () => {
    const navigate = useNavigate()
    const {id} = useParams() as {id: string};
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const dispatch = useAppDispatch()


    const handleUpdateButton = (e: any) => {
        e.preventDefault();

        const newPost: PutPostDto = {
            id: +id,
            title,
            body
        }

        dispatch(updatePost(newPost));
        navigate(-1);
    }

    return (
        <div className="flex items-center mx-auto my-auto card w-96 bg-base-100 shadow-xl p-4">
            <div className="card-body w-full flex items-center">
                <h1 className="card-title">Update post</h1>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type new title"
                        className="input input-bordered w-full"
                        onChange={e => {setTitle(e.target.value)}}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Body</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24"
                              placeholder="Type new body"
                              onChange={e => {setBody(e.target.value)}}
                    ></textarea>
                </label>
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary btn-outline" onClick={handleUpdateButton}>Update</button>
            </div>
        </div>
    );
};

export default UpdatePost;
