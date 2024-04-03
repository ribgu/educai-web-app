import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";



export default function Footer() {
    return (
        <div className="flex flex-col justify-between min-h-[120px] relative px-11 py-2 bg-dark">
            <div className="flex justify-between px-11 grid-span-1">
                <div className="flex align-middle">
                    <figure className="max-h-[40px] max-w-[40px]"><img src="../../public/logos/bookTwo.svg" alt="livrinho" /></figure>
                    <h1 className="ml-4 text-[32px] text-white text-center">educAI</h1>
                </div>

                <div className="flex justify-between w-[220px]">
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                        <SlSocialFacebook size={20} />
                    </button>
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                        <SlSocialInstagram size={20} />
                    </button>
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                        <SlSocialTwitter size={20} />
                    </button>
                </div>
            </div>

            <div className="flex justify-center after:content-[''] after:absolute after:w-[88%] after:h-[1px] after:bg-slate-700">
                <p className="text-sm mt-4">@ 2024 Copyright by EducAI</p>
            </div>
        </div>
    )
}
