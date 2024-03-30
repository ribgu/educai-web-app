type TypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2'
    children: React.ReactNode
}

export default function Typography(props: TypographyProps) {
    const { variant, children } = props

    const variantsClasnames = {
        h1: 'text-3xl font-bold',
        h2: 'text-2xl font-bold',
        h3: 'text-xl font-bold',
        body1: 'text-base font-normal',
        body2: 'text-sm font-normal'
    }
    const className = variantsClasnames[variant]

    return (
        <>
            <span className={className}>{children}</span>
        </>
    )
}