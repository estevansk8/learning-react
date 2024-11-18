/* eslint-disable */

import './CampoTexto.css';

const CampoTexto = (props) => {

	const aoDigitado = (evento) => {
		console.log(evento.target.value)
		props.aoAlterado(evento.target.value)
	}

	return (
		<div className="campo-texto">
			<label> {props.label} </label>
			<input onChange={aoDigitado} placeholder={props.placeholder} />
		</div>
	)
}

export default CampoTexto;

