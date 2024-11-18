import "./globals.css";
import Header from "../app/components/Header.js";
import Footer from "../app/components/Footer.js";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Joris Koefler&apos;s Website</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </head>
      <body className="bg-gradient-to-r from-zinc-100 to-zinc-200 2xl:max-w-[1536px] mx-auto">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
