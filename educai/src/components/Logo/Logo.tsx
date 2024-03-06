import { logo } from './logo'

type LogoProps = {
    variant: 'white' | 'black',
    size: 'lg' | 'md' | 'sm'
}

export function Logo(props: LogoProps){
    const { variant, size } = props
    const logoSvg = logo[variant]

    const sizeMap = {
        lg: 'w-[100%]',
        md: 'w-[50%]',
        sm: 'w-[30%]'
    }

    return(
        <img src={logoSvg} alt="Logo educ.ai" className='w-6' />
    )
}