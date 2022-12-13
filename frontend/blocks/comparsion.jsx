import { useState, useRef } from 'react'
import cn from 'classnames'

import styles from './comparsion.module.sass'

const comp = {
	before: "/db/comparsion/1.jpg",
	after: "/db/comparsion/2.jpg"
}

export default function Comparsion (props){

	const [ left, setLeft ] = useState(10)
	const imageRef = useRef(null)

	const onMouseDown = (e) => {
		const startPos = e.clientX
		const startLeft = left

		const move = (e) => {
			const pos = e.clientX-startPos
			const width = imageRef.current.getBoundingClientRect().width
			let left = startLeft + pos/width*100
			left = Math.min(Math.max(left, 2), 98)
			setLeft(left)
		}

		document.addEventListener('mousemove', move)
		document.addEventListener('mouseup', () => document.removeEventListener('mousemove', move), { once: true })
	}

	return (
		<div className={styles.container}>
			<div className={cn("container", "px")}>
				<h2>Мы знаем, что такое качественный ремонт</h2>
				<div className="sub">
					Сделайте и вы шаг к жизни в новых условиях уже сегодня
				</div>
				<div className={styles.image} ref={imageRef}>
					<div className={styles.imageWrapper}>
						<div style={{backgroundImage: `url(${comp.before})`}}></div>
					</div>
					<div className={styles.imageWrapper} style={{left: left+"%"}}>
						<div style={{left: -left+"%", backgroundImage: `url(${comp.after})`}}></div>
					</div>
					<button style={{left: left+"%"}} className={styles.delimiter} onMouseDown={onMouseDown}>
					</button>
				</div>
				<div>Квартира в кирпичном доме для семьи из 5 человек</div>
			</div>
		</div>
	)
}