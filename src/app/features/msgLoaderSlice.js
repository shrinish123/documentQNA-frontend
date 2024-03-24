import { createSlice } from "@reduxjs/toolkit";

export const msgLoader = createSlice({
    name: "msgLoader",
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = msgLoader.actions;
export default msgLoader.reducer;

