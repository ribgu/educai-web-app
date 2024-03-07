import { Anchor } from "../Anchor";

export default function NavBar() {
    return (
        <div className="bg-blue-500 h-20">
            <div className='flex rounded-2xl w-[50%] h-full border items-center justify-between p-10'>
                <Anchor path="/">HOME</Anchor>
                <Anchor path="/">SOLUTIONS</Anchor>
                <Anchor path="/">PRICING</Anchor>
                <Anchor path="/">ABOUT US</Anchor>
                <Anchor path="/">CONTACT</Anchor>
            </div>
        </div>
    )
}