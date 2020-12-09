import cn from 'classnames'
import { useState } from 'react'

import styles from './cases.module.sass'

const groups = ["Все", "Квартиры", "Офисы"]

const cases = [
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 1,	image: '/db/cases/house.jpg'	},
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 1,	image: '/db/cases/house.jpg'	},
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 1,	image: '/db/cases/house.jpg'	},
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 2,	image: '/db/cases/house.jpg'	},
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 2,	image: '/db/cases/house.jpg'	},
	{ title: "Ремонт квартиры, 18м<sup>2</sup>",	group: 2,	image: '/db/cases/house.jpg'	},
]

export default function Cases (props){

	const [ group, setGroup ] = useState(0);

	const _cases = group?cases.filter(item => item.group === group): cases;

	return (
		<div className={cn(styles.container, "px")}>
			<div className="container">
				<h2>Выполненные проекты</h2>
				<div className="sub">Мы стараемся делать нашу работу так, чтобы клиенты получали то, что они хотят</div>
				<div className={styles.group}>
					{groups.map((item, index) => (
						<button key={index} onClick={() => setGroup(index)} className={cn(group === index && styles.active)}>
							{item}
						</button>
					))}
				</div>
				<div className={styles.cases}>
				{_cases.map((item, index) => (
					<div key={index} className={styles.case}>
						<div className={styles.image} style={{backgroundImage: `url(${item.image})`}}></div>
						<div className={styles.title} dangerouslySetInnerHTML={{__html: item.title}}></div>
						<div>{groups[item.group]}</div>
					</div>
				))}
				</div>
			</div>
		</div>
	)
}