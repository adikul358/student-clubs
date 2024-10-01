"use client"
import { useParams } from 'next/navigation'
import CLUBS from "../../sample"
import ClubCard from "../../components/ClubCard";

export default function Home() {
    const { id } = useParams()
    const {name, logo, description, color, recruiting} = CLUBS[id]

    return (
        <>
        <div className="flex overflow-hidden ">
            <div className="w-full py-[72px] max-w-7xl justify-between flex mx-auto max-xl:px-4">
                <div>
                    <h1 className="text-4xl max-md:text-5xl font-bold tracking-tight z-20">
                        {name}
                    </h1>
                    <p className="mt-12 text-lg max-w-[600px] opacity-75 z-20">
                        {description}
                    </p>
                    {recruiting ? (
                        <button className="bg-green-600 w-64 py-2 mt-6 text-white font-medium rounded-lg ml-auto">
                            Apply Now
                        </button>

                    ) : (
                        <button className="bg-gray-600 w-64 py-2 mt-6 text-white font-medium rounded-lg ml-auto">
                            Applications Closed
                        </button>

                    )}
                </div>
                <img src={logo} alt="" className="w-[240px] object-contain" />
            </div>

        </div>
        </>
    );
}
