
import "./globals.css";
import { Faustina, DM_Sans } from "next/font/google";
import Header from '../components/header'
import Link from "next/link"
import { GrInstagram } from "react-icons/gr"
import { GrLinkedin } from "react-icons/gr"


export const metadata = {
  title: "Amiz | Profitably Growing Emerging Brands on Amazon",
  description: "Amazon end-to-end solutions, advertising management and advisory for brands who are new to Amazon, don’t have current bandwidth to support the channel, or just want to up their game.",
  icons:"/facivon.ico"
};

const faustina = Faustina({
  variable: "--font-faustina",
  subsets: ["latin"],
  display: "swap",
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-dark rounded-3xl m-2 p-10">
      <div className="pb-8 flex flex-col md:flex-row justify-between items-center content-center">
        <a href="/">
            <img src="/images/logo.png" alt="amiz" className="" />
        </a>
        <div className="text-light flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-5 text-center mt-5 md:mt-0">
          <Link href="/what-we-do" className="hover:text-purple-shade-1">
            Services
          </Link>
          <Link href="/who-we-help" className="hover:text-purple-shade-1">
            Our Clients
          </Link>
          <Link href="/who-we-are" className="hover:text-purple-shade-1">
            About Us
          </Link>
          {/* <Link href="/case-studies" className="hover:text-purple-shade-1">
            Case Studies
          </Link> */}
          <Link href="/contact" className="hover:text-purple-shade-1">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-light pt-8 flex flex-col md:flex-row justify-between items-center content-center">
        <div className="flex flex-row justify-between space-x-5 mb-5 md:mb-5">
          <Link href="https://www.instagram.com/amzwithamiz/" target="_blank">
            <GrInstagram className="text-light text-3xl hover:text-purple-shade-1"/>
          </Link>
          <Link href="https://www.linkedin.com/company/amiz-consulting/" target="_blank">
            <GrLinkedin className="text-light text-3xl hover:text-purple-shade-1"/>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-light space-y-2 md:space-y-0 md:space-x-5 text-center">
        <p>© Mizrahi Ventures LLC. All Rights Reserved</p>
          <Link href="/privacy-policy" className="hover:text-purple-shade-1">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
    
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmsans.variable}>
      <body>
        <section className="min-h-screen overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
