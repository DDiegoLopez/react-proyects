import { use } from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    const users = [
        { name: 'Politica Basica', userName: 'Politica_Basica', initialIsFollowing: false },
        { name: 'Gregori', userName: 'Gregori__10', initialIsFollowing: true },
        { name: 'Elon Musk', userName: 'elonmusk', initialIsFollowing: true },
        { name: 'Tesla', userName: 'Tesla', initialIsFollowing: false },
    ]

    return (
        <section className='App'> 
            {
                users.map(user => {
                    const { name, userName, initialIsFollowing } = user
                    return (
                        <XFollowCard 
                            key={userName}
                            formatUserName={formatUserName}
                            name={name}     
                            userName={userName}
                            initialIsFollowing={initialIsFollowing} />
                    )
                })
            }
        </section>
           
    )
}