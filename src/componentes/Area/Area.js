import React from "react";
import './Area.css';
import Produto from "../Produto/Produto";

const Area = (props) => {

    const corDeFundo = { backgroundColor : props.corSecundaria }
    const corSublinhado = { borderColor : props.corPrimaria }

	if (props.professores.length > 0) {

        return (
            <section className="area" style={ corDeFundo } >
                <h3 style={ corSublinhado }>{props.nome}</h3>
                <div className="professores">
                    {props.professores.map( prof => 
                        <Produto 
                            key={prof.nome} 
                            nome={prof.nome} 
                            titulo={prof.titulo} 
                            imagem={prof.imagem} 
                            estadoProduto={prof.estadoProduto}
                        />
                    )}
                </div>
            </section>
        )
        
    } else {
        return null;  // ou return ''; se preferir retornar uma string vazia
    }
}

export default Area;

