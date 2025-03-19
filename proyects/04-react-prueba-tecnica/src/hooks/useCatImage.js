import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //para recuperar la imagen cada vez que cambie el fact
    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(" ", 3).join(" ")
        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}   // { imageUrl } = useCatImage({ fact })