type TypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'lp-title' | 'lp-card-title' | 'lp-main-sentece' | 'lp-team-title' | 'lp-name-team'
    children: React.ReactNode
}

export default function Typography(props: TypographyProps) {
    const { variant, children } = props

    const variantsClasnames = {
        'lp-title': 'font-montserrat text-8xl font-light', // 96px
        'lp-card-title': 'font-manrope text-4xl font-bold text-white',
        'lp-main-sentece': 'text-white text-6xl text-center font-bold' ,
        'lp-team-title': 'text-purple-300 font-montserrat text-4xl font-medium',
        'lp-name-team': 'text-white font-montserrat text-3xl font-semibold',// 48px
        h1: 'font-montserrat text-5xl font-bold', // 48px
        h2: 'font-montserrat text-4xl font-bold', // 36px
        h3: 'font-montserrat text-2xl font-bold', // 24px
        body1: 'font-montserrat text-base font-normal', // 16px
        body2: 'text-white font-montserrat text-sm font-normal' // 14px
    }

    const className = variantsClasnames[variant]

    return (
        <>
            <span className={className}>{children}</span>
        </>
    )
}