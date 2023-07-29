import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { wrapAsyncFunction } from "../utils/wrapAsyncFunction";
import { AxiosError } from "axios";
import Loader from "../components/common/Loader/Loader";
import { getEgeTeachersLoadingStatus, loadEgeTeachersList } from "./egeTeachers";
import { getOgeTeachersLoadingStatus, loadOgeTeachersList } from "./ogeTeachers";

const AppLoader = ({
    children
}: {
    children: React.ReactElement;
}): React.ReactElement => {
    const dispatch = useAppDispatch();
    const isEgeTeachersLoading = useAppSelector(getEgeTeachersLoadingStatus());
    const isOgeTeachersLoading = useAppSelector(getOgeTeachersLoadingStatus());

    const fetchData = async (): Promise<void> => {
        try {
            await Promise.all([
                dispatch(loadEgeTeachersList()),
                dispatch(loadOgeTeachersList())
            ]);
        } catch (e) {
            const error = e as AxiosError;
            console.log(error);
        }
    };

    useEffect(wrapAsyncFunction(fetchData), []);

    if (isEgeTeachersLoading || isOgeTeachersLoading) return <Loader />;

    return <>{children}</>;
};

export default AppLoader;
