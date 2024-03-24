import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        messages : []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }
});

export const { addMessage,clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer;

