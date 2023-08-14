import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getContent = createAsyncThunk('getContentList', async ({UniqueID,Title,Language}) => {
    try {
        const response = await axios.post(`${API_BASE}/getContentList`, {
            UniqueID:UniqueID,
            Title:Title,
            Language:Language,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});
const initialState = {
    content: [],
    loading: false,
    error: null,
};

export const contentSlice = createSlice({
    name: "content",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContent.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContent.fulfilled, (state, action) => {
                state.loading = false;
                state.content = action.payload; // Update "users" to "content"
            })
            .addCase(getContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default contentSlice.reducer;



