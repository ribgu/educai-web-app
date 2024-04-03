import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import Typography from "../Typography/Typography";
import Logo from "../Logo/Logo";


export default function Footer() {
    return (
        <div className="flex flex-col justify-between min-h-[100px] relative px-11 py-2 bg-dark">
            <div className="flex justify-between items-center px-11 h-[58%]">
                <div className="flex items-center justify-center w-[148px]">
                    <Logo variant="bookTwo" width="lg" />
                    <Typography variant="h3">educAI</Typography>
                </div>

                <div className="flex justify-between w-[180px]">
                    <button className="btn btn-circle btn-outline">
                        <SlSocialFacebook/>
                    </button>
                    <button className="btn btn-circle btn-outline">
                        <SlSocialInstagram />
                    </button>
                    <button className="btn btn-circle btn-outline">
                        <SlSocialTwitter />
                    </button>
                    
                </div>
            </div>

            <div className="flex items-bottom justify-center pt-2 h-[42%] after:content-[''] after:absolute after:w-[88%] after:h-[1px] after:bg-slate-700 after:mb-4">
                <Typography variant="body2">@2024 Copyright by educAI</Typography>
            </div>
        </div>
    )
}

