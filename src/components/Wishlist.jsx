import productsData from '../products.json';
import ProductCard from './ProductCard';

function Wishlist() {
    return (
        <div className='mt-14'>
            <h1 className='mx-12 text-2xl font-semibold'>Wishlist</h1>
            <div className="flex flex-wrap justify-start items-center mx-12">
                {/* Renderizza un componente ProductCard per ogni prodotto in productsData */}
                {productsData.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Wishlist;