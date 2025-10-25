import type { Metadata } from "next"
import "./globals.css"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] })

// export const metadata: Metadata = {
//   title: "Ags financials",
//   description: "easy loans",
//   icons: {
//     icon: "/logo.jpg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark text-black">
        {children}
      </body>
    </html>
  );
}
