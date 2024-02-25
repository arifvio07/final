import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShoes = createAsyncThunk('shoes/get-shoes', async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const sneakerSlice = createSlice({
    name: "shoes",
    initialState: {
        status: "idle",
        shoes: [] // Menggunakan nama shoes untuk menyimpan data sepatu
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getShoes.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getShoes.fulfilled, (state, action) => {
                state.status = "success";
                state.shoes = action.payload;
            })
            .addCase(getShoes.rejected, (state, action) => {
                state.status = "failed"; 
            });
    },
});

export default sneakerSlice.reducer;