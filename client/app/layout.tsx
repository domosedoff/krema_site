import Header from "../app/components/header/header";
import "./globals.css";

import Sidebar from "@/app/components/sidebar/sidebar";
import PrepareCard from "@/app/prepare-card/page";

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
      <body className="container mx-auto min-h-screen">
        <Header />
        <div className="flex md:flex-row flex-col overflow-hidden">
          <Sidebar />

          {children}
        </div>
      </body>
    </html>
  );
}
