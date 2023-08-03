import { useEffect,useState } from "react"

function App() {
  const [habilitar,setHabilitar]=useState(false)
  const [posision,setPosision]=useState({x:0,y:0})

  useEffect(()=>{
    console.log("Efecto")
    const moverse=(evento)=>{
      const {clientX,clientY}=evento
      console.log('poission x,y:',{clientX,clientY})
      setPosision({x:clientX,y:clientY})
    }
    if(habilitar){
      window.addEventListener('pointermove',moverse)
    }

    return ()=>{window.removeEventListener('pointermove',moverse)}
  },[habilitar])

  return (
    <main>
      <div style={{
        position:'absolute',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents:'none',
        left:-20,
        top:-20,
        width:40,
        height:40,
        transform:`translate(${posision.x}px,${posision.y}px)`
      }}>

      </div>
      <button onClick={()=>setHabilitar(!habilitar)}>
        {habilitar ?'Desactivar':'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
