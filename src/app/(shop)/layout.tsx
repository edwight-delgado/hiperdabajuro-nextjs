import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../../public/css/vendor/icofont.min.css";
import "../../../public/css/vendor/line-awesome.min.css";
import "../../../public/css/vendor/simple-line-icons.css";
import "../../../public/css/style.css";
import { TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins text-dark text-sm leading-loose`}>
        <TopMenu></TopMenu>
        {children}
      </body>
    </html>
  );
}
