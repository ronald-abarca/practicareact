import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const formatoUsername=(username)=>`@${username}`

    return(
        <div className='App'>
            <TwitterFollowCard formatoUsername={formatoUsername} name="chilaquil" username="chila" initialfollow></TwitterFollowCard>        
            <TwitterFollowCard formatoUsername={formatoUsername} name="chilaquil2" username="chila2"></TwitterFollowCard>
        </div>

        
    )
}