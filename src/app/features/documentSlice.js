import { createSlice } from "@reduxjs/toolkit";

export const documentSlice = createSlice({
    name: "document",
    initialState: {
        doc: null
    },
    reducers: {
        setDocument: (state, action) => {
        state.doc = action.payload;
        }
    }
});

export const { setDocument } = documentSlice.actions;
export default documentSlice.reducer;

