import { Manrope } from "next/font/google";
import "../globals.css";

const manRope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Penthusiasts",
  description: "Generated by Penthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manRope.className} antialiased`}>{children}</body>
    </html>
  );
}
