import "./globals.css";
import Provider from "@/provider/Provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/footer/Footer";
import localFont from "next/font/local";
import Navbar from "@/components/shared/header/Navbar";
import NextTopLoader from "nextjs-toploader";

const poppins = localFont({
  src: [
    {
      path: "./../fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: { default: "Harvest", template: "%s | Harvest" },
  description: "An E-commerce app for fresh vegetables and fruits",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          {/* Top Loader */}
          <NextTopLoader
            color="#16a34a"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #16a34a,0 0 5px #16a34a"
          />
          {/* Header */}
          <Navbar />
          {/* content */}
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <Footer />
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
