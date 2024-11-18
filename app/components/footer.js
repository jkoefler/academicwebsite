'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
    { href: "/#about", text: "About Me" },
    { href: "/research", text: "Research" },
    { href: "/teaching", text: "Teaching" },
    { href: "/cv", text: "CV" },
    { href: "/", text: "Contact" },
]

export default function Footer() {
    return (
        <footer className="">
            <nav aria-label="Global" className="flex items-center flex-col gap-12 p-10 lg:px-8">
                <div className="flex flex-row flex-wrap justify-evenly gap-6 sm:gap-12">
                    {navLinks.map(({ href, text }) => <Link href={href} className="footer-nav">{text}</Link>)}
                </div>

                <SocialMediaBar />

                <div className="flex-row mx-auto items-center text-xs font-extralight text-gray-500">
                    <span>© 2024 Joris Koefler, All rights reserved.</span>
                </div>
            </nav>
        </footer>
    );
}

const socialIcons = [
    { href: "https://www.linkedin.com/in/joris-köfler-88009a255/?originalSubdomain=uk", icon: faLinkedinIn },
    { href: "tel:+493419959768", icon: faPhone },
    { href: "mailto:Joris.Koefler@mis.mpg.de", icon: faEnvelope },
]

export function SocialMediaBar() {
    return (
        <div className="flex flex-row mx-auto items-center space-x-10">
            {socialIcons.map(({ href, icon }) =>
                <Link href={href}>
                    <FontAwesomeIcon icon={icon} size="lg" style={{ color: "#8b919c" }} />
                </Link>
            )}
        </div>
    );
}