import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-gradient-to-r from-green-500 to-blue-600">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
