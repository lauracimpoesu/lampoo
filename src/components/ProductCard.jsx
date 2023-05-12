function ProductCard({ product }) {
    const { designer, name, image, price, size, is_new_with_tag } = product;

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-center">
         {/* verifica se il prodotto è nuovo con tag */}
            {is_new_with_tag && (
                <span className="text-yellow-500 px-2 py-1">NEW WITH TAG</span>
            )}
            <img src={image} alt={`${designer} ${name}`} className="mt-4 mb-2 w-full h-auto" />
            <h2 className="text-lg font-semibold">{designer}</h2>
            <h3 className="text-base font-medium">{name}</h3>
            <p className="text-sm">{size}</p>
            <p className="text-lg font-bold">${price}</p>
        </div>
    );
}

export default ProductCard;
