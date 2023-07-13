import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import WindowDimensionsProvider from "@/hooks/useWindowDimensions";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <WindowDimensionsProvider>
            <div className="pagewrapper" >
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </WindowDimensionsProvider>
    );
}
