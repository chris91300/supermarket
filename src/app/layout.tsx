
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";
import Header from './_components/global/header/Header'
import { Toaster } from "sonner";
import ModalAddToCartHandler from "./_components/global/modalAddToCart/ModalAddToCartHandler";
import ModalFavoritesHandler from "./_components/global/modalFavorites/ModalFavoritesHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const bodyStyle = `${inter.className} relative`;
  return (
    <html lang="fr" className="min-h-full">
      <body className={bodyStyle}>
        <Providers>
          <Header />
        {children}
        <ModalAddToCartHandler />
        <ModalFavoritesHandler />
        <Toaster closeButton toastOptions={{
            classNames: {
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            }}}
        />
        </Providers>
      </body>
    </html>
  );
}
