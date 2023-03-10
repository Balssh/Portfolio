import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
                <div className="col-span-12 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-black">
                    <Sidebar />
                </div>
                <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
                    <Navbar />
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    );
}
