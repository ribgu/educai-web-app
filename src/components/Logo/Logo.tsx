import logos from './logos'

type LogoProps = {
    variant: 'padraoBlack' | 'padraoWhite' | 'bookOne' | 'bookTwo' | 'allWhite'
    width: 'sm' | 'md' | 'lg' | 'ssm'
}

export default function Logo(props: LogoProps) {
    const { variant, width } = props

    const mapWidthToClassNames = {
        ssm: 'w-[10%]',
        sm: 'w-[30%]',
        md: 'w-[50%]',
        lg: 'w-[85%]'
    }

    const widthClass = mapWidthToClassNames[width]

    return (
        <>
            {variant === 'padraoBlack' && (
                <img src={logos.padraoBlack} className={widthClass} />
            )}
            {variant === 'padraoWhite' && (
                <img src={logos.padraoWhite} className={widthClass} />
            )}
            {variant === 'bookOne' && (
                <img src={logos.bookOne} className={widthClass} />
            )}
            {variant === 'bookTwo' && (
                <img src={logos.bookTwo} className={widthClass} />
            )}
            {variant === 'allWhite' && (
                <img src={logos.allwhite} className={widthClass} />
            )}
        </>
    )
}
