import Popup from "@/components/common/Popup/Popup";
import styles from "./styles.module.scss";
import { ege, oge } from "@/data/tariffsData.json";
import { useState } from "react";
import { handleLockBodyScroll } from "@/utils/handleLockBodyScroll";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface TestAndPsychologistProps {
    isPro: boolean
    isOge: boolean
    changePoint(value: number[]): void
}

export default function TariffSelection({ isPro, isOge, changePoint }: TestAndPsychologistProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function openPopup(): void {
        setIsPopupOpen(true);
        handleLockBodyScroll("lock");
    }

    function closePopup(): void {
        setIsPopupOpen(false);
        handleLockBodyScroll("unlock");
    }

    function handleChangePoint(tariff: "standart" | "pro"): void {
        if (tariff === "standart") changePoint(isOge ? [3] : [60]);
        if (tariff === "pro") changePoint(isOge ? [5] : [100]);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            {windowWidth >= 768 && <table className={styles.tariffs}>
                <tbody className={styles.tariffs__body}>
                    <tr className={`${styles.tariffs__row} ${styles.tariffs__row_title}`}>
                        <td className={styles.tariffs__name}></td>
                        <td className={`${styles.tariffs__title} ${!isPro && styles.tariffs__title_active}`}>стандарт</td>
                        <td className={styles.tariffs__separator}></td>
                        <td className={`${styles.tariffs__title} ${isPro && styles.tariffs__title_active}`}>про</td>
                    </tr>
                    {!isOge && ege.map((item, index) => (
                        <tr
                            className={`${styles.tariffs__row} ${index === 0 && styles.tariffs__row_firstContentRow}`}
                            key={"tariffEgeItem" + item.name}
                        >
                            <td className={styles.tariffs__name}>{item.name}</td>
                            <td className={`${styles.tariffs__value} ${!isPro && styles.tariffs__value_active}`}>{item.standart}</td>
                            <td className={styles.tariffs__separator}></td>
                            <td className={`${styles.tariffs__value} ${isPro && styles.tariffs__value_active}`}>{item.pro}</td>
                        </tr>
                    ))}
                    {isOge && oge.map((item, index) => (
                        <tr
                            className={`${styles.tariffs__row} ${index === 0 && styles.tariffs__row_firstContentRow}`}
                            key={"tariffOgeItem" + item.name}
                        >
                            <td className={styles.tariffs__name}>{item.name}</td>
                            <td className={`${styles.tariffs__value} ${!isPro && styles.tariffs__value_active}`}>{item.standart}</td>
                            <td className={styles.tariffs__separator}></td>
                            <td className={`${styles.tariffs__value} ${isPro && styles.tariffs__value_active}`}>{item.pro}</td>
                        </tr>
                    ))}
                    <tr className={`${styles.tariffs__row} ${styles.tariffs__row_price}`}>
                        <td className={styles.tariffs__name}></td>
                        <td className={`${styles.tariffs__price} ${!isPro && styles.tariffs__value_active}`}>3 750 ₽</td>
                        <td className={styles.tariffs__separator}></td>
                        <td className={`${styles.tariffs__price} ${isPro && styles.tariffs__value_active}`}>4 030 ₽</td>
                    </tr>
                    <tr className={`${styles.tariffs__row} ${styles.tariffs__row_changeTariff}`}>
                        <td className={styles.tariffs__name}></td>
                        <td className={`${styles.tariffs__changeTariff} ${!isPro && styles.tariffs__value_active}`}>
                            <div
                                className={styles.tariffs__button}
                                onClick={() => handleChangePoint("standart")}
                            >
                                выбрать
                            </div>
                        </td>
                        <td className={styles.tariffs__separator}></td>
                        <td className={`${styles.tariffs__changeTariff} ${isPro && styles.tariffs__value_active}`}>
                            <div
                                className={styles.tariffs__button}
                                onClick={() => handleChangePoint("pro")}
                            >
                                выбрать
                            </div>
                        </td>
                    </tr>
                    <tr className={`${styles.tariffs__row} ${styles.tariffs__row_buy}`}>
                        <td className={styles.tariffs__name}></td>
                        <td className={`${styles.tariffs__buy} ${!isPro && styles.tariffs__buy_active}`}>
                            <div
                                className={styles.tariffs__button}
                                onClick={() => openPopup()}
                            >
                                купить
                            </div>
                        </td>
                        <td className={styles.tariffs__separator}></td>
                        <td className={`${styles.tariffs__buy} ${isPro && styles.tariffs__buy_active}`}>
                            <div
                                className={styles.tariffs__button}
                                onClick={() => openPopup()}
                            >
                                купить
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>}

            {windowWidth < 768 && <div className={styles.lowScreenTariffs}>
                <div className={`${styles.lowScreenTariffs__tariff} ${!isPro && styles.lowScreenTariffs__tariff_active}`}>
                    <div className={styles.lowScreenTariffs__title}>стандарт</div>
                    {!isOge && ege.map((item, index) => (
                        <div
                            className={`
                                ${styles.lowScreenTariffs__rowItem} 
                                ${!isPro && styles.lowScreenTariffs__rowItem_active} 
                                ${index === 0 && styles.lowScreenTariffs__rowItem_firstContentRow}
                            `}
                            key={"tariffEgeItemLowScreen" + item.name}
                        >
                            <div className={styles.lowScreenTariffs__name}>{item.name}</div>
                            <div className={styles.lowScreenTariffs__value}>{item.standart}</div>
                        </div>
                    ))}
                    {isOge && oge.map((item, index) => (
                        <div
                            className={`
                                ${styles.lowScreenTariffs__rowItem} 
                                ${!isPro && styles.lowScreenTariffs__rowItem_active} 
                                ${index === 0 && styles.lowScreenTariffs__rowItem_firstContentRow}
                            `}
                            key={"tariffOgeItemLowScreen" + item.name}
                        >
                            <div className={styles.lowScreenTariffs__name}>{item.name}</div>
                            <div className={styles.lowScreenTariffs__value}>{item.standart}</div>
                        </div>
                    ))}
                    <div className={styles.lowScreenTariffs__price}>3 750 ₽</div>
                    <div className={styles.lowScreenTariffs__buttonRow}>
                        <div
                            className={`
                            ${styles.lowScreenTariffs__button} 
                            ${!isPro && styles.lowScreenTariffs__button_active}
                        `}
                            onClick={() => handleChangePoint("standart")}
                        >
                            выбрать
                        </div>
                    </div>
                    <div className={styles.lowScreenTariffs__buttonRow}>
                        <div
                            className={`
                            ${styles.lowScreenTariffs__button} 
                            ${!isPro && styles.lowScreenTariffs__button_active}
                        `}
                            onClick={() => openPopup()}
                        >
                            купить
                        </div>
                    </div>
                </div>
                <div className={`
                    ${styles.lowScreenTariffs__tariff} 
                    ${isPro && styles.lowScreenTariffs__tariff_active}
                `}>
                    <div className={styles.lowScreenTariffs__title}>про</div>
                    {!isOge && ege.map((item, index) => (
                        <div
                            className={`
                                ${styles.lowScreenTariffs__rowItem} 
                                ${isPro && styles.lowScreenTariffs__rowItem_active} 
                                ${index === 0 && styles.lowScreenTariffs__rowItem_firstContentRow}`}
                            key={"tariffEgeItemLowScreen" + item.name}
                        >
                            <div className={styles.lowScreenTariffs__name}>{item.name}</div>
                            <div className={styles.lowScreenTariffs__value}>{item.pro}</div>
                        </div>
                    ))}
                    {isOge && oge.map((item, index) => (
                        <div
                            className={`
                                ${styles.lowScreenTariffs__rowItem} 
                                ${isPro && styles.lowScreenTariffs__rowItem_active} 
                                ${index === 0 && styles.lowScreenTariffs__rowItem_firstContentRow}
                            `}
                            key={"tariffOgeItemLowScreen" + item.name}
                        >
                            <div className={styles.lowScreenTariffs__name}>{item.name}</div>
                            <div className={styles.lowScreenTariffs__value}>{item.pro}</div>
                        </div>
                    ))}
                    <div className={styles.lowScreenTariffs__price}>4 030 ₽</div>
                    <div className={styles.lowScreenTariffs__buttonRow}>
                        <div
                            className={`
                                ${styles.lowScreenTariffs__button} 
                                ${isPro && styles.lowScreenTariffs__button_active}
                            `}
                            onClick={() => handleChangePoint("pro")}
                        >
                            выбрать
                        </div>
                    </div>
                    <div className={styles.lowScreenTariffs__buttonRow}>
                        <div
                            className={`
                            ${styles.lowScreenTariffs__button} 
                            ${isPro && styles.lowScreenTariffs__button_active}
                        `}
                            onClick={() => openPopup()}
                        >
                            купить
                        </div>
                    </div>
                </div>
            </div >}

            <Popup
                isOpen={isPopupOpen}
                title="Позвоним вам и поможем с оплатой"
                handleClose={() => closePopup()}
            />
        </>
    );
}
