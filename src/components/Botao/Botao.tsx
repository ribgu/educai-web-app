type BotaoProps = {
    variant: 'primary' | 'secondary',
    width: 'sm' | 'md' | 'lg',
    height: 'sm' | 'md',
    texto: string
}

export default function Botao(props: BotaoProps) {
    const { variant, width, height } = props

    const mapWidthToClassNames = {
        sm: 'w-[10%]',
        md: 'w-[20%]',
        lg: 'w-[50%]'
    }

    const mapHeightToClassNames = {
        sm: 'h-10',
        md: 'h-14',
    }

    const widthClass = mapWidthToClassNames[width]
    const heightClass = mapHeightToClassNames[height]

    return(
        <>
            {variant === 'primary' && (
                <button className={`bg-violet-800 rounded text-white ${widthClass} ${heightClass}`}>{props.texto}</button>
            )}
            {variant === 'secondary' && (
                <button className={ `border-2 rounded border-violet-800 text-white ${widthClass} ${heightClass}`}>{props.texto}</button>
            )}
        </>
    )
}