import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getContentCode = createAsyncThunk('getContentLinks', async ({ UniqueID,ID }) => {
    try {
        const response = await axios.post(`${API_BASE}/getContentLinks`, {
            UniqueID: UniqueID,
            ID: ID,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});
const initialState = {
    contentCode: [],
    loading: false,
    error: null,
};

export const contentCodeSlice = createSlice({
    name: "contentCode",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContentCode.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContentCode.fulfilled, (state, action) => {
                state.loading = false;
                state.contentCode = action.payload; // Update "users" to "content"
            })
            .addCase(getContentCode.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default contentCodeSlice.reducer;



