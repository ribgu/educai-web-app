import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";

export default function Footer() {
    return (
        <div className="grid grid-rows-2 grid-cols-1 min-h-[520px] relative p-2 pt-8">

            <div className="grid grid-cols-2 w-[100%] h-[100%] relative row-span-3">

                <div className="flex flex-col align-bottom justify-evenly px-20 max-h-[72%] min-w-[50%]">
                    <div className="flex align-middle">
                        <figure className="max-h-[40px] max-w-[40px]"><img src="../../public/logos/bookOne.svg" alt="livrinho" /></figure>
                        <h1 className="ml-4 text-[32px] text-white text-center">educAI</h1>
                    </div>
                    
                    <p className="text-wrap max-w-[360px] text-lg">
                        Harnessing the power of artificial inteligence to enhance and empower your experience
                    </p>
                    <div className="flex justify-between w-[200px]">
                        <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                            <SlSocialFacebook size={22}/>
                        </button>
                        <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                            <SlSocialInstagram size={22}/>
                        </button>
                        <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300">
                            <SlSocialTwitter size={22}/>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-1 relative max-h-[72%] min-w-[50%] p-4">
                    <ul className="flex flex-col justify-evenly align-middle">
                        <li className="mb-4"><h1>Company</h1></li>
                        <li><a>About Us</a></li>
                        <li><a>Features</a></li>
                        <li><a>Our Blogs</a></li>
                        <li><a>Integrations</a></li>
                    </ul>

                    <ul className="flex flex-col justify-evenly align-middle">
                        <li className="mb-4"><h1>Marketing</h1></li>
                        <li><a>Terms of Service</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Cookie Settings</a></li>
                        <li><a>Community</a></li>
                    </ul>

                    <ul className="flex flex-col justify-evenly align-middle">
                        <li className="mb-4"><h1>About</h1></li>
                        <li><a>Integragions</a></li>
                        <li><a>Use Case</a></li>
                        <li><a>Customers</a></li>
                        <li><a>Designer</a></li>
                    </ul>
                </div>

            </div>

            <div className="flex justify-center row-span-1 p-4 border-t-white">
                <p className="text-sm">@ 2024 Copyright by EducAI</p>
            </div>
        </div>
    )
}
