import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getChartLine = createAsyncThunk('getChartReport', async (UniqueID) => {
    try {
        const response = await axios.post(`${API_BASE}/getChartReport`, {
            UniqueID: UniqueID,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});

const initialState = {
    chartLine: [],
    loading: false,
    error: null,
};

export const chartLineSlice = createSlice({
    name: "chartLine",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getChartLine.pending, (state) => {
                state.loading = true;
            })
            .addCase(getChartLine.fulfilled, (state, action) => {
                state.loading = false;
                state.chartLine = action.payload; // Update "users" to "host"
            })
            .addCase(getChartLine.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default chartLineSlice.reducer;



