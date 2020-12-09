import { Fragment } from 'react'
import Head from 'next/head'
import styles from './layout.module.sass'

import Footer from './footer.jsx'

export default function Layout (props) {

	return (
		<Fragment>
			<Head>
				<title>Ремонт офисов и квартир - EgorMaster</title>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
			</Head>
			<header className={styles.header}>
				
			</header>
			{props.children}
			<Footer/>
		</Fragment>
	)
}