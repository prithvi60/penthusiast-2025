import { Manrope } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
const manRope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Content is the King | Content Writing Agency | Penthusiasts",
  description:
    "Elevate your brand with our content writing services. Expert copywriting services to engage your audience and boost your online presence. Contact us today!",
  canonical: "https://penthusiasts.com",
  metadataBase: new URL("https://penthusiasts.com"),
  openGraph: {
    title: "Penthusiasts",
    description:
      "Elevate your brand with our content writing services. Expert copywriting services to engage your audience and boost your online presence. Contact us today!",
    url: "https://penthusiasts.com",
    images: [
      {
        url: "https://ik.imagekit.io/webibee/penthusiast_logo_full.png",
        width: 1200,
        height: 630,
        alt: "Penthusiasts",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Calendly widget stylesheet globally */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${manRope.className} antialiased`}>{children}</body>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmId}');
        `}
          </Script>
        </>
      )}
    </html>
  );
}
