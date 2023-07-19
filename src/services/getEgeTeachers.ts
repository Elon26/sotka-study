import axios from "axios";
import { firebaseUrl } from "../data/contants.json";
import { ITeacher } from "@/data/models";

async function getEgeTeachers(): Promise<ITeacher[]> {
    const response = await axios.get(`${firebaseUrl}egeTeacher.json`);
    const data = Object.values(response.data) as ITeacher[];
    return data;
}

export default getEgeTeachers;
