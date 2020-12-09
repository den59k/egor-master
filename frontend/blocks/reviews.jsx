import styles from './reviews.module.sass'

const reviews = [
	{ 
		icon: "/db/reviews/1.jpg",
		name: "Арсен Асренович",
		company: `Директор ООО "Рога и Копыта"`,
		text: "Мой офис пришел в негодность - поэтому обратился за ремонтом. Остался очень доволен результатом"
	},
	{ 
		icon: "/db/reviews/1.jpg",
		name: "Арсен Асренович",
		company: `Директор ООО "Рога и Копыта"`,
		text: "Мой офис пришел в негодность - поэтому обратился за ремонтом. Остался очень доволен результатом"
	},
	{ 
		icon: "/db/reviews/1.jpg",
		name: "Арсен Асренович",
		company: `Директор ООО "Рога и Копыта"`,
		text: "Мой офис пришел в негодность - поэтому обратился за ремонтом. Остался очень доволен результатом"
	},
	{ 
		icon: "/db/reviews/1.jpg",
		name: "Арсен Асренович",
		company: `Директор ООО "Рога и Копыта"`,
		text: "Мой офис пришел в негодность - поэтому обратился за ремонтом. Остался очень доволен результатом"
	}
]

export default function Reviews (props){

	return (
		<div className="container px">
			<h2>Отзывы клиентов</h2>
			<div className="sub">
				Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt 
			</div>
			<div className={styles.reviews}>
				{reviews.map((item, index) => (
					<div key={index} className={styles.review}>
						<div className={styles.header}>
							<img src={item.icon} alt={item.name}/>
							<div className={styles.profile}>
								<div className={styles.name}>{item.name}</div>
								<div className={styles.company}>{item.company}</div>
							</div>
						</div>
						<div className={styles.text}>{item.text}</div>
					</div>
				))}
			</div>
		</div>
	)
}