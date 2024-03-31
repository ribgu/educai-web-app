type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { variant, children } = props

    const variantsClasnames = {
        'primary': 'btn bg-violet-800 border-violet-800 text-white hover:bg-violet-500',
        'secondary': 'btn btn-outline border-violet-800 hover:bg-violet-800 hover:border-violet-800 hover:text-white'
    }

    const className = variantsClasnames[variant]

    return(
        <>   
            <button className={className}>{children}</button>
        </>
    )
}