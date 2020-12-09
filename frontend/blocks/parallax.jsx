import { useState, useEffect, useRef } from 'react'

import styles from './parallax.module.sass'

const images = {
	background: '/db/parallax/background.jpg',
	man: '/db/parallax/man.png'
}

export default function Parallax(props){

	const [ x, setX ] = useState(0)
	const ref = useRef()

	useEffect(() => {
		let lastScroll = 0;
		const loopParallax = () => {
			if(lastScroll !== window.pageYOffset){
				const rect = ref.current.getBoundingClientRect()
				const top = rect.top+pageYOffset
				setX((lastScroll-top))
				lastScroll = window.pageYOffset
			}
			requestAnimationFrame(loopParallax)
		}
		loopParallax();
	}, [])

	return (
		<div className={styles.container} ref={ref}>
			<img src={images.background} alt="Ремонт квартиры" style={{transform: `translate3d(0, ${x*0.5}px, 0)`, width: '100%', top: 0}}/>
			<img src={images.man} alt="Строитель" style={{transform: `translate3d(0, ${x*0.2}px, 0)`, bottom: '-90px', left: '20vw'}}/>
			<div className={styles.man} style={{backgroundColor: `url(${images.man})`}}></div>
		</div>
	)
}