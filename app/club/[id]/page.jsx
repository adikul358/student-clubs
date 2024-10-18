"use client"
import { useState } from 'react';
import { useParams } from 'next/navigation'
import CLUBS from "../../sample"
import { FaLinkedin } from "react-icons/fa6";

const LeaderCard = ({name, title, linkedin, photo}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-center">
            <img 
                className="w-[240px] aspect-square rounded-full object-cover object-center"
                src={photo} alt="member_image" 
            />
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <h2 className="text-lg text-gray-600">{title}</h2>
            <a href={linkedin} className="text-3xl mt-3 text-[#144295]"><FaLinkedin /></a>
        </div>
    )
}
const MemberCard = ({name, title, degree, batch, linkedin}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-center">
            <h2 className="text-lg font-semibold mt-4">{name}</h2>
            <h2 className="text-lg text-gray-600">{title}</h2>
            <h2 className="text-base text-gray-600 italic">{degree}, {batch}</h2>
            {linkedin && <a href={linkedin} className="text-2xl mt-1 text-[#144295]"><FaLinkedin /></a>}
        </div>
    )
}

const NTLPage = ({activeTab, setActiveTab}) => {
    return (
        <>
        {activeTab == 0 && (
            <div className="text-lg max-w-4xl space-y-4 ">
                <p className="">
                    Elevate your tech journey at SRM Next Tech Lab — where innovation meets collaboration. Dive into specialized domains, experiment freely, and fuel your curiosity in a vibrant, visually pleasing space. Join us now!
                </p>

                <ol className="list-disc list-outside ml-12 font-bold space-y-4">
                    <li>Pausch Lab: <span className="font-normal">
                        Pausch Lab for Human-Computer Interactions works on any field of tech that is closely related to interactive experiences with machines.
                    </span></li>
                    <li>Satoshi Lab: <span className="font-normal">
                        Satoshi Lab for Blockchain and Cybersecurity has a dual focus on the emerging crypto space and the ever-present domain of defending against digital warfare.
                    </span></li>
                    <li>Norman Lab: <span className="font-normal">
                        Norman's dynamic lab is a hub of innovation, deeply immersed in web development, app development, cloud computing, and UI/UX design. With a multidisciplinary approach, Norman seamlessly integrates expertise across these domains to create holistic and cutting-edge solutions. In the realm of web development, Norman's lab is committed to pushing the boundaries of online experiences, ensuring seamless and user-friendly interfaces. The focus extends beyond traditional web applications to include app development, where we craft innovative solutions that leverage the latest technologies and best practices.
                    </span></li>
                    <li>McCarthy Lab: <span className="font-normal">
                        The McCarthy Lab is a dynamic and collaboration-driven group dedicated to research and work to answer deep and foundational questions in the theory of machine learning.
                    </span></li>
                    <li>Tesla Lab: <span className="font-normal">
                        Tesla Lab of IoT, Robotics and Web Development studies and develops a wide range of applications from mobile appliances, fully autonomous devices, and ML on-edge products to fully deployed websites with a beautiful front end to a robust backend.
                    </span></li>
                </ol>

                <img src="https://qs-gen.com/wp-content/uploads/2021/01/SRM-Next_Tech_Lab30March2017.jpg" alt="lab_image" />

            </div>
        )}


        {activeTab == 1 && (
            <div className="text-lg pt-3 space-y-4 grid grid-cols-4 gap-6">
                <LeaderCard 
                    name="Jai Khurana" 
                    title="President" 
                    linkedin="https://www.linkedin.com/in/jaikhuranna/" 
                    photo="/jai-khurana.jpg" 
                />
                <LeaderCard 
                    name="Ishaan Khurana" 
                    title="Syndicate, Norman Lab" 
                    linkedin="https://www.linkedin.com/in/ishaan-khurana-398114212/" 
                    photo="/ishaan.png" 
                />
                <LeaderCard 
                    name="Dhruv Bhojraj" 
                    title="Syndicate, Pausch Lab" 
                    linkedin="https://www.linkedin.com/in/dhruv-bhojaraj-787485250/" 
                    photo="/dhruv-bhojraj.jpg" 
                />
                <LeaderCard 
                    name="Atharva Patil" 
                    title="Syndicate, Tesla Lab" 
                    linkedin="https://www.linkedin.com/in/atharva-patil-5081451b6/" 
                    photo="/atharva.jpg" 
                />
            </div>
        )}


        {activeTab == 2 && (
            <div className="text-lg grid grid-cols-4 gap-2">
                <MemberCard 
                    name="Arvind A" 
                    title="Member"
                    degree="BTech CSE Core" batch={2024}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Vanshika Singh Gaur" 
                    title="Member"
                    degree="BTech CSE BSDS" batch={2025}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Mohd Zaid" 
                    title="Member"
                    degree="BTech Mech. Eng." batch={2025}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Disha Yadav" 
                    title="Member"
                    degree="BTech CSE Core" batch={2026}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Tanmay Agarwal" 
                    title="Associate"
                    degree="BTech CSE SWE" batch={2027}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Aditya Kulshrestha" 
                    title="Associate"
                    degree="BTech CSE SWE" batch={2027}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
            </div>
        )}


        {activeTab == 3 && (
            <div className="text-lg max-w-4xl space-y-4 ">
                <p className="">
                    Reach out to us for any queries!
                </p>

                <ol className="list-disc list-outside ml-12 space-y-4">
                    <li>Instagram: <a href="https://www.instagram.com/nexttechlab/" className="underline text-blue-600">@nexttechlab</a> </li>
                    <li>Linkedin: <a href="https://www.linkedin.com/company/next-tech-lab/mycompany/" className="underline text-blue-600">/next-tech-lab</a> </li>
                    <li>Email: <a href="mailto:ntl@srmist.edu.in" className="underline text-blue-600">ntl@srmist.edu.in</a> </li>
                </ol>

            </div>
        )}
        </>
    )
}

const GDSCPage = ({activeTab, setActiveTab}) => {
    return (
        <>
        {activeTab == 0 && (
            <div className="text-lg max-w-4xl space-y-4 ">
                <img src="https://www.gdgsrm.com/_next/image?url=%2Fassets%2Fimg%2Fevents%2F3.jpg&w=3840&q=75" alt="lab_image" />
                <p className="">
                    Google Developer Student Club (GDSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.
                </p>
                <p className="">
                    Google Developer Clubs can take many forms - from just a few people getting together to watch some videos, to large gatherings with demos, tech talks, hackathons and conferences. We work on various technical domains and try to make use of Google Technologies to empower the audience around us.
                </p>

                <ol className="list-disc list-outside ml-12 font-bold space-y-4">
                    <li>Technical Domain</li>
                    <li>Corparate and Public Relations Domain</li>
                    <li>Creatives and Photography Domain</li>
                </ol>

                <img src="https://www.gdgsrm.com/_next/image?url=%2Fassets%2Fimg%2Fevents%2F2.jpg&w=3840&q=75" alt="lab_image" />

            </div>
        )}


        {activeTab == 1 && (
            <div className="text-lg pt-3 space-y-4 grid grid-cols-4 gap-6">
                <LeaderCard 
                    name="Manvi Singhal" 
                    title="Team Lead" 
                    linkedin="https://www.linkedin.com/in/manvi-singhal-89aa53221/" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2Fmanvi_singhal.png&w=384&q=75" 
                />
                <LeaderCard 
                    name="Mohamed Sami" 
                    title="Technical Lead" 
                    linkedin="https://www.linkedin.com/in/sm-sami/" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2FTechnical%2Fmohamed_sami.jpg&w=384&q=75" 
                />
                <LeaderCard 
                    name="Harsh Kothari" 
                    title="Technical Lead" 
                    linkedin="https://www.linkedin.com/in/kothari-harsh" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2FTechnical%2Fharsh_kothari.jpg&w=384&q=75" 
                />
                <LeaderCard 
                    name="Sai Rohit" 
                    title="Creatives Head" 
                    linkedin="https://www.linkedin.com/in/sairohitp/" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2FCreatives%2Fsai_rohit.png&w=384&q=75" 
                />
                <LeaderCard 
                    name="Aditya Singh" 
                    title="Corporate and Public Relations Lead" 
                    linkedin="https://www.linkedin.com/in/aditya-singh-71a88a213/" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2FC%2526PR%2Faditya_singh.jpg&w=384&q=75" 
                />
                <LeaderCard 
                    name="Sai Rohit" 
                    title="Corporate and Public Relations Lead" 
                    linkedin="https://www.linkedin.com/in/vaibhavd2003" 
                    photo="https://www.gdgsrm.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgdscsrm-images%2FTeam%2FC%2526PR%2Fvaibhav_dogra.jpg&w=384&q=75" 
                />
            </div>
        )}


        {activeTab == 2 && (
            <div className="text-lg grid grid-cols-4 gap-2">
                <MemberCard 
                    name="Mohd Zaid" 
                    title="Member"
                    degree="BTech Mech. Eng." batch={2025}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Tanmay Agarwal" 
                    title="Associate"
                    degree="BTech CSE SWE" batch={2027}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Arvind A" 
                    title="Member"
                    degree="BTech CSE Core" batch={2024}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Vanshika Singh Gaur" 
                    title="Member"
                    degree="BTech CSE BSDS" batch={2025}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
                <MemberCard 
                    name="Disha Yadav" 
                    title="Member"
                    degree="BTech CSE Core" batch={2026}
                    linkedin="https://www.linkedin.com/in/adikul358/" 
                />
            </div>
        )}


        {activeTab == 3 && (
            <div className="text-lg max-w-4xl space-y-4 ">
                <p className="">
                    Reach out to us for any queries!
                </p>

                <ol className="list-disc list-outside ml-12 space-y-4">
                    <li>Instagram: <a href="https://www.instagram.com/gdgsrm/" className="underline text-blue-600">@gdgsrm</a> </li>
                    <li>Linkedin: <a href="https://www.linkedin.com/company/gdgsrm/" className="underline text-blue-600">/gdgsrm</a> </li>
                </ol>

            </div>
        )}
        </>
    )
}

export default function Home() {
    const { id } = useParams()
    const {name, logo, description, color, recruiting} = CLUBS[id]
    const [activeTab, setActiveTab] = useState((id == 0 || id == 3) ? 0 : -1)

    return (
        <>
        <div className="flex flex-col overflow-hidden">
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
            <div className="w-full py-[72px] max-w-7xl justify-between flex flex-col mx-auto max-xl:px-4">
                <div className="flex items-center space-x-2 mb-6">
                    <button onClick={() => setActiveTab(0)} className={`px-4 py-2 rounded border-b-4 hover:bg-gray-100 ${activeTab == 0 ? "border-blue-600 font-semibold " : "border-transparent"}`}>
                        About
                    </button>
                    <button onClick={() => setActiveTab(1)} className={`px-4 py-2 rounded border-b-4 hover:bg-gray-100 ${activeTab == 1 ? "border-blue-600 font-semibold " : "border-transparent"}`}>
                        Leadership
                    </button>
                    <button onClick={() => setActiveTab(2)} className={`px-4 py-2 rounded border-b-4 hover:bg-gray-100 ${activeTab == 2 ? "border-blue-600 font-semibold " : "border-transparent"}`}>
                        Members
                    </button>
                    <button onClick={() => setActiveTab(3)} className={`px-4 py-2 rounded border-b-4 hover:bg-gray-100 ${activeTab == 3 ? "border-blue-600 font-semibold " : "border-transparent"}`}>
                        Contact
                    </button>
                </div>

                {id == 0 && <NTLPage activeTab={activeTab} setActiveTab={setActiveTab}/>}
                {id == 3 && <GDSCPage activeTab={activeTab} setActiveTab={setActiveTab}/>}

            </div>
        </div>
        </>
    );
}
