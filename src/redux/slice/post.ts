import {Post} from "../../models/posts/Post";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createPost, deletePost, getPostById, getPostsByUserId, putPost} from "../../api/routes";
import {PostDto} from "../../models/posts/PostDto";
import {PutPostDto} from "../../models/posts/PutPostDto";

interface PostState {
    isLoading: boolean;
    isError: boolean;
    posts: Post[];
}

const initialState: PostState = {
    isLoading: false,
    isError: false,
    posts: []
}

export const fetchPosts = createAsyncThunk('posts/getPostsWithUserId', async (userId: number) => {
    return await getPostsByUserId(userId);
})
export const fetchOnePost = createAsyncThunk('posts/getPostsWithUserId', async (id: number) => {
    return await getPostById(id);
})
export const fetchCreatePost = createAsyncThunk('posts/createPost', async (body: PostDto) => {
    return await createPost(body)
})
export const fetchDeletePost = createAsyncThunk('posts/deletePost', async (id: number) => {
    return await deletePost(id)
})
export const fetchPutPost = createAsyncThunk('posts/deletePost', async (body: PutPostDto) => {
    return await putPost(body)
})

export const postSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addPost: (state, action) => {
            fetchCreatePost(action.payload);
            state.posts.push(action.payload);
        },
        updatePost: (state, action) => {
            fetchPutPost(action.payload);

        },
        deletePostById: (state, action) => {
            fetchDeletePost(action.payload);
            state.posts = state.posts.filter(post => post.id !== action.payload);
        }
    },
    extraReducers: builder => {
        //Fetching posts data
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error: ", action.payload)
        })

        // //Creating post data
        // builder.addCase(fetchCreatePost.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.posts.push(action.payload);
        // })
        // builder.addCase(fetchCreatePost.pending, (state) => {
        //     state.isLoading = true;
        // })
        // builder.addCase(fetchCreatePost.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     console.log("Error: ", action.payload)
        // })
    }
});

export const {addPost, deletePostById, updatePost} = postSlice.actions;
export default postSlice.reducer;