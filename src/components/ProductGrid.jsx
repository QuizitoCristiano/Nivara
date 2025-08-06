import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="space-y-6 ">
      {/* Grid de Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 -mx-4 md:mx-0 px-4 md:px-0 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mensagem quando não há produtos */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  );
} 