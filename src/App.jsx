import { useState, useEffect } from 'react'
import axios from 'axios'

import loadingGif from './assets/Loading_icon.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [poke, setPoke] = useState({})
  const [DBZ, setDBZ] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          'https://6a79e554674f43f4db11ebc8.mockapi.io/api/person'
        )

        const res2 = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/spinda'
        )

        const res3 = await axios.get(
          'https://dragonball-api.com/api/characters/16'
        )

        setPerson(res.data)
        setPoke(res2.data)
        setDBZ(res3.data)

        console.log('Person:', res.data)
        console.log('Pokemon:', res2.data)
        console.log('Dragon Ball:', res3.data)

        setLoading(false)
      } catch (e) {
        console.error('Erro ao carregar API:', e)
        setError(true)
        setLoading(false)
      }
    }

    getData()
  }, [])

  if (loading) {
    return <img src={loadingGif} alt="Carregando..." />
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar as APIs.</div>
  }

  return (
    <>
      <section id="center">
        <div className="hero">

          {/* POKEMON */}
          <img
            src={poke.sprites?.front_default}
            className="base"
            width="170"
            height="179"
            alt={poke.name}
          />

          <h1>{poke.name}</h1>

          <h2>{poke.types[0].type.name}</h2>

          {/* DRAGON BALL */}
          <img
            src={DBZ.image}
            className="base"
            width="170"
            height="179"
            alt={DBZ.name}
          />

          <h1>{DBZ.name}</h1>

        </div>

        {/* PERSON */}
        <div>
          <h1>{person[43]?.nome}</h1>

          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
