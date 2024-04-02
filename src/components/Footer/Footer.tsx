export default function Footer() {
  return (
    <div className="grid grid-rows-2 min-h-screen relative">
        <div className="grid grid-cols-2 row-span-2">
            <div className="flex flex-col align-middle justify-evenly px-20">
                <h1>Quero</h1>
                <p className="text-wrap">Harnessing the power of artificial inteligence to enhance and empower your experience</p>
                <div className="flex justify-evenly min-w-full">
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300"></button>
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300"></button>
                    <button className="bg-transparent border border-white rounded-full p-4 hover:bg-white hover:border-transparent transition duration-300"></button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
        <div className="flex justify-center row-span-1 p-6">
            <p className="text-white text-sm">@ 2024 Copyright by Quero</p>
        </div>
    </div>
  )
}
