import { useState, useCallback } from 'react'
import { Map } from 'immutable'

import 'styles/controls.sass'

import Input from './input'
import Segment from './segment'

///Данный хук используется, когда нам нужно обозначить несколько полей, у которых также могут появляться ошибки
function useForm (defaultValues){
	const [ values, setValues ] = useState(new Map(defaultValues));
	const [ errors, setErrors ] = useState(new Map());

	const onChange = (obj) => {

		let err = errors;
		Object.keys(obj).forEach(key => {				
			if(err.has(key))
				err = err.delete(key);							//Здесь мы затираем ошибки, когда начинаем вводить значение
		});

		if(err !== errors)
			setErrors(err);

		setValues(values.merge(obj));						//А здесь мы присваиваем новые значения
	}

	const _setErrors = useCallback((err) => setErrors(new Map(err)), []);

	return{ values, onChange, errors, setErrors: _setErrors };
}


export { Input, Segment, useForm };