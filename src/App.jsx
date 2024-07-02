import './App.css'

import { useState} from "react";
import { PostData } from './Hooks/postData';

function App() {


  const [producto, setProducto] = useState('')

  const handleChange =(e)=>{
    //console.log(e.target.value);
    setProducto(e.target.value)
    
  }

  const handleSumbmit = (e)=>{
    e.preventDefault()
    console.log(producto);
    // aca envio el producto al backend!!
    //PostData(producto)
  } 


  return (
    <div className='App'>
      <form onSubmit={handleSumbmit} className='form__app'>
          <header className='header__form__app'>
            Formulario lo cambie
          </header>
          <main className='main__form__app'>
              <label htmlFor="">Ingresa el producto: </label>
              <input onChange={handleChange} type="text" placeholder='Tv...' />
          </main>
          <div className='div__asas'>
            <button className='button__form__app'>
              Ingresar
            </button>
          </div>
      </form>
    </div>
  )
}

export default App
