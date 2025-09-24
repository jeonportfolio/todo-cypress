import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

function createStore() {
    const store = configureStore({
        reducer: {
            todo: todoReducer,
        }
    });

    return store;
}

const store = createStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;