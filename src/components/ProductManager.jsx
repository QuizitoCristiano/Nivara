import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Edit,
  Trash2,
  Image as ImageIcon,
  Save,
  X,
  Tag,
  DollarSign,
  Package,
  Eye,
  Star
} from 'lucide-react';
import { toast } from "sonner";
import { useGlobalContext } from "@/context/GlobalContext";

export default function ProductManager() {
  const { products, addProduct, updateProduct, removeProduct } = useGlobalContext();

  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: 'Flores',
    image: '',
    inStock: true,
    onSale: false,
    salePercentage: 0,
    featured: false
  });

  const categories = ['Flores', 'Buquês', 'Plantas', 'Suculentas', 'Cactos'];

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setFormData({
      name: '',
      description: '',
      price: '',
      originalPrice: '',
      category: 'Flores',
      image: '',
      inStock: true,
      onSale: false,
      salePercentage: 0,
      featured: false
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice.toString(),
      category: product.category,
      image: product.image,
      inStock: product.inStock,
      onSale: product.onSale,
      salePercentage: product.salePercentage,
      featured: product.featured
    });
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.description || !formData.price) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    const newProduct = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      originalPrice: parseFloat(formData.originalPrice || formData.price),
      category: formData.category,
      image: formData.image || "/src/imagens/flor1.png",
      inStock: formData.inStock,
      onSale: formData.onSale,
      salePercentage: parseInt(formData.salePercentage) || 0,
      featured: formData.featured
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, newProduct);
    } else {
      addProduct(newProduct);
    }

    setIsAddingProduct(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      originalPrice: '',
      category: 'Flores',
      image: '',
      inStock: true,
      onSale: false,
      salePercentage: 0,
      featured: false
    });
  };

  const handleDeleteProduct = (productId) => {
    if (confirm("Tem certeza que deseja remover este produto?")) {
      removeProduct(productId);
    }
  };

  const handleCancel = () => {
    setIsAddingProduct(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      originalPrice: '',
      category: 'Flores',
      image: '',
      inStock: true,
      onSale: false,
      salePercentage: 0,
      featured: false
    });
  };

  const calculateSalePrice = (originalPrice, salePercentage) => {
    return originalPrice * (1 - salePercentage / 100);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">🛍️ Gerenciar Produtos</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Adicione, edite e gerencie os produtos da loja
          </p>
        </div>
        <Button onClick={handleAddProduct} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      {/* Formulário de Adicionar/Editar */}
      {(isAddingProduct || editingProduct) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {editingProduct ? <Edit className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nome do Produto *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Rosas Vermelhas"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Categoria</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full border rounded-md px-3 py-2"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Descrição *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Descreva o produto..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Preço Original (R$) *</label>
                <Input
                  type="number"
                  step="0.01"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Preço Atual (R$)</label>
                <Input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="text-sm font-medium">URL da Imagem</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="/src/imagens/flor1.png"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.onSale}
                    onChange={(e) => setFormData({...formData, onSale: e.target.checked})}
                  />
                  <span className="text-sm font-medium">Em Promoção</span>
                </label>
                {formData.onSale && (
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.salePercentage}
                      onChange={(e) => setFormData({...formData, salePercentage: e.target.value})}
                      className="w-20"
                      placeholder="%"
                    />
                    <span className="text-sm">% off</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({...formData, inStock: e.target.checked})}
                  />
                  <span className="text-sm font-medium">Em Estoque</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  />
                  <span className="text-sm font-medium">Destaque</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
              <Button onClick={handleSaveProduct}>
                <Save className="h-4 w-4 mr-2" />
                {editingProduct ? 'Atualizar' : 'Adicionar'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lista de Produtos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = "/src/imagens/flor1.png";
                }}
              />
              {product.onSale && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  -{product.salePercentage}%
                </div>
              )}
              {product.featured && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                  <Star className="h-3 w-3 inline mr-1" />
                  Destaque
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-bold">Fora de Estoque</span>
                </div>
              )}
            </div>
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-sm sm:text-base truncate">{product.name}</h4>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    {product.onSale ? (
                      <>
                        <span className="text-lg font-bold text-green-600">
                          R$ {calculateSalePrice(product.originalPrice, product.salePercentage).toFixed(2).replace('.', ',')}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Package className="h-3 w-3" />
                    <span>{product.category}</span>
                    <span>•</span>
                    <span>{product.sales} vendas</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {product.inStock ? 'Em estoque' : 'Fora de estoque'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum produto cadastrado</h3>
            <p className="text-muted-foreground mb-4">
              Comece adicionando seu primeiro produto para a loja
            </p>
            <Button onClick={handleAddProduct}>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Primeiro Produto
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 