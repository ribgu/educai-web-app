import logos from './logos'

type LogoProps = {
    variant: 'padraoBlack' | 'padraoWhite' | 'bookOne' | 'bookTwo'
    width: 'sm' | 'md' | 'lg'
}

export default function Logo(props: LogoProps) {
    const { variant, width } = props

    const mapWidthToClassNames = {
        sm: 'w-[20%]',
        md: 'w-[50%]',
        lg: 'w-[85%]'
    }

    const widthClass = mapWidthToClassNames[width]

    return (
        <div className={widthClass}>
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
        </div>
    )
}
