import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";

interface IClickCatcherContextProps {
    elemInFocus: Element | null;
}

const defaultSort = {
    elemInFocus: null
};

const ClickCatcherContext =
    React.createContext<IClickCatcherContextProps>(defaultSort);

export const useClickCatcher = () => {
    return useContext(ClickCatcherContext);
};

const ClickCatcherProvider = ({
    children
}: {
    children: React.ReactElement;
}) => {
    const [elemInFocus, setElemInFocus] = useState<Element | null>(null);

    const clickCatcher = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof Element) {
            setElemInFocus(e.target);
        }
    };

    return (
        <ClickCatcherContext.Provider
            value={{
                elemInFocus
            }}
        >
            <div onClick={clickCatcher}>{children}</div>
        </ClickCatcherContext.Provider>
    );
};

export default ClickCatcherProvider;
