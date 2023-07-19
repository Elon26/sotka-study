import React, { useContext, useEffect, useState } from "react";

interface IWindowDimensionsProps {
    windowWidth: number;
}

const windowDimensionsContext = React.createContext<IWindowDimensionsProps>(
    typeof window !== "undefined"
        ? {
            windowWidth: window.innerWidth
        }
        : {
            windowWidth: 0
        }
);

export const useWindowDimensions = () => {
    return useContext(windowDimensionsContext);
};

const WindowDimensionsProvider = ({
    children
}: {
    children: React.ReactElement;
}): React.ReactElement => {
    const [windowWidth, setwindowWidth] = useState(0);

    useEffect(() => {
        setwindowWidth(window.innerWidth);
        window.addEventListener("resize", () =>
            setwindowWidth(prev => window.innerWidth)
        );
    }, []);

    return (
        <windowDimensionsContext.Provider value={{ windowWidth }}>
            {children}
        </windowDimensionsContext.Provider>
    );
};

export default WindowDimensionsProvider;
