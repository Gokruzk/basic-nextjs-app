import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My First Next App",
  description: "Created by Nigell Jama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
