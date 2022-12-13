import cn from 'classnames'
import styles from './line.module.sass'

export default function Line (props){

	return (
		<div className={styles.container}>
			<div className={cn(styles.offer, "container")}>
				<div>
					<div className={styles.title}>
						<span>Оставьте</span> свой телефон
					</div>
					<div className={styles.sub}>
						И мы свяжемся с вами, чтобы обсудить детали вашего ремонта
					</div>
				</div>

				<a href="/#form" className="btn">Заказать ремонт</a>
			</div>
		</div>
	)
}