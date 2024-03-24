import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "./features/documentSlice";
import modalReducer from "./features/modalSlice";
import messagesReducer from "./features/messagesSlice";
import msgLoaderReducer from "./features/msgLoaderSlice";

export const store = configureStore({
    reducer: {
        document: documentReducer,
        modal: modalReducer,
        messages: messagesReducer,
        msgLoader: msgLoaderReducer
    },
});
