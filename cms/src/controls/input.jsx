import React, { useState } from 'react'
import cn from 'classnames'

import { MdErrorOutline } from 'react-icons/md'

export default function Input ({form, name, label, type, className, placeholder}){

	const onChange = (e) => {
		let value = e.target.value;
		if(type === 'number' && value !== ""){
			value = parseInt(value);
			if(isNaN(value)) return;
		}

		form.onChange({[name]: value});
	}

	let _type = type;
	if(!_type || _type === 'number' || _type === 'url')
		_type = 'text';

	return (
		<div className={cn("input", className, form.errors.get(name) && "errored")}>
			{label && (<label>{label}</label>)}
			<input name={name} placeholder={placeholder} type={_type} value={form.values.get(name) || ""} onChange={onChange}/>
			<div className="error">
				<MdErrorOutline/>
				<div >{form.errors.get(name)}</div>
			</div>
		</div>
	);
}