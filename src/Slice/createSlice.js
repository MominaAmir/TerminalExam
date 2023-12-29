import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmoji = createAsyncThunk('emojis/fetch', async () => {
        const response = await fetch('https://emojihub.yurace.pro/api/all/group/animal-bird');
        const data = await response.json();
        return data;
});

export const initialState = {
    data: null,
    isLoading: false,
    error: null,
};

export const slice = createSlice({
    name: 'Emojis',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmoji.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEmoji.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchEmoji.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default slice.reducer;
