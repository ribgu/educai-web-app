import NavBar from '../components/LandingPageNavBar/NavBar'
import MainTextLogo from '../components/MainTextHome/MainTextLogo'
import Button from '../components/Button/Button'
import LpCard from '../components/LpCard/LpCard'
import Typography from '../components/Typography/Typography'
import Logo from '../components/Logo/Logo'
import CardTeam from '../components/CardTeam/CardTeam'
import LandingPagePrincing from '../components/LandingPagePricing/LandingPagePrincing'
import Footer from '../components/Footer/Footer'

export default function LandingPage() {
    return (
        <div className='flex flex-col bg-black'>
            {/* Home */}
            <div className='flex flex-col h-screen items-center bg-dark'>
                <div className='flex flex-col w-full h-full max-w-screen-xl'>
                    <div className='flex w-full h-[15%] items-center justify-between px-10'>

                        <div className='flex-1'>
                            <Logo variant='padraoWhite' width='lg'/>
                        </div>

                        <div className='flex w-[70%] justify-center h-[40%]'>
                            <NavBar />
                        </div>

                        <div className='flex-1 flex justify-end'>
                            <Button variant='primary'>LOGIN</Button>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-[85%] bg-[url(../../public/Gradientes/gradienteHome.png)] bg-no-repeat bg-center justify-center items-center'>
                        <MainTextLogo />

                        <div className='flex w-full justify-center gap-12 mt-12'>
                            <Button variant='primary'>CONTACT US</Button>
                            <Button variant='secondary'>TRY A DEMO</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions */}
            <div className='flex flex-col h-screen items-center justify-center bg-dark'>
                <div className='flex w-[85%] flex-wrap justify-between gap-y-16'>
                    <LpCard figure='../../public/IconCards/iconCard01.svg' iconSide='../public/IconCards/miniIconCard01.svg'
                        title={<>Create <span className='text-purple-300'>Exercises</span> In Minute</>} subTitle='With AI Copilot' />
                    <LpCard figure='../../public/IconCards/iconCard02.svg' iconSide='../public/IconCards/miniIconCard02.svg'
                        title={<>Students More <span className='text-purple-300'>Engaged</span></>} subTitle='With AI Copilot' />
                    <LpCard figure='../../public/IconCards/iconCard03.svg' iconSide='../public/IconCards/miniIconCard03.svg'
                        title={<>Focus On Language <span className='text-purple-300'>Practice</span></>} subTitle='With AI Copilot' />
                    <LpCard figure='../../public/IconCards/iconCard04.svg' iconSide='../public/IconCards/miniIconCard04.svg'
                        title={<>We Believe In <span className='text-purple-300'>Realtime Feedbacks</span></>} subTitle='With AI Copilot' />
                </div>
            </div>

            {/* Pricing */}
            <div className='flex flex-col h-screen items-center bg-dark justify-center gap-10'>
                <Typography variant='lp-main-sentece'>
                    CHOOSE YOUR PLAN
                </Typography>
                <div className='flex'>
                <Typography variant='h2' color='white' >
                    Ready to  <Typography variant='h2' color='purple-300' >
                         join</Typography> <Typography variant='h2' color='white' > the language teaching</Typography>
                         <Typography variant='h2' color='purple-300 '> revolution?</Typography> </Typography>   
                </div>

                <div className='flex gap-20'>
                <LandingPagePrincing variant='plus' />
                <LandingPagePrincing variant='premium' />
                </div>
                
            </div>

            {/* About Us */}
            <div className='flex flex-col h-screen items-center bg-dark'>
                <div className='flex w-[80%] h-full justify-center items-center'>
                    <Typography variant='lp-main-sentece'>OUR MISSION IS TO <span className='text-purple-300'>INNOVATE</span> LANGUAGE TEACHING IN <span className='text-purple-300'>BRAZIL</span>, BELIEVING THAT THE <span className='text-purple-300'>AI</span> AND <span className='text-purple-300'>HUMAN</span> CONNECTION IS THE <span className='text-purple-300'>KEY</span>.</Typography>
                </div>
            </div>

            {/* Contact */}
            <div className='flex flex-col h-screen items-center bg-dark'>
                <div className='flex flex-col cp w-[80%] h-full justify-center items-center gap-3'>
                    <Typography variant='lp-team-title'>OUR TEAM</Typography>
                    <img src='../../public/Logos/logoSemIcon.svg'></img>
                    <CardTeam/>
                </div>
            </div>

            <div className='flex flex-col items-center bg-dark'>
                <div className='flex flex-col cp w-[90%] justify-center items-center gap-3'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
