import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppDispatch, RootState } from "./createStore";
import getEgeTeachers from "../services/getEgeTeachers";
import { Disciplines, ITeacher } from "@/data/models";

interface IEgeTeachersState {
    entities: ITeacher[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IEgeTeachersState = {
    entities: [],
    isLoading: true,
    error: null
};

const egeTeachersSlice = createSlice({
    name: "egeTeachers",
    initialState,
    reducers: {
        egeTeachersRequested: (state: IEgeTeachersState): void => {
            state.isLoading = true;
        },
        egeTeachersReceived: (
            state: IEgeTeachersState,
            action: PayloadAction<ITeacher[]>
        ): void => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        egeTeachersChanged: (
            state: IEgeTeachersState,
            action: PayloadAction<ITeacher>
        ): void => {
            // const currentState = state.entities;
            // const changedObj = action.payload;
            // const changedState = currentState.map((item) => {
            //     if (item.id === changedObj.id) return changedObj;
            //     return item;
            // });
            // state.entities = changedState;
        },
        egeTeachersRequestFailed: (
            state: IEgeTeachersState,
            action: PayloadAction<string>
        ): void => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: egeTeachersReducer, actions } = egeTeachersSlice;
const { egeTeachersRequested, egeTeachersReceived, egeTeachersChanged, egeTeachersRequestFailed } =
    actions;

export const loadEgeTeachersList =
    () =>
        async (dispatch: AppDispatch): Promise<void> => {
            dispatch(egeTeachersRequested());
            try {
                const egeTeachers = await getEgeTeachers();
                dispatch(egeTeachersReceived(egeTeachers));
            } catch (e: unknown) {
                const error = e as AxiosError;
                dispatch(egeTeachersRequestFailed(error.message));
                console.log(error);
            }
        };

// export const changeEgeTeacher =
//     (payload: ITeacher) =>
//         (dispatch: AppDispatch): void => {
//             dispatch(egeTeachersChanged(payload));
//         };

export const getEgeTeachersList =
    () =>
        (state: RootState): ITeacher[] =>
            state.egeTeachers.entities;

export const getEgeDisciplines =
    () =>
        (state: RootState): Disciplines[] =>
            state.egeTeachers.entities.map(egeTeacher => egeTeacher.discipline);

export const getEgeTeachersLoadingStatus =
    () =>
        (state: RootState): boolean =>
            state.egeTeachers.isLoading;

export default egeTeachersReducer;
