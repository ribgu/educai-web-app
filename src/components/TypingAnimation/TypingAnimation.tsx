import { useEffect, useState } from 'react'

export default function TypingAnimation() {
	const [dots, setDots] = useState('.')

	useEffect(() => {
		const timer = setInterval(() => {
			setDots(dots => dots.length < 3 ? dots + '.' : '.')
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return <span>{dots}</span>
}