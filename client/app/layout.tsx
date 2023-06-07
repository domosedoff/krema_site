import Header from "../app/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import UserPage from "@/app/pages/user-page/user-page";
import Sidebar from "@/app/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kremovar",
  description: "Kremovar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto h-screen">
        <Header />
        <div className="flex">
          <Sidebar />
          <UserPage />
          {children}
        </div>
      </body>
    </html>
  );
}
