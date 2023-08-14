import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logoutStatic: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        //    state.content = initialState.content; 
        },
    },
});

export const { login, logoutStatic } = authSlice.actions;
export default authSlice.reducer;