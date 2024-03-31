type LpCardProps = {
    figure: string,
    iconSide: string,
    title: React.ReactNode,
    subTitle: React.ReactNode
}

export default function LpCard(props: LpCardProps) {
    const { figure, iconSide, title, subTitle } = props

    return (
        <div className='card card-side w-[42%] bg-gradient-to-b from-black via-violet-900 to-purple-900 shadow-xl '>
            <figure className="w-[55%]"><img src={figure} alt="Computer" className="my-6 w-[70%]"/></figure>
            <div className='card-body w-[40%]'>
            <img src={iconSide} alt="Computer" className='w-10'/>
                <span className="text-white text-2xl">{title}</span>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}