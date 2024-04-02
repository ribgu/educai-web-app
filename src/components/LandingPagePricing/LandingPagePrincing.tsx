import Button from '../Button/Button'
import Typography from '../Typography/Typography'

export default function LandingPagePrincing() {
    return (
        <div className='flex flex-col gap-10 p-12 b rounded-3xl border-[#BFA5FF] border-2 pr-36 shadow-inner -ml-9 -mt-12 -mr-20 -mb-0 text-purple-600'>
            {/* box-shadow: inset -9px -12px 20px 0px #6730ec9e */}
            <span className='' style={{background: "url('../../public/Gradientes/gradienteHome.png')"}}></span>
            <div className='flex flex-col gap-3'>
                <Typography variant='body2'>JOIN WITH US</Typography>
                <div className='flex gap-2'>
                    <Typography variant='h2' color='purple-300'>PLUS</Typography>
                    <Typography variant='h2-light'>PLAN</Typography>
                </div>
            </div>
            <div>
                <Typography variant='h2'>$30</Typography>
                <Typography variant='body1'>/mo</Typography>
            </div>
            <div className='flex flex-col mt-6 mb-6'>
                <Typography variant='body1' color='purple-300'>Unlimited Classses</Typography>
                <Typography variant='body1' color='purple-300'>Unlimited Students</Typography>
            </div>
            <div className='w-40'>
                <Button variant='primary'>
                    <Typography variant='body2-bold'>LEARN MORE</Typography>
                </Button>
            </div>
        </div>
    )
}
