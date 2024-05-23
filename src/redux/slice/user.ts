import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../../models/users/User";
import {getAllUsers} from "../../api/routes";

interface UserState {
    isLoading: boolean;
    error: UserError;
    users: User[];
}
interface UserError {
    isError: boolean;
    data: string | undefined;
}

const initialState: UserState = {
    isLoading: false,
    error: {
        isError: false,
        data: ''
    },
    users: []
}

export const fetchUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    return await getAllUsers()
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = {
                isError: true,
                data: action.error.message
            }
            console.log("Error: ", action.payload)
        })
    }
});

export default userSlice.reducer;
