'use client'
import { useState } from 'react';
import { Dialog, DialogPanel, DialogBackdrop, PopoverGroup, Button } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import SecondaryButton from "@/app/components/SecondaryButton";



export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: "/#about", text: "About Me" },
        { href: "/research", text: "Research" },
        { href: "/teaching", text: "Teaching" },
        { href: "/cv", text: "CV" },
    ];

    return (
        <header>
            <Navbar setMobileMenuOpen={setMobileMenuOpen} navLinks={navLinks}></Navbar>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <DialogBackdrop className="fixed inset-0 backdrop-blur-xs" />
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo href="/" text="Joris Koefler" />

                        <Button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-8">
                                {navLinks.filter(i => i.text != "Contact").map(i, index => <Link onClick={() => setMobileMenuOpen(false)} href={i.href} key={index} className="links-dialogpanel">{i.text}</Link>)}
                            </div>
                            <div className="py-6">
                                <Link onClick={() => setMobileMenuOpen(false)} href="/" className="links-dialogpanel">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

function Navbar(props) {
    return (
        <nav className="flex items-center justify-between px-4 py-8 lg:px-16 lg:py-10">
            <Logo href="/" text="Joris Koefler" />
            <button type="button" onClick={() => props.setMobileMenuOpen(true)} className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <Bars2Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            <PopoverGroup className="hidden lg:flex lg:gap-x-8">
                {props.navLinks.map(({ href, text }, index) => <SecondaryButton key={index} href={href} text={text} />)}
            </PopoverGroup>
        </nav>);
}

function Logo({ href, text }) {
    return <Link href={href} className="flex-shrink-0 text-3xl font-extrabold text-black">{text}</Link>
}