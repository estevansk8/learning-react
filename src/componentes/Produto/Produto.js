import React from "react";
import './Produto.css';


const Produto = ( { nome, imagem, titulo, estadoProduto } ) => {
    const imagem_src = `/imagens/${imagem.toLowerCase().replace(" ", "")}.png`;

    console.log(estadoProduto)

	return (
        <div className="colaborador">

            <div className="cabecalho">
                <img src={imagem_src} alt={nome} />
            </div>

            <div className="rodape">
                <h4>Nome: {nome}</h4>
                <h5>R$ {titulo}</h5>
                <h5>Estado: {estadoProduto}</h5>
            </div>

        </div>
	)
}

export default Produto;

