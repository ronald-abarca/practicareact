
export function TwitterFollowCard ({formatoUsername,username,name,follow}){
    return(
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img src="https://ep01.epimg.net/verne/imagenes/2017/05/23/mexico/1495504993_964103_1495564462_noticia_normal.jpg" alt="Chilaquil" className='md-followCard-avatar'/>
                <div className='md-followCard-info'>
                    <strong>{name}</strong>
                    <span className='md-followCard-ifoname'>{formatoUsername(username)}</span>

                </div>
            </header>
            <aside>
                <button className='md-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}