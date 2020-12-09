import cn from 'classnames'

import styles from './footer.module.sass'

export default function Footer (props){

	const contacts = {
		address: "г. Хайфа, ул. Пушкина, д. 20",
		mail: "egormaster@email.com",
		phone: "+7 (111) 222 33-44"
	}

	const socialNetwork = [
		{ icon: "/db/icons/whatsapp.svg", href: "https://vk.com" },
		{ icon: "/db/icons/telegram.svg", href: "https://vk.com" },
		{ icon: "/db/icons/viber.svg", href: "https://vk.com" },
	]

	return (
		<footer className={styles.footer}>
			<div className={cn("container px", styles.container)}>
				<div>
					<img src="/logo.png" alt="Логотип EgorMaster"/>
					<div className={styles.footerText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					</div>
				</div>
				<div className={styles.contacts}>
					{contacts.address && <div>{contacts.address}</div>}
					{contacts.address && <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>}
					{contacts.phone && <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>}
					<div className={styles.socialNetwork}>
						{socialNetwork.map((item, index) => (
							<a target="_blank" href={item.href} key={index}>
								<img src={item.icon} alt="Ссылка на соц. сеть"/>
							</a>
						))}
					</div>
				</div>
			</div>
			<div className={styles.lastFooter}>
				<div className={cn("container", styles.container)}>
					<div>Copywrite © 2020 <span>EgorMaster.com</span></div>
					<div>Designed by ...</div>
				</div>
			</div>
		</footer>
	)
}