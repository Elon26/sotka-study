import { useState } from "react";
import styles from "./styles.module.scss";
import MainSwitch from "./MainSwitch/MainSwitch";
import StudentsArea from "./StudentsArea/StudentsArea";
import ParentsArea from "./ParentsArea/ParentsArea";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

export default function MainPage(): React.ReactElement {
    const [mainSwitch, setMainSwitch] = useState<"students" | "parents">("students");

    return (
        <>
            <MainSwitch
                mainSwitch={mainSwitch}
                changeMainSwitch={value => setMainSwitch(value)}
            />
            <WhiteSpace
                size="middle"
            />
            {mainSwitch === "students" && <StudentsArea />}
            {mainSwitch === "parents" && <ParentsArea />}
        </>
    );
}
