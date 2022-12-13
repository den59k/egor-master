import cn from 'classnames'

import styles from './features.module.sass'

const features = [
	{
		icon: '/db/icons/shield.svg',
		title: "3 года гарантии",
		text: "Закупаем только проверенные временем материалы"
	},
	{
		icon: '/db/icons/time.svg',
		title: "Экономим ваше время",
		text: "Выполняем работу качественно и в срок"
	},
	{
		icon: '/db/icons/money.svg',
		title: "Без дополнительных трат",
		text: "Следуем заранее подготовленной смете"
	},
	{
		icon: '/db/icons/like.svg',
		title: "Следим за качеством",
		text: "Надежный ремонт - залог вашей успешной жизни"
	},
]

export default function Features (props){


	return (
		<div className={cn("container", styles.container, "px")}>
			{features.map((item, index) => (
				<div key={index} className={styles.item}>
					<img src={item.icon} alt="Иконка"/>
					<div className={styles.title}>{item.title}</div>
					<div className={styles.text}>{item.text}</div>
					<div className={styles.line}></div>
				</div>
			))}
		</div>
	)
}