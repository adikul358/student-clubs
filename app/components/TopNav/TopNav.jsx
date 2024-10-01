"use client"
import Link from 'next/link'
import { useState } from "react"
import { FaUser } from "react-icons/fa6";

export function NavItem({ label, link, active }) {
    return (
        <div></div>
    )
} 

export default function TopNav() {
    const [user, setUser] = useState(false)

    return (
        <nav className="w-full bg-white shadow-lg">
            <div className="flex items-center justify-between max-w-7xl mx-auto max-xl:px-3 h-[60px]">
                <Link href="/"><span className="font-semibold text-xl">SRM Student Clubs</span></Link>
                <div className="flex items-center space-x-2">
                    {user 
                        ? (
                            <>
                            <div className="ml-12 h-8 w-8 rounded-full relative text-white/80 bg-sky-700">
                                <FaUser size={25} className="absolute w-full bottom-0 inset-x-0"/>
                            </div>
                            </>
                        ) : (
                            <>
                            <Link href="/signin"><button className="px-4 text-sm py-2 text-sky-600 rounded-lg border border-sky-600">Sign in</button></Link>
                            <Link href="/signup"><button className="px-4 text-sm py-2 text-white rounded-lg bg-sky-600">Register</button></Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
} 