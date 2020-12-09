import { useState } from "react"
import styles from './form.module.sass'

export default function Reviews (props){

	const [ values, setValues ] = useState({})

	const onChange = (obj) => {
		setValues({...values, ...obj})
	}

	return (
		<div className="container px">
			<h2>Закажите себе ремонт</h2>
			<form className={styles.form}>
				<h4>Сделайте шаг к ремонту мечты прямо сейчас</h4>
				<Input name="name" value={values.name} onChange={onChange} label="Ваше имя"/>
				<Input name="phone" value={values.phone} onChange={onChange} label="Ваш телефон"/>
				<button className="btn">Заказать ремонт</button>
			</form>
		</div>
	)
}

function Input (props) {

	const onChange = (e) => {
		props.onChange({[props.name]: e.target.value})
	}

	return (
		<div className={styles.input}>
			<label htmlFor={"input-"+props.name}>{props.label}</label>
			<input type="text" name={props.name} id={"input-"+props.name} onChange={onChange} value={props.value || ""}/>
		</div>
	)
}