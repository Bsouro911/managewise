import type { Metadata } from "next";
import "./globals.css";
import Modal from "@/components/Modal/page";

export const metadata: Metadata = {
  title: "Manage-wise",
  description: "Generated by Souro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
        <Modal />
      </body>
    </html>
  );
}
