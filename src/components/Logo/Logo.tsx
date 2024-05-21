type LogoProps = {
    variant: 'padraoBlack' | 'padraoWhite' | 'bookOne' | 'bookTwo' | 'allWhite'
    width: 'sm' | 'md' | 'lg' | 'ssm' | 'bookSmall'
}

export default function Logo(props: LogoProps) {
    const { variant, width } = props

    const mapWidthToClassNames = {
        bookSmall: 'w-[6%]',
        ssm: 'w-[10%]',
        sm: 'w-[30%]',
        md: 'w-[50%]',
        lg: 'w-[85%]'
    }

    const widthClass = mapWidthToClassNames[width]

    return (
        <>
            {variant === 'padraoBlack' && (
                <img src='/logos/padraoBlack.svg' className={widthClass} />
            )}
            {variant === 'padraoWhite' && (
                <img src='/logos/padraoWhite.svg' className={widthClass} />
            )}
            {variant === 'bookOne' && (
                <img src='/logos/bookOne.svg' className={widthClass} />
            )}
            {variant === 'bookTwo' && (
                <img src='/logos/allwhite.svg' className={widthClass} />
            )}
            {variant === 'allWhite' && (
                <img src='/logos/bookTwo.svg' className={widthClass} />
            )}
        </>
    )
}
