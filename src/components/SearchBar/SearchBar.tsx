import { useEffect } from 'react'
import { RiSearchLine } from 'react-icons/ri'

interface SearchBarProps {
	placeholder: string
	value: string
	setValue: (value: string) => void
	onSearch: () => void
}

export default function SearchBar(props: SearchBarProps) {
    const { placeholder, value, setValue, onSearch } = props

	useEffect(() => {
		if(value.length <= 3) {
			onSearch()
		}
	}, [value])

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch()
        }
    }

    return (
        <div className='relative w-full h-full'>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className='w-full h-full rounded-lg bg-gray-100 border px-4 outline-none'
                style={{ borderColor: '#7750DE' }}
                placeholder={placeholder}/>

            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <RiSearchLine size={20} color='#7750DE'/>
            </div>
        </div>
    )
}