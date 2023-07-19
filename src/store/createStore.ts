import { combineReducers, configureStore } from "@reduxjs/toolkit";
import egeTeachersReducer from "./egeTeachers";
import ogeTeachersReducer from "./ogeTeachers";

const rootReduser = combineReducers({
    egeTeachers: egeTeachersReducer,
    ogeTeachers: ogeTeachersReducer
});

const store = configureStore({
    reducer: rootReduser
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
