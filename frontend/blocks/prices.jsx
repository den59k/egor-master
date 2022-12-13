import cn from 'classnames'

import styles from './cases.module.sass'

const cases = [
	{ title: "Составление дизан проекта",	image: '/db/cases/design.jpg', price: "от 30 000 ₽"	},
	{ title: "Отделка помещения",	image: '/db/cases/kraska.jpg', price: "1000 ₽ за м<sup>2</sup> площади"	},
	{ title: "Ремонт сан-узла под ключ",	image: '/db/cases/sanuzel.jpg', price: "от 60 000 ₽"	},
	{ title: "Монтажные работы",	image: '/db/cases/provoda.jpg', price: "от 20 000 ₽"	},
	{ title: "Ремонт квартиры под ключ",	image: '/db/cases/house.jpg', price: "от 120 000 ₽"	},
	{ title: "Ремонт коммерческого помещения",	image: '/db/cases/commercia.jpg', price: "от 200 000 ₽"	},
]

export default function Prices (props){

	return (
		<div className={cn(styles.container, "px")}>
			<div className="container">
				<h2>Цены на наши услуги</h2>
				<div className="sub" style={{ marginBottom: "30px"}}>
          Мы выполняем любые виды работ по ремонту<br/>
          Закупка и доставка материалов, а также демонтаж старых конструкций и вывоз мусора включены в цену
        </div>
				<div className={styles.cases}>
				{cases.map((item, index) => (
					<div key={index} className={styles.case}>
						<div className={styles.image} style={{backgroundImage: `url(${item.image})`}}></div>
						<div className={styles.title} dangerouslySetInnerHTML={{__html: item.title}}></div>
						<div className={styles.title} dangerouslySetInnerHTML={{__html: item.price}}></div>
					</div>
				))}
				</div>
        <div className="sub" >
          Обратите внимание, что цена не является окончательной.<br/>
          Свяжитесь с нами, чтобы мы могли рассчитать стоимость работ для вашего проекта
        </div>
			</div>
		</div>
	)
}