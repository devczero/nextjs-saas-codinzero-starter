"use client"

import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/nextjs"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
    const { isSignedIn } = useUser();
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="md:relative  text-white absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center h-16">
                    <Link href="/" className="p-2 font-medium">saasName</Link>
                    
                    <div className="flex items-center space-x-4">
                        {isSignedIn ? (
                            <Link href="/dashboard" className="p-2 font-medium">Dashboard</Link>
                        ) : null}
                        <Link
                            href="/pricing"
                            className="block px-3 py-2 text-white hover:text-white/40"
                            onClick={() => setIsOpen(false)}
                        >
                                Pricing
                        </Link>
                        <div className="space-x-4 flex items-center">
                            <SignedOut>
                                <SignInButton/>
                            </SignedOut>
                            <SignedIn>
                                <SignOutButton/>
                            </SignedIn>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden fixed top-0 right-0 z-50 p-4 bg-[#2c2c2c] border border-white/5 backdrop-blur-sm rounded-bl-[100px]">
                    <button
                        onClick={toggleMenu}
                        className=""
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6"/>
                        ) : (
                            <Menu className="h-6 w-6"/>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed inset-0 z-40 ${isOpen ? "" : "pointer-events-none"}`}>
                    <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isOpen? "opacity-100" : "opacity-0"}`} />
                    
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-zinc-900/95 to-zinc-900/98 border-b border-white/10 shadow-2xl transition-all duration-500 ease-out
                                    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                        <div className="px-6 pt-20 pb-6 space-y-4 flex flex-col">
                            <Link 
                                href="/" 
                                onClick={closeMenu}
                                className="p-3 font-medium text-lg tracking-wide bg-gradient-to-r from-white/5 to-white/10 rounded-2xl hover:from-white/10 hover:to-white/20 transition-all duration-300"
                            >
                                Home
                            </Link>
                            {isSignedIn ? (
                                <Link 
                                    href="/dashboard"
                                    onClick={closeMenu}
                                    className="p-3 font-medium text-lg tracking-wide bg-gradient-to-r from-white/5 to-white/10 rounded-2xl hover:from-white/10 hover:to-white/20 transition-all duration-300"
                                >
                                    Dashboard
                                </Link>
                            ) : null}
                            <Link
                                href="/pricing"
                                className="block px-3 py-2 text-white hover:text-white/40"
                                onClick={() => setIsOpen(false)}
                            >
                                    Pricing
                            </Link>
                            <div className="flex items-center pt-4 space-x-3">
                                <SignedOut>
                                    <div className="w-full">
                                        <SignInButton>
                                            <button onClick={closeMenu} className="w-full px-6 py-3 font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/20">
                                                Sign In
                                            </button>
                                        </SignInButton>
                                    </div>
                                </SignedOut>
                                <SignedIn>
                                    <div className="w-full">
                                        <SignOutButton>
                                            <button onClick={closeMenu} className="w-full px-6 py-3 font-medium bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300">
                                                Sign Out
                                            </button>
                                        </SignOutButton>
                                    </div>
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
