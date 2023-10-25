import type {Metadata} from "next"
import {Merriweather} from "next/font/google"
import "./globals.css"
import Layout from "@/components/Layout"
import Nav from "@/components/Nav"

const merri = Merriweather({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Zodiac",
    description: "Horoscope Forecasts App",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.png"
                    type="image/png"
                />
            </head>
            <body className={merri.className}>
                <Nav />
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
