import "./globals.css";
import {GoogleAnalytics} from "@next/third-parties/google"
import localFont from "next/font/local";
import Script from "next/script";
const Satoshi = localFont({
  src: [
    {
      path: "../font/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata = {
  metadataBase: new URL("https://clearlinehmo.com"),
  title: "Clearline HMO",
  description: "Health Empowered, Tomorrow Secured.",
  openGraph: {
    title: "Clearline HMO",
    description: "Health Empowered, Tomorrow Secured",
    images: "/assets/images/ClearlineLogo.png",
    url: "https://clearlinehmo.com",
    siteName: "ClearlineHMO",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>
        <GoogleAnalytics gaId="G-Y62EZR4VWP"/>
        {children}
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive" // Ensures the script is loaded before your components
        />
        </body>

    </html>
  );
}
