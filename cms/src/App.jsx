import React from 'react'
import useSWR from 'swr'
import { GET, POST } from 'libs/fetch'

export default function App() {
	
	const { data } = useSWR('/api', GET)
	
	console.log(data)

	return (
		<div>

		</div>
	);
}
