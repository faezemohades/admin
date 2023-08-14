import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getTraffic = createAsyncThunk('TrafficReport', async ({UniqueID,StartDate,EndDate,Source }) => {
    try {
        const response = await axios.post(`${API_BASE}/TrafficReport`, {
            UniqueID:UniqueID,
            StartDate:StartDate,
            EndDate:EndDate,
            Source:Source,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});

const initialState = {
    traffic: [],
    loading: false,
    error: null,
};

export const trafficSlice = createSlice({
    name: "traffic",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTraffic.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTraffic.fulfilled, (state, action) => {
                state.loading = false;
                state.traffic = action.payload; // Update "users" to "content"
            })
            .addCase(getTraffic.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default trafficSlice.reducer;



