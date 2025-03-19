import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    //para recuperar el random fact al cargar el efect
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}