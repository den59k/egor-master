import cn from 'classnames'

import styles from './header.module.sass'

export default function Header (props){

  return (
    <div className={styles.background} style={{backgroundImage: `url(/photo.jpg)`}}>
      <div className={styles.overlay}>
        <h2>Ремонт офисов и квартир</h2>
        <h1>Polytech</h1>
        <div className={styles.sub}>Уже на протяжении 5 лет делаем<br/>качественный современный ремонт</div>
        <a href="/#form" className={cn("btn", styles.button)}>Заказать ремонт</a>
      </div>
    </div>
  )
}