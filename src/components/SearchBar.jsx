export default function SearchBar({ value, onChange }) {
  const searchInputId = "product-search-input";

  return (
    <div className="relative">
      
      <label htmlFor={searchInputId} className="sr-only">
        Buscar produtos por nome
      </label>

      <input
        id={searchInputId} 
        type="text"
        className="w-full p-4 rounded-lg border border-gray-300 shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   transition-all outline-none text-gray-900 placeholder-gray-500"
        placeholder="Digite o nome do produto que procura..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        🔍
      </div>
    </div>
  );
}