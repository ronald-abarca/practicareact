import { useState } from 'react'
import './App.css'

const TURNOS={
  x:'X',
  o:'0'
}

const COMBINACIONES_GANADORAS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



const Cuadrado=({children,isSelected,actualizarTablero,index})=>{
  const className=`square ${isSelected?'is-selected':''}`

  const handleClick=()=>{
    actualizarTablero(index)
  }
  return(
    <div className={className} onClick={handleClick}>
        {children}
    </div>
  )
  
}

function App() {
  const [tablero,setTablero] =useState(()=>{
    const tableroGuardado=window.localStorage.getItem('tablero')
    return tableroGuardado?JSON.parse(tableroGuardado):Array(9).fill(null)
  })
  const [turno,setTurno]=useState(()=>{
    const turnoGuardado=window.localStorage.getItem('turno')
    return turnoGuardado? turnoGuardado:TURNOS.x 
  })
  const [ganador,setGanador]=useState(null)//null nadie gana, false empate
  
  const comprobar=(tablero)=>{
      for(const comb of COMBINACIONES_GANADORAS){
        const [a,b,c]=comb
        if(
          tablero[a]&&
          tablero[a]===tablero[b]&&
          tablero[a]===tablero[c]
        ){
          return tablero[a]
        }
      }

      return null;
  }

  const resetear=()=>{
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.x)
    setGanador(null)
    window.localStorage.removeItem('tablero')
    window.localStorage.removeItem('turno')

  }

  const comprobarFin=(tablero)=>{
    return tablero.every((cuadrado)=>cuadrado!=null)
  }

  const actualizarTablero=(index)=>{
    if (tablero[index] || ganador) return

    const nuevoTablero=[...tablero]
    nuevoTablero[index]=turno
    setTablero(nuevoTablero)

    const nuevoTurno=turno===TURNOS.x?TURNOS.o:TURNOS.x
    setTurno(nuevoTurno)
    //guardar estado
    window.localStorage.setItem('tablero',JSON.stringify(nuevoTablero))
    window.localStorage.setItem('turno',nuevoTurno)

    const nuevoGanador=comprobar(nuevoTablero)
    if(nuevoGanador){
      setGanador(nuevoGanador)
    }else if(comprobarFin(nuevoTablero)){
      setGanador(false)
    }

  }

   return (
    <main className='board'>
      <h1>juego de X , 0</h1>
      <button onClick={resetear}>Empezar de nuevo</button>
      <section className='game'>
        {
          tablero.map((_,index)=>{
            return(
             <Cuadrado key={index} index={index} actualizarTablero={actualizarTablero}>
              {tablero[index]}
             </Cuadrado>
            )
          })
        }
      </section>

      <section className='turn'>
        <Cuadrado isSelected={turno===TURNOS.x}>{TURNOS.x}</Cuadrado>
        <Cuadrado isSelected={turno===TURNOS.o}>{TURNOS.o}</Cuadrado>
      </section>

      {
        ganador!=null &&(
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  ganador===false?'Empate':'Gano'
                }
              </h2>
              <header className='win'>
                {ganador && <Cuadrado>{ganador}</Cuadrado>}
              </header>
 
              <footer>
                <button onClick={resetear}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>

  )
}

export default App
