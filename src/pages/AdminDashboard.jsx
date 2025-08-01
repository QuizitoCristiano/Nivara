import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderStatusBadge from "@/components/OrderStatusBadge";
import ProductAnalytics from "@/components/ProductAnalytics";
import SalesReport from "@/components/SalesReport";
import ProductManager from "@/components/ProductManager";
import { 
  Plus, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Filter,
  Download,
  BarChart3,
  PieChart,
  TrendingDown,
  DollarSign,
  Flower,
  Star,
  FileText
} from "lucide-react";
import { products } from "@/data/products";
import { toast } from "sonner";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format, subDays, subWeeks, subMonths, startOfDay, endOfDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateFilter, setDateFilter] = useState("week");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Dados mockados para demonstração - vendas e produtos
  const salesData = [
    { date: '2024-01-01', revenue: 1200, orders: 8, products: 12 },
    { date: '2024-01-02', revenue: 1800, orders: 12, products: 18 },
    { date: '2024-01-03', revenue: 1500, orders: 10, products: 15 },
    { date: '2024-01-04', revenue: 2200, orders: 15, products: 22 },
    { date: '2024-01-05', revenue: 1900, orders: 13, products: 19 },
    { date: '2024-01-06', revenue: 2800, orders: 18, products: 28 },
    { date: '2024-01-07', revenue: 3200, orders: 22, products: 32 },
  ];

  const productSales = [
    { name: 'Rosas Vermelhas', sales: 45, revenue: 2250, category: 'Flores' },
    { name: 'Buquê Azul e Branco', sales: 38, revenue: 1900, category: 'Buquês' },
    { name: 'Orquídea Branca', sales: 32, revenue: 1600, category: 'Plantas' },
    { name: 'Girassóis', sales: 28, revenue: 1400, category: 'Flores' },
    { name: 'Cactos', sales: 25, revenue: 750, category: 'Suculentas' },
    { name: 'Buquê Rosa', sales: 22, revenue: 1100, category: 'Buquês' },
  ];

  const categoryData = [
    { name: 'Buquês', value: 35, color: '#8B5CF6' },
    { name: 'Flores Avulsas', value: 28, color: '#EC4899' },
    { name: 'Plantas', value: 20, color: '#10B981' },
    { name: 'Suculentas', value: 17, color: '#F59E0B' },
  ];

  const recentOrders = [
    { id: 1, customer: "Maria Silva", product: "Buquê Azul e Branco", status: "Entregue", date: "2024-01-15", value: 95.90 },
    { id: 2, customer: "João Santos", product: "Rosas Vermelhas", status: "Em preparo", date: "2024-01-14", value: 89.90 },
    { id: 3, customer: "Ana Costa", product: "Orquídea Branca", status: "Pendente", date: "2024-01-13", value: 120.00 },
    { id: 4, customer: "Pedro Lima", product: "Girassóis", status: "Entregue", date: "2024-01-12", value: 45.90 },
    { id: 5, customer: "Carla Souza", product: "Cactos", status: "Em preparo", date: "2024-01-11", value: 35.90 },
  ];

  // Estatísticas calculadas
  const stats = useMemo(() => {
    const totalRevenue = salesData.reduce((sum, day) => sum + day.revenue, 0);
    const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
    const totalProducts = salesData.reduce((sum, day) => sum + day.products, 0);
    const avgOrderValue = totalRevenue / totalOrders;
    
    return {
      totalProducts: products.length,
      totalOrders,
      totalCustomers: 156,
      revenue: totalRevenue,
      avgOrderValue,
      totalProductsSold: totalProducts
    };
  }, []);

  // Filtros de data
  const getFilteredData = () => {
    const now = new Date();
    let startDate;
    
    switch (dateFilter) {
      case 'day':
        startDate = startOfDay(now);
        break;
      case 'week':
        startDate = subWeeks(now, 1);
        break;
      case 'month':
        startDate = subMonths(now, 1);
        break;
      case 'year':
        startDate = subMonths(now, 12);
        break;
      default:
        startDate = subWeeks(now, 1);
    }
    
    return salesData.filter(item => new Date(item.date) >= startDate);
  };

  const handleAddProduct = () => {
    toast("Funcionalidade de adicionar produto será implementada");
  };

  const handleEditProduct = (productId) => {
    toast(`Editando produto ${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    toast(`Produto ${productId} será removido`);
  };

  const handleExportData = () => {
    toast("Exportando dados...");
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-3 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">📊 Painel de Controle</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Monitoramento completo de vendas e produtos</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button onClick={handleExportData} variant="outline" className="flex items-center gap-2 text-sm">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exportar Dados</span>
            <span className="sm:hidden">Exportar</span>
          </Button>
          <Button onClick={handleAddProduct} className="flex items-center gap-2 text-sm">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Adicionar Produto</span>
            <span className="sm:hidden">Adicionar</span>
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-medium text-sm sm:text-base">Período:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'day', label: 'Hoje' },
                { value: 'week', label: 'Última Semana' },
                { value: 'month', label: 'Último Mês' },
                { value: 'year', label: 'Último Ano' }
              ].map((filter) => (
                <Button
                  key={filter.value}
                  variant={dateFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateFilter(filter.value)}
                  className="text-xs sm:text-sm"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-2 sm:space-x-4 border-b pb-2">
        {[
          { id: "overview", name: "Visão Geral", icon: TrendingUp },
          { id: "analytics", name: "Análise de Vendas", icon: BarChart3 },
          { id: "reports", name: "Relatórios", icon: FileText },
          { id: "products", name: "Produtos", icon: Package },
          { id: "orders", name: "Pedidos", icon: ShoppingCart },
          { id: "customers", name: "Clientes", icon: Users },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border-b-2 transition-colors whitespace-nowrap text-xs sm:text-sm ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <tab.icon className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{tab.name}</span>
            <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Conteúdo das Tabs */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-2xl font-bold text-green-600">
                  R$ {stats.revenue.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-xs text-muted-foreground">
                  +12% vs período anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
                <ShoppingCart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-2xl font-bold text-blue-600">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  +8% vs período anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-2xl font-bold text-purple-600">
                  R$ {stats.avgOrderValue.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-xs text-muted-foreground">
                  +5% vs período anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produtos Vendidos</CardTitle>
                <Package className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-lg sm:text-2xl font-bold text-orange-600">{stats.totalProductsSold}</div>
                <p className="text-xs text-muted-foreground">
                  +15% vs período anterior
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Vendas */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Evolução de Vendas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getFilteredData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} name="Receita (R$)" />
                    <Line type="monotone" dataKey="orders" stroke="#EC4899" strokeWidth={2} name="Pedidos" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Vendas por Categoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Produtos Mais Vendidos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Produtos Mais Vendidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                                 {productSales.slice(0, 5).map((product, index) => (
                   <div key={index} className="flex items-center justify-between p-3 sm:p-4 border rounded-lg">
                     <div className="flex items-center gap-2 sm:gap-4">
                       <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center">
                         <Flower className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                       </div>
                       <div className="min-w-0 flex-1">
                         <p className="font-medium text-sm sm:text-base truncate">{product.name}</p>
                         <p className="text-xs sm:text-sm text-muted-foreground">{product.category}</p>
                       </div>
                     </div>
                     <div className="text-right ml-2">
                       <p className="font-bold text-green-600 text-sm sm:text-base">R$ {product.revenue.toFixed(2).replace('.', ',')}</p>
                       <p className="text-xs sm:text-sm text-muted-foreground">{product.sales} vendas</p>
                     </div>
                   </div>
                 ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "analytics" && <ProductAnalytics />}

             {activeTab === "reports" && <SalesReport />}

       {activeTab === "products" && <ProductManager />}

      {activeTab === "orders" && (
        <Card>
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                             {recentOrders.map((order) => (
                 <div key={order.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3">
                   <div className="w-full sm:w-auto">
                     <p className="font-medium text-sm sm:text-base">{order.customer}</p>
                     <p className="text-sm text-muted-foreground truncate">{order.product}</p>
                     <p className="text-xs text-muted-foreground">{order.date}</p>
                   </div>
                   <div className="text-right w-full sm:w-auto">
                     <OrderStatusBadge status={order.status} />
                     <p className="text-sm font-medium mt-1">
                       R$ {order.value.toFixed(2).replace('.', ',')}
                     </p>
                   </div>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "customers" && (
        <Card>
          <CardHeader>
            <CardTitle>Análise de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
               <div className="text-center p-3 sm:p-4 border rounded-lg">
                 <div className="text-xl sm:text-2xl font-bold text-blue-600">156</div>
                 <div className="text-xs sm:text-sm text-muted-foreground">Total de Clientes</div>
               </div>
               <div className="text-center p-3 sm:p-4 border rounded-lg">
                 <div className="text-xl sm:text-2xl font-bold text-green-600">89</div>
                 <div className="text-xs sm:text-sm text-muted-foreground">Clientes Ativos</div>
               </div>
               <div className="text-center p-3 sm:p-4 border rounded-lg">
                 <div className="text-xl sm:text-2xl font-bold text-purple-600">67</div>
                 <div className="text-xs sm:text-sm text-muted-foreground">Novos este Mês</div>
               </div>
             </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-muted-foreground">
                Funcionalidade completa de gerenciamento de clientes será implementada aqui.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 