import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_BASE } from "../data/apiConfig";

export const getChartBar = createAsyncThunk('getBillChartReport', async (UniqueID) => {
    try {
        const response = await axios.post(`${API_BASE}/getBillChartReport`, {
            UniqueID: UniqueID,
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch host list.');
    }
});

const initialState = {
    chartBar: [],
    loading: false,
    error: null,
};

export const chartBarSlice = createSlice({
    name: "chartBar",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getChartBar.pending, (state) => {
                state.loading = true;
            })
            .addCase(getChartBar.fulfilled, (state, action) => {
                state.loading = false;
                state.chartBar = action.payload; // Update "users" to "host"
            })
            .addCase(getChartBar.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Update "payload" to "error.message"
            });
    },
});

export default chartBarSlice.reducer;



