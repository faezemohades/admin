import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getHost = createAsyncThunk('getHostList', async (UniqueID) => {
    try {
        const response = await axios.post(`${API_BASE}/getHostList`, {
            UniqueID: UniqueID,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});

const initialState = {
    host: [],
    loading: false,
    error:null,
};

export const hostSlice = createSlice({
    name: "host",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getHost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getHost.fulfilled, (state, action) => {
                state.loading = false;
                state.host = action.payload; // Update "users" to "host"
            })
            .addCase(getHost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default hostSlice.reducer;



 