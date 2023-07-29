import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import ClickCatcherProvider from "@/hooks/useClickCatcher";
import WindowDimensionsProvider from "@/hooks/useWindowDimensions";
import AppLoader from "@/store/appLoader";
import store from "@/store/createStore";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
    return (

        <Provider store={store}>
            <AppLoader>
                <ClickCatcherProvider>
                    <WindowDimensionsProvider>
                        <div className="pagewrapper" >
                            <Header />
                            <Component {...pageProps} />
                            <Footer />
                        </div>
                    </WindowDimensionsProvider>
                </ClickCatcherProvider>
            </AppLoader>
        </Provider>
    );
}
