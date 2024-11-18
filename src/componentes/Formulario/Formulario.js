/* eslint-disable */

import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import RadioBox from "../RadioBox/RadioBox";

const Formulario = (props) => {

    // Criando os estados...
    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState("HP")
    const [area, setArea] = useState('Computadores')
    const [estadoProduto, setEstadoProduto] = useState('Novo');

    const aoSalvar = (evento) => {
        
        evento.preventDefault()

        console.log("S" + estadoProduto)
        
        props.aoProfCadastrado(
            {
                "nome" : nome,
                "titulo" : titulo,
                "imagem" : imagem,
                "area" : area,
                "estadoProduto": estadoProduto
            }
        )
    }

    return (

        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do produto:</h2>

                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite o nome do produto" 
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    label="Preço" 
                    placeholder="Digite o preço do produto" 
                    aoAlterado={valor => setTitulo(valor)}
                />

                <ListaSuspensa 
                    label = "Marcas"
                    itens ={props.marcas}
                    aoAlterado = {valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    label="Áreas" 
                    itens={props.areas}
                    aoAlterado={valor => setArea(valor)}
                />

                <RadioBox 
                    label="Estado"
                    valores={props.estado}
                    aoAlterado={valor => setEstadoProduto(valor)}
                />

                <Botao>Inserir Produto</Botao>

            </form>

        </section>
    )
}

export default Formulario;
