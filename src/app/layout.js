import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavBar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SHAHADA App",
  description: "Help You To Join Islam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-dark  `}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
