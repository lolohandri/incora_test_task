import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slice/user";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {postSlice} from "./slice/post";
import {commentSlice} from "./slice/comment";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        post: postSlice.reducer,
        comment: commentSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;