import cn from 'classnames'
import styles from './line.module.sass'

export default function LineInfo (props){

	const info = [
		{
			icon: "/db/line-info/user.svg",
			count: 100,
			title: "Довольных клиентов"
		},
		{
			icon: "/db/line-info/case.svg",
			count: 20,
			title: "Выполненных проектов"
		},
		{
			icon: "/db/line-info/user.svg",
			count: 5,
			title: "Человек в команде"
		},
		{
			icon: "/db/line-info/user.svg",
			count: 100,
			title: "Довольных клиентов"
		}
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