import React from 'react';
import './RadioBox.css';

const RadioBox = (props) => {

    const aoSelecionado = (evento) => {
        console.log(evento.target.value)
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="radio-box">
            <label>{props.label}</label>
            <div>
                <input 
                    type="radio" 
                    name="estado" 
                    id="novo" 
                    value="Novo" 
                    onChange={aoSelecionado} 
                />
                <label htmlFor="novo">Novo</label>

                <input 
                    type="radio" 
                    name="estado" 
                    id="usado" 
                    value="Usado" 
                    onChange={aoSelecionado} 
                />
                <label htmlFor="usado">Usado</label>
            </div>
        </div>

    );
};

export default RadioBox;
