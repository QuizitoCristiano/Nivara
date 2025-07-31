import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderStatusBadge from "@/components/OrderStatusBadge";
import { 
  Plus, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { products } from "@/data/products";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Dados mockados para demonstração
  const stats = {
    totalProducts: products.length,
    totalOrders: 24,
    totalCustomers: 156,
    revenue: 15420.50
  };

  const recentOrders = [
    { id: 1, customer: "Maria Silva", product: "Buquê Azul e Branco", status: "Entregue", date: "2024-01-15" },
    { id: 2, customer: "João Santos", product: "Rosas Vermelhas", status: "Em preparo", date: "2024-01-14" },
    { id: 3, customer: "Ana Costa", product: "Orquídea Branca", status: "Pendente", date: "2024-01-13" },
  ];

  const handleAddProduct = () => {
    toast("Funcionalidade de adicionar produto será implementada");
  };

  const handleEditProduct = (productId) => {
    toast(`Editando produto ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    toast(`Produto ${productId} será removido`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Painel Administrativo</h1>
        <Button onClick={handleAddProduct} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {[
          { id: "overview", name: "Visão Geral", icon: TrendingUp },
          { id: "products", name: "Produtos", icon: Package },
          { id: "orders", name: "Pedidos", icon: ShoppingCart },
          { id: "customers", name: "Clientes", icon: Users },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Conteúdo das Tabs */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalProducts}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalOrders}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalCustomers}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  R$ {stats.revenue.toFixed(2).replace('.', ',')}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pedidos Recentes */}
          <Card>
            <CardHeader>
              <CardTitle>Pedidos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <OrderStatusBadge status={order.status} />
                      <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "products" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Produtos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "orders" && (
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Funcionalidade de gerenciamento de pedidos será implementada aqui.
            </p>
          </CardContent>
        </Card>
      )}

      {activeTab === "customers" && (
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Funcionalidade de gerenciamento de clientes será implementada aqui.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 