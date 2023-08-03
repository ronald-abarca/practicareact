import { useState,useEffect } from "react"

export function App() {
    const [frases,setFrases]=useState()
    const [url,setUrl]=useState()
    const [erro,setError]=useState()

    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then(res=>{
            if(!res.ok){
                setError('No se pudo recuperar la informacion')
            }
            
            return res.json()})
        .then(data=>{
            //console.log(data)
            const {fact}=data
            setFrases(fact)
        })

    },[])
    useEffect(()=>{
        if(!frases) return
        const primeraPalabra=frases.split(' ')[0]//devuelve la primera palablra
        //const primera3Palabra=fact.split(' ').slice(0,3).join(' ')//devuelve las 3 primeras palablras

        //console.log(primeraPalabra) 
        fetch(`https://cataas.com/cat/says/${primeraPalabra}`)
        .then(res=>{console.log(setUrl(res.url))})
        //.then(data=>{console.log(data)})

    },[frases])

    const handleclick = ()=>{
        fetch('https://catfact.ninja/fact')
        .then(res=>{
            if(!res.ok){
                setError('No se pudo recuperar la informacion')
            }
            
            return res.json()})
        .then(data=>{
            //console.log(data)
            const {fact}=data
            setFrases(fact)
        })
    }

    return(
        <main style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <h1>App js</h1> 
            <button onClick={handleclick}>nuevos datos</button>
            <p>{frases}</p>
            <img src={url} alt={frases}></img>
        </main>
    )
}