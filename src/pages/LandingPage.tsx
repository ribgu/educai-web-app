import NavBar from '../components/LandingPageNavBar/NavBar'
import MainTextLogo from '../components/MainTextHome/MainTextLogo'
import Botao from '../components/Botao/Botao'

export default function LandingPage() {
    return (
        <div className='flex flex-col h-screen items-center bg-dark'>

            <div className='flex flex-col w-[90%] h-full'>
                
                <div className='flex w-full h-[15%] justify-between items-center py-10'>
                    <h1 className='text-white'>Logo</h1>
                    <NavBar/>
                    <Botao variant='primary' texto='LOGIN' width='sm' height='sm'/>
                </div>
                

                <div className='flex flex-col w-full h-[85%] bg-[url(../../public/Gradientes/gradienteHome.png)] bg-no-repeat bg-center justify-center items-center'>
                    <MainTextLogo/>

                    <div className='flex w-full justify-center gap-12 mt-12'>
                        <Botao variant='primary' texto='CONTACT US' width='md' height='md'/>
                        <Botao variant='secondary' texto='TRY A DEMO' width='md' height='md'/>
                    </div>

                </div>

            </div>
            
        </div>
        
    )
}