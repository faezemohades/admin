import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getBill = createAsyncThunk('Report', async ({ UniqueID,
    StartDate,
    EndDate}) => {
    try {
        const response = await axios.post(`${API_BASE}/Report`, {
            UniqueID: UniqueID,
            StartDate: StartDate,
            EndDate: EndDate,
         });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});
const initialState = {
    bill: [],
    loading: false,
    error: null,
};

export const billSlice = createSlice({
    name: "bill",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBill.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBill.fulfilled, (state, action) => {
                state.loading = false;
                state.bill = action.payload; // Update "users" to "content"
            })
            .addCase(getBill.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default billSlice.reducer;



