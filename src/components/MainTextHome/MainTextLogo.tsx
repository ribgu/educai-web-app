import Typography from '../Typography/Typography'

export default function MainTextLogo() {
    return (
        <div className='flex flex-col items-center text-white text-center gap-y-8'>
            <Typography variant='lp-title'>CHANGING THE <br />
                <span className=' bg-gradient-to-b from-violet-900 to-violet-500 text-transparent bg-clip-text'> WAY</span> YOU
                <span className='bg-gradient-to-b from-violet-900 to-violet-500 text-transparent bg-clip-text'> LEARN</span>
            </Typography>

            <Typography variant="body1">WITH THE POWER OF <span className='bg-gradient-to-b from-violet-900 to-violet-500 text-transparent bg-clip-text'>AI</span></Typography>
        </div>
        
    )
}

