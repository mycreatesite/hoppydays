import { Playfair_Display } from 'next/font/google';
import { Sawarabi_Gothic } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
  display: "swap",
})

export const sawarabiGothic = Sawarabi_Gothic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sawarabiGothic",
  display: "swap",
})