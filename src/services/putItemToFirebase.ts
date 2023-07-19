import axios from "axios";
import { firebaseUrl } from "../data/contants.json";
import { ITeacher } from "../data/models";

export default async function putItemToFirebase(
    entity: string,
    data: ITeacher
): Promise<void> {
    await axios.put(firebaseUrl + entity + "/" + data.id + ".json", data);
}
