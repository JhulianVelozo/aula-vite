import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
const [person, setPerson] = useState({}); 
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(false); 
const [poke, setPoke] = useState({});
const [DBZ, setDBZ] = useState({});
const [teste, setTeste] = useState("");

useEffect(() => { 
const getData = async () => { 
try { 
const res = await axios.get( "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person" ); 
setPerson(res.data); 
const res2 = await axios.get("https://pokeapi.co/api/v2/pokemon/spinda")
setPoke(res2.data)
const res3 = await axios.get("https://dragonball-api.com/api/characters/16")
setDBZ(res3.data)
console.log("Success:", res.data); 
setLoading(false); 
} 
catch (e) { 
console.error( "Erro ao carregar API", e ); 
setLoading(false); 
setError(true); 
} 
} 
getData(); 
}, []);

if(loading){
  return (<image src='./assets/Loading_icon.gif'></image>)
}if(error){
  return (<div>Ocorreu um erro</div>)
}
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={poke.sprites.front_default} className="base" width="170" height="179" alt="" />
          <h1>{poke.name}</h1>
          <h2>{poke.types[0]}</h2>
          <img src={DBZ.image} className="base" width="170" height="179" alt="" />
          <h1>vazio</h1>
        </div>
        <div>
          <h1>{person[43].nome}</h1>
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

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
