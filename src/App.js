
import React, { useState } from "react";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {

  const areas = [
    {
      nome : 'Computadores',
      corPrimaria : '#57c278',
      corSecundaria : '#d9f7e9'
    },
    {
      nome : 'Acessorios',
      corPrimaria : '#82cffa',
      corSecundaria : '#e8f8ff'
    },
    {
      nome : 'Impressoras',
      corPrimaria : '#a6d157',
      corSecundaria : '#f0f8e2'
    },
    {
      nome : 'Games',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    },
    {
      nome : 'Gadgets',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    }
  ]

  const marcas = ["HP", "Dell", "Positivo", "Asus", "XingLing"]

  const estado = ["Novo", "Usado"]

  // Criando uma lista só com os nomes das áreas:
  const listaAreas = areas.map(area => area.nome)

  // lista (array) de professores.
  // o valor inicial é um array vazio []
  const [professores, setProfessores] = useState( [] )

  const adicionaProf = (prof) => {
    // criando uma nova lista com o conteúdo anterior da lista.
    const listaNova = professores.slice();
    // adicionando o novo professor nesssa lista:
    listaNova.push(prof)
    // colocando a nova lista atualizada no estado:
    setProfessores( listaNova )
  }

  return (

    <div>


      { /* passando a lista de nomes de áreas para o componente Formulario */ }
      <Formulario areas={listaAreas} marcas={marcas} estado={estado} aoProfCadastrado={prof => adicionaProf(prof)} />
      
      { areas.map(area => <Area key={area.nome} 
                                nome={area.nome} 
                                corPrimaria={area.corPrimaria}
                                corSecundaria={area.corSecundaria} 
                                professores={ professores.filter( prof => prof.area === area.nome ) }
                          />) }

    </div>

  )

}

export default App;

