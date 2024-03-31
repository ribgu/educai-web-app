type AnchorProps = {
    children: React.ReactNode,
    variant?: 'lp',
    path: string,
}

export function Anchor(props: AnchorProps) {
    const { path, children } = props

    return (
        <>
            <a href={path} className="font-primary text-sm text-white hover:text-purple-500 ">
                {children}
            </a>
        </>
    )
}