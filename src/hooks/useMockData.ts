import { useEffect, useState } from "react";
import egeTeachers from "../data/ege-teachers.json";
import ogeTeachers from "../data/oge-teachers.json";
import putItemToFirebase from "@/services/putItemToFirebase";
import { ITeacher } from "@/data/models";

const useMockData = () => {
    const statusConst = {
        idle: "Not Started",
        pending: "In Process",
        succesed: "Ready",
        error: "Error Occured"
    };

    const [status, setStatus] = useState(statusConst.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summCount =
        egeTeachers.length + ogeTeachers.length;

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConst.idle) {
            setStatus(statusConst.pending);
        }

        const newProgress = Math.floor((count / summCount) * 100);
        if (newProgress > progress) {
            setProgress(() => newProgress);
        }

        if (newProgress === 100) {
            setStatus(statusConst.succesed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const egeTeacher of egeTeachers) {
                const teacher = egeTeacher as ITeacher;
                await putItemToFirebase("egeTeacher", teacher);
                incrementCount();
            }
            for (const ogeTeacher of ogeTeachers) {
                const teacher = ogeTeacher as ITeacher;
                await putItemToFirebase("ogeTeacher", teacher);
                incrementCount();
            }
        } catch (error) {
            console.log(error);
            setStatus(statusConst.error);
        }
    }

    return { initialize, progress, status };
};

export default useMockData;
