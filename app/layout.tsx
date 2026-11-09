import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Bright Mind — Exam Practice", description: "Build tests. Practice smarter. Track progress." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
