import { useState } from 'react'

export default function ClubCard({ title, logo, desc, color, recruiting }) {
    const [focus, setFocus] = useState(false)
    return (
        <div
            className="club-card p-4 rounded-lg border-2 group transition-colors duration-500 ease-out cursor-pointer"
            onMouseEnter={() => setFocus(true)}
            onPointerEnter={() => setFocus(true)}
            onPointerLeave={() => setFocus(false)}
            onMouseLeave={() => setFocus(false)}
            style={{
                backgroundColor: focus ? (color || "#0ea5e9") : "",
                borderColor: `${color || "#0285c7"}BF`,
            }}
        >
            <div className="flex items-end justify-between flex-row-reverse">
                <img src={logo} alt={logo} className={`h-24 w-24 rounded-full ml-3 object-cover ${focus && "drop-shadow-[0px_7px_14px_#ffffffbf]"}`} />
                <div className={`${recruiting ? "justify-between" : "justify-end"} flex flex-col h-24`}>
                    {recruiting && 
                        <span className="py-1 px-3 rounded-full bg-green-600 text-white text-xs  w-max">Recruiting</span>
                    }
                    <h2
                        className={`font-semibold text-xl text-sky-800 ${focus && "text-white"}`}
                        style={{
                            color: focus ? "#ffffff" : (color || "#075985"),
                        }}
                    >{title}</h2>
                </div>
            </div>
            <p className={`mt-3 text-gray-500 line-clamp-2 ${focus && "text-white/80"}`}>{desc}</p>
        </div>
    )
}
