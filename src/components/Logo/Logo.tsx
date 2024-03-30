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
        lg: 'w-[100%]'
    }

    const widthClass = mapWidthToClassNames[width]

    return (
        <div className={widthClass}>
            {variant === 'padraoBlack' && (
                <img src={logos.padraoBlack} className={widthClass} />
            )}
            {variant === 'padraoWhite' && (
                <img src={logos.padraoBlack} className={widthClass} />
            )}
            {variant === 'bookOne' && (
                <img src={logos.padraoBlack} className={widthClass} />
            )}
            {variant === 'bookTwo' && (
                <img src={logos.padraoBlack} className={widthClass} />
            )}
        </div>
    )
}