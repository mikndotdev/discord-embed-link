"use client";
import { useSwetrix } from "@swetrix/nextjs";

export default function RootLayout({
    children,
}: { children: React.ReactNode }) {
    useSwetrix("yPEa4vPR6g5l", {
        apiURL: "https://analytics.mikandev.tech/log",
    });

    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
