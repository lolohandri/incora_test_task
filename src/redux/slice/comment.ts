import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllComments} from "../../api/routes";
import {Comment} from "../../models/comments/Comment";

interface CommentState {
    isLoading: boolean;
    isError: boolean;
    comments: Comment[];
}

const initialState: CommentState = {
    isLoading: false,
    isError: false,
    comments: []
}

export const fetchAllComments = createAsyncThunk('comments/fetchAllCommentsByPostId', async (postId: number) => {
    return await getAllComments(postId);
})

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllComments.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
        builder.addCase(fetchAllComments.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error: ", action.payload)
        })
    }
});

export default commentSlice.reducer;
