import "./globals.css";

import localFont from "next/font/local";
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
  title: "Clearline HMO",
  description: "Health Empowered, Tomorrow Secured.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Satoshi.className}>{children}</body>
    </html>
  );
}
