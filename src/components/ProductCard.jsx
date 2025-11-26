export default function ProductCard({ product }) {
  const formattedPrice = parseFloat(product.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-5">
        {product.offer && (
          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-3">
            🔥 OFERTA
          </span>
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">
            {formattedPrice}
          </span>
          {product.offer && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              Economize
            </span>
          )}
        </div>
      </div>
    </div>
  );
}