import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import EducationBody from "./EducationBody";
import EducationHeaders from "./EducationHeaders";
import styles from "./styles.module.scss";
import { useState } from "react";
import EducationMobile from "./EducationMobile";

export default function Education(): React.ReactElement {
    const { windowWidth } = useWindowDimensions();
    const [selectedHeader, setSelectedHeader] = useState(1);

    function changeSelectedHeader(e: React.MouseEvent<HTMLElement>) {
        const target = e.target as HTMLElement;
        const button = target.closest(`.${styles.header}`) as HTMLElement;
        const buttonNumber = button && button.dataset.infoNumber;
        if (buttonNumber) setSelectedHeader(prev => +buttonNumber);
    }

    return (
        <>
            {windowWidth >= 768 && (
                <div onClick={changeSelectedHeader}>
                    <EducationHeaders selectedHeader={selectedHeader} />
                    <EducationBody selectedHeader={selectedHeader} />
                </div>
            )}
            {windowWidth < 768 && (
                <EducationMobile />
            )}
        </>
    );
}
