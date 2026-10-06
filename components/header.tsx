'use client'
import { GoogleAnalytics } from "nextjs-google-analytics";
import CookieConsent from "react-cookie-consent";
import Button from "./button"
export default function Header() {
    return (
        <header>
                    <GoogleAnalytics trackPageViews />

            <div className="flex flex-col md:flex-row justify-between items-center content-center py-10 px-5 md:p-10 space-y-5 md:space-y-0">
                <a href="/">
                    <img src="/images/logo-darker.png" alt="amiz" className="logo w-40" />
                </a>
                <nav className="flex flex-row justify-between space-x-4 md:space-x-8">
                    <a className="navLink" href="/what-we-do">What We Do</a>
                    <a className="navLink" href="/who-we-help">Who We Help</a>
                    <a className="navLink" href="/who-we-are">Who We Are</a>
                    {/* <a className="navLink" href="">Case Studies</a> */}
                </nav>
                <Button text="Contact Us" url="/contact" css="button-nav buttonGreen" />
            </div>
        </header>
    )
}