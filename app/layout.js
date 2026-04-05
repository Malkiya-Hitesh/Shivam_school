import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});


// export const metadata = {
//   metadataBase: new URL("https://gnanagangothrividyalaya.in"),

//   title: {
//     default: "Gnana Gangothri Vidyalaya",
//     template: "%s | Gnana Gangothri Vidyalaya",
//   },

//   description:
//     "Gnana Gangothri Vidyalaya providing quality education and holistic development.",

//   authors: [{ name: "Malkiya Hitesh" }],

//   robots: {
//     index: true,
//     follow: true,
//   },

//   alternates: {
//     canonical: "https://gnanagangothrividyalaya.in",
//   },

//   openGraph: {
//     title: "Gnana Gangothri Vidyalaya",
//     description:
//       "Gnana Gangothri Vidyalaya providing quality education and holistic development.",
//     siteName: "Gnana Gangothri Vidyalaya",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "/image/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Gnana Gangothri Vidyalaya",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Gnana Gangothri Vidyalaya",
//     description:
//       "Gnana Gangothri Vidyalaya providing quality education and holistic development.",
//     images: ["/image/logo.png"],
//   },
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
     {children}
     {/* <Footer /> */}
      </body>
    </html>
  );
}
