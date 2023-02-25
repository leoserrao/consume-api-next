import Head from 'next/head'
import { useEffect, useState } from 'react'
import carrosApi from '../services/carrosApi'


export default function Home(dadosCarros) {
  //Criamos aqui um state chamado "carros" com o Hook useSate para armazenar os dados recebido como resposta da API
  const [carros, setcarros] = useState([])

useEffect(() => {
  let dadosCarros
    dadosCarros = carrosApi.getListCarros().then(res => {
    setcarros(res)
  })
}, [])

  return (
    <div>
      <Head>
        <title>Consume API Carros</title>
      </Head>
      <h1>Carros</h1><hr />

      {
        dadosCarros && carros.map(
          carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
        )
      }

    </div>
  )
}