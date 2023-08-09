import { useState } from "react"; import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import styles from "./styles.module.scss";
import { generateEndingForPlural, generateEndingForSingular } from "@/utils/generateEnding";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

interface InputRangeProps {
    step: number
    min: number
    max: number
    value: number
    changePoint(value: number[]): void
}

export default function InputRange({ step, min, max, value, changePoint }: InputRangeProps): React.ReactElement {
    const { windowWidth } = useWindowDimensions();

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <Range
                    values={[value]}
                    step={step}
                    min={min}
                    max={max}
                    onChange={(values) => changePoint(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style
                            }}
                            className={styles.trackArea}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    background: getTrackBackground({
                                        values: [value],
                                        colors: ["#1455ff", "#171717"],
                                        min: min,
                                        max: max
                                    }),
                                }}
                                className={styles.track}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                            }}
                            className={styles.rollerOuter}
                        >
                            <div
                                className={styles.rollerInner}
                            />
                        </div>
                    )}
                />
                <output
                    style={{ left: (((value - min) / (max - min)) * 100) + "%" }}
                    id="output"
                    className={styles.output}
                >
                    {windowWidth >= 768
                        ? `${value} балл${generateEndingForSingular(value)}`
                        : value}
                </output>
            </div>
        </div>
    );
}
