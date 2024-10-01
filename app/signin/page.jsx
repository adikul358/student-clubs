"use client"
import Link from "next/link";

export default function Home() {

    return (
        <>
        <div className="flex justify-center items-center flex-grow bg-no-repeat bg-cover relative">
            <img className="-z-10 absolute w-full h-full inset-0 opacity-90 blur scale-105" src='https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/02/SRMIST-Lakeview_opt.jpg' />
            <div className="z-20 bg-white w-full max-w-md rounded-lg shadow p-6 pt-12 flex flex-col">
                <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

                <label htmlFor="" className="font-medium mt-3">Email</label>
                <input type="email" className="px-3 py-2 border border-gray-400 mt-1 rounded-lg" placeholder="Your Email"/>
                <label htmlFor="" className="font-medium mt-3">Password</label>
                <input type="password" className="px-3 py-2 border border-gray-400 mt-1 rounded-lg" placeholder="Your Password"/>

                <button className="bg-sky-600 w-full py-2 mt-6 text-white font-medium rounded-lg ml-auto">
                    Sign In
                </button>

                <Link href="/register">
                <button className="border text-sky-600 border-sky-600 w-full py-2 mt-3 font-medium rounded-lg ml-auto">
                    Register
                </button>
                </Link>
            </div>
        </div>
        </>
    );
}
