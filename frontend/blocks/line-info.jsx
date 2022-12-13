import cn from 'classnames'
import styles from './line.module.sass'

export default function LineInfo (props){

	const info = [
		{
			icon: "/db/line-info/user.svg",
			count: 5,
			title: "Лет на рынке"
		},
		{
			icon: "/db/line-info/user.svg",
			count: 32,
			title: "Довольных клиента"
		},
		{
			icon: "/db/line-info/case.svg",
			count: 32,
			title: "Выполненных проекта"
		},
		{
			icon: "/db/line-info/user.svg",
			count: 5,
			title: "Человек в команде"
		},
	]

	return (
		<div className={styles.container}>
			<div className={cn(styles.info, "container")}>
				{info.map((item, index) => (
					<div className={styles.item} key={index}>
						<img src={item.icon} alt="Иконка инфографии"/>
						<div className={styles.counter}>{item.count}</div>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.line}></div>
					</div>
				))}
			</div>
		</div>
	)
}