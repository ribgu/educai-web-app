import { BackgroundGradient } from '../MovingBorder/MovingBorder'
import Typography from '../Typography/Typography'

export default function LandingPagePrincing() {
    return (
        <BackgroundGradient className='rounded-[22px] bg-white dark:bg-zinc-900 w-96'>
            <div className='flex flex-col gap-10 p-8 b rounded-lg'>
                <div className='flex flex-col gap-3'>
                    <Typography variant='body2'>JOIN WITH US</Typography>
                    <div className='flex gap-2'>
                        <Typography variant='h2'>PLUS</Typography>
                        <Typography variant='h2'>PLAN</Typography>
                    </div>
                </div>
                <div>
                    <Typography variant='h2'>$30</Typography>
                    <Typography variant='body1'>/mo</Typography>
                </div>
                <div className='flex flex-col'>
                    <Typography variant='body1'>Unlimited Classses</Typography>
                    <Typography variant='body1'>Unlimited Students</Typography>
                </div>
                <button>LEARN MORE</button>
            </div>
        </BackgroundGradient>
    )
}