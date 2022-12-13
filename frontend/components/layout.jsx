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

				<script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();
						for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
						k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

						ym(91627853, "init", {
									clickmap:true,
									trackLinks:true,
									accurateTrackBounce:true
					});
				`}}>
				</script>
			</Head>
			<header className={styles.header}>
				
			</header>
			{props.children}
			<Footer/>
		</Fragment>
	)
}