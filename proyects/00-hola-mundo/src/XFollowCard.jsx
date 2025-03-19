import { useState } from "react"
export function XFollowCard ( { formatUserName, name, userName, initialIsFollowing } ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)  

    const imageSrc = `https://unavatar.io/x/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'x-followCard-button is-following' : ' x-followCard-button'
   
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
        

    return (
        <article className="x-followCard">

            <header className="x-followCard-header">

                <img 
                className="x-followCard-avatar"
                src= {imageSrc}
                alt="politica basica" />
                <div className="x-followCard-info">
                    <strong>{name}</strong>
                    <span className="x-followCard-infoUserName"> {formatUserName(userName)}</span>
                </div>
                
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                <span className="x-followCard-text">{text}</span> 
                    <span className="x-followCard-stopFollow"> Dejar de seguir </span>
                </button>
            </aside>
        </article>
    )
}

