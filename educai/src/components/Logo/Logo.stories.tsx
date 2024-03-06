import { Logo } from '.'

export default {
    title: 'Components/Logo'
}

export const TopBarStories = () => {
    return (
        <>
            <Logo variant='white' size='sm'/>
            <Logo variant='black' size='md'/>
        </>
    )
}
