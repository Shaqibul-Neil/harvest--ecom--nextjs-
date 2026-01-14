import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/shared/header/MainHeader";
import Provider from "@/provider/Provider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harvest",
  description: "An E-commerce app for fresh vegetables and fruits",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Header */}
          <MainHeader />
          {/* content */}
          <main>{children}</main>
          {/* Toast */}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              loading: {
                className: "bg-slate-50 text-slate-700 border border-slate-200",
              },
              success: {
                className: "bg-green-50 text-green-800 border border-green-200",
              },
              error: {
                className: "bg-red-50 text-red-800 border border-red-200",
              },
            }}
          />
        </body>
      </html>
    </Provider>
  );
}
