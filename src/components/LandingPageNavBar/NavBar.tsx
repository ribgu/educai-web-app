import { Anchor } from "../Anchor";

export default function NavBar() {
    return (
        <div className='flex rounded-2xl w-[50%] h-full border items-center justify-between p-6 pl-14 pr-14'>
            <Anchor path="/">HOME</Anchor>
            <Anchor path="/">SOLUTIONS</Anchor>
            <Anchor path="/">PRICING</Anchor>
            <Anchor path="/">ABOUT US</Anchor>
            <Anchor path="/">CONTACT</Anchor>
        </div>
    )
}