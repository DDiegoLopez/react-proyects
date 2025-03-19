import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'



export function App() {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <div>
                <h1>El gatubelo</h1>
                <button onClick={handleClick}>Nuevo gatubelo</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </div>
        </main>

        /* para hacerlo en 2 filas  se debe agreagar el img y el p dentro de un section y proceder con el css 
                <section>
                     <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
                     <p>{fact}</p>
                </section>
        */
    );
}