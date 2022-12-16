import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="grid grid-cols-12 gap-6 px-12 my-5 lg:px-48">
            <div className="col-span-12 text-center bg-white lg:col-span-3 rounded-2xl">
                <Sidebar />
            </div>
            <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
