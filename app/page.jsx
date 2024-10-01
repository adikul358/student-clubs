"use client"
import CLUBS from "./sample"
import ClubCard from "./components/ClubCard";

export default function Home() {
    return (
        <>
        <div className="flex bg-gradient-to-l from-emerald-500 to-white overflow-hidden">
            <div className="w-full py-[72px] max-w-7xl relative mx-auto max-xl:px-4">
                <h1 className="text-6xl max-md:text-5xl font-bold text-emerald-700 tracking-tight z-20">Join Your Dream Club.</h1>
                <p className="mt-12 text-lg font-medium max-w-[600px] opacity-75 z-20">
                    Explore all the premier clubs at SRM Institute of Technology here.
                    Apply to the ones you love.
                </p>
                <img src="/study.png" alt="" className="absolute right-0 top-6 h-[120%] opacity-80 max-md:top-20 max-md:hidden" />
            </div>

        </div>
        <div className="w-full py-[72px] max-w-7xl relative mx-auto max-xl:px-4">
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
                {CLUBS.map(({name, logo, description, color, recruiting}, i) => 
                    <ClubCard key={i} id={i} title={name} logo={logo} desc={description} color={color} recruiting={recruiting} />
                )}
            </div>
        </div>
        </>
    );
}
