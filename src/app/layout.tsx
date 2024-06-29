import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eric Rodriguez",
  description: "Eric Rodriguez's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <div className="flex flex-row text-left bg-slate-500 p-8 my-6 rounded-md">
        <a className="mr-10" href={`/`}>Eric Rodriguez</a>
        <a className="mr-10" href={`/projects`}>Projects</a>
        <a href={`/hobbies`}>Hobbies</a>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-800 mt-6 py-6 text-center">
        <h2>Footer fcnyhrzsofnoz;</h2>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head/>
      <body className="mx-auto max-w-2x1 px-6">
        <div className="mx-auto max-w-7xl"> 
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
