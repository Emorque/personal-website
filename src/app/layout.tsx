import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const inter = Merriweather({
    subsets: ["latin"],
    weight: '400', 
  });

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
      <div className="flex flex-row text-left bg-Zcolor2 p-8 my-6 rounded-md">
        <a className="mr-10" href={`/`}>Eric Rodriguez</a>
        <a className="mr-10" href={`/projects`}>Projects</a>
        <a href={`/hobbies`}>Hobbies</a>
      </div>
    </header>
  )

  const footer = (
    <footer className="fixed bottom-0 left-0 right-0 text-white flex justify-between items-center p-4 text-xl">
      <div className="flex flex-col hover:animate-pulse">
        <h2>Eric</h2>
        <h2>Rodriguez</h2>
      </div>
      <div id="footer_links" className="flex flex-row space-x-4"> {/*Look into potential using "hidden" on this element when the width gets really small */}
        <a id="linkedIn" href="https://www.linkedin.com/in/emorque/" className="hover:animate-pulse">LinkedIn</a>
        <a id="GitHub" href="https://github.com/Emorque" className="hover:animate-pulse">GitHub</a>
        <a id="Email" className="hover:animate-pulse">Shoot me an Email</a>
      </div>
    </footer>
  );
  

  return (
    <html lang="en" className={inter.className}>
      <head/>
      <body className="mx-auto max-w-2x1 px-6 bg-Zcolor text-2xl"> {/*bg-gradient-to-r from-purple-950 via-purple-600 to-purple-950*/}
        <div> {/* className="mx-auto max-w-7xl"*/}
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
