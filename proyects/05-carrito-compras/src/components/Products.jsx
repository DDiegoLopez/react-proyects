import './Products.css';
import {AddToCartIcon} from './Icons.jsx';

export function Products({products}) {
    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map(product => (
                    <li key={product.id}>
                        <img src={product.images[0]} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <span>${product.price}</span>
                        </div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}