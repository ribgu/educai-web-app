import { RiSearchLine } from 'react-icons/ri'

interface SearchBaarProps {
	placeholder: string
	value: string
	setValue: (value: string) => void
}

export default function SearchBar(props: SearchBaarProps) {
	const { placeholder, value, setValue } = props

	return (
		<div className='relative w-full h-full'>
			<input 
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className='w-full h-full rounded-lg bg-gray-100 border px-4 outline-none'
				style={{ borderColor: '#7750DE' }}
				placeholder={placeholder}/>

			<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
				<RiSearchLine size={20} color='#7750DE'/>
			</div>
		</div>
	)
}