import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppDispatch, RootState } from "./createStore";
import getOgeTeachers from "../services/getOgeTeachers";
import { Disciplines, ITeacher } from "@/data/models";

interface IOgeTeachersState {
    entities: ITeacher[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IOgeTeachersState = {
    entities: [],
    isLoading: true,
    error: null
};

const ogeTeachersSlice = createSlice({
    name: "ogeTeachers",
    initialState,
    reducers: {
        ogeTeachersRequested: (state: IOgeTeachersState): void => {
            state.isLoading = true;
        },
        ogeTeachersReceived: (
            state: IOgeTeachersState,
            action: PayloadAction<ITeacher[]>
        ): void => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        ogeTeachersChanged: (
            state: IOgeTeachersState,
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
        ogeTeachersRequestFailed: (
            state: IOgeTeachersState,
            action: PayloadAction<string>
        ): void => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: ogeTeachersReducer, actions } = ogeTeachersSlice;
const { ogeTeachersRequested, ogeTeachersReceived, ogeTeachersChanged, ogeTeachersRequestFailed } =
    actions;

export const loadOgeTeachersList =
    () =>
        async (dispatch: AppDispatch): Promise<void> => {
            dispatch(ogeTeachersRequested());
            try {
                const ogeTeachers = await getOgeTeachers();
                dispatch(ogeTeachersReceived(ogeTeachers));
            } catch (e: unknown) {
                const error = e as AxiosError;
                dispatch(ogeTeachersRequestFailed(error.message));
                console.log(error);
            }
        };

// export const changeOgeTeacher =
//     (payload: IOgeTeacher) =>
//         (dispatch: AppDispatch): void => {
//             dispatch(ogeTeachersChanged(payload));
//         };

export const getOgeTeachersList =
    () =>
        (state: RootState): ITeacher[] =>
            state.ogeTeachers.entities;

export const getOgeTeacher =
    (discipline: Disciplines) =>
        (state: RootState): ITeacher | null =>
            state.ogeTeachers.entities.find(teacher => teacher.discipline === discipline) || null;

export const getOgeDisciplines =
    () =>
        (state: RootState): Disciplines[] =>
            state.ogeTeachers.entities.map(ogeTeacher => ogeTeacher.discipline);

export const getOgeTeachersLoadingStatus =
    () =>
        (state: RootState): boolean =>
            state.ogeTeachers.isLoading;

export default ogeTeachersReducer;
