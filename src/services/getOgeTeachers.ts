import axios from "axios";
import { firebaseUrl } from "../data/contants.json";
import { ITeacher } from "@/data/models";

async function getOgeTeachers(): Promise<ITeacher[]> {
    const response = await axios.get(`${firebaseUrl}ogeTeacher.json`);
    const data = Object.values(response.data) as ITeacher[];
    return data;
}

export default getOgeTeachers;
