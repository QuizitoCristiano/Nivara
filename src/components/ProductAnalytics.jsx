import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  Eye,
  ShoppingCart,
  Star,
  Calendar,
  Filter
} from 'lucide-react';

export default function ProductAnalytics() {
  const [timeRange, setTimeRange] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dados mockados para análise detalhada
  const salesTrend = [
    { month: 'Jan', revenue: 12000, orders: 150, products: 180 },
    { month: 'Fev', revenue: 15000, orders: 180, products: 220 },
    { month: 'Mar', revenue: 18000, orders: 220, products: 260 },
    { month: 'Abr', revenue: 16000, orders: 200, products: 240 },
    { month: 'Mai', revenue: 22000, orders: 280, products: 320 },
    { month: 'Jun', revenue: 25000, orders: 320, products: 380 },
  ];

  const productPerformance = [
    { name: 'Rosas Vermelhas', sales: 45, revenue: 2250, margin: 65, rating: 4.8 },
    { name: 'Buquê Azul e Branco', sales: 38, revenue: 1900, margin: 70, rating: 4.9 },
    { name: 'Orquídea Branca', sales: 32, revenue: 1600, margin: 55, rating: 4.7 },
    { name: 'Girassóis', sales: 28, revenue: 1400, margin: 60, rating: 4.6 },
    { name: 'Cactos', sales: 25, revenue: 750, margin: 80, rating: 4.5 },
    { name: 'Buquê Rosa', sales: 22, revenue: 1100, margin: 68, rating: 4.8 },
  ];

  const categoryBreakdown = [
    { name: 'Buquês', value: 35, color: '#8B5CF6' },
    { name: 'Flores Avulsas', value: 28, color: '#EC4899' },
    { name: 'Plantas', value: 20, color: '#10B981' },
    { name: 'Suculentas', value: 17, color: '#F59E0B' },
  ];

  const seasonalData = [
    { month: 'Jan', valentines: 45, mothers: 15, general: 40 },
    { month: 'Fev', valentines: 60, mothers: 10, general: 30 },
    { month: 'Mar', valentines: 20, mothers: 25, general: 55 },
    { month: 'Abr', valentines: 15, mothers: 35, general: 50 },
    { month: 'Mai', valentines: 10, mothers: 70, general: 20 },
    { month: 'Jun', valentines: 5, mothers: 30, general: 65 },
  ];

  const inventoryStatus = [
    { product: 'Rosas Vermelhas', stock: 85, lowStock: 20, reorderPoint: 15 },
    { product: 'Buquê Azul e Branco', stock: 45, lowStock: 10, reorderPoint: 8 },
    { product: 'Orquídea Branca', stock: 12, lowStock: 5, reorderPoint: 10 },
    { product: 'Girassóis', stock: 60, lowStock: 15, reorderPoint: 12 },
    { product: 'Cactos', stock: 30, lowStock: 8, reorderPoint: 5 },
  ];

  const getStockStatus = (stock, reorderPoint) => {
    if (stock <= reorderPoint) return 'text-red-600';
    if (stock <= reorderPoint * 1.5) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-medium text-sm sm:text-base">Período:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'week', label: 'Semana' },
                  { value: 'month', label: 'Mês' },
                  { value: 'quarter', label: 'Trimestre' },
                  { value: 'year', label: 'Ano' }
                ].map((range) => (
                  <Button
                    key={range.value}
                    variant={timeRange === range.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeRange(range.value)}
                    className="text-xs sm:text-sm"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium text-sm sm:text-base">Categoria:</span>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="all">Todas as Categorias</option>
                <option value="buques">Buquês</option>
                <option value="flores">Flores Avulsas</option>
                <option value="plantas">Plantas</option>
                <option value="suculentas">Suculentas</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Principais */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-green-600">R$ 108.000</div>
            <p className="text-xs text-muted-foreground">
              +23% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos Vendidos</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-blue-600">1.800</div>
            <p className="text-xs text-muted-foreground">
              +18% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Margem Média</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-purple-600">67%</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfação</CardTitle>
            <Star className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-orange-600">4.7/5</div>
            <p className="text-xs text-muted-foreground">
              +0.2 em relação ao período anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Tendência de Vendas */}
        <Card>
          <CardHeader>
            <CardTitle>Tendência de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Receita (R$)" />
                <Area type="monotone" dataKey="orders" stackId="2" stroke="#EC4899" fill="#EC4899" fillOpacity={0.6} name="Pedidos" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vendas por Categoria */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance dos Produtos */}
      <Card>
        <CardHeader>
          <CardTitle>Performance dos Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={productPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="sales" fill="#8B5CF6" name="Vendas" />
              <Bar yAxisId="right" dataKey="revenue" fill="#EC4899" name="Receita (R$)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Análise Sazonal */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Sazonal</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="valentines" stroke="#EC4899" strokeWidth={2} name="Dia dos Namorados" />
              <Line type="monotone" dataKey="mothers" stroke="#8B5CF6" strokeWidth={2} name="Dia das Mães" />
              <Line type="monotone" dataKey="general" stroke="#10B981" strokeWidth={2} name="Vendas Gerais" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Status do Estoque */}
      <Card>
        <CardHeader>
          <CardTitle>Status do Estoque</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{item.product}</p>
                  <p className="text-sm text-muted-foreground">
                    Ponto de reordenação: {item.reorderPoint} unidades
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${getStockStatus(item.stock, item.reorderPoint)}`}>
                    {item.stock} unidades
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.stock <= item.reorderPoint ? '⚠️ Reordenar' : '✅ OK'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights e Recomendações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>💡 Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>✅ Alta Performance:</strong> Rosas Vermelhas lideram vendas com 45 unidades
              </p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>📈 Crescimento:</strong> Buquês especiais cresceram 25% este mês
              </p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-800">
                <strong>🎯 Oportunidade:</strong> Suculentas têm margem alta (80%) mas baixa demanda
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Ações Recomendadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Estoque Baixo:</strong> Orquídea Branca precisa de reordenação urgente
              </p>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-sm text-indigo-800">
                <strong>📊 Promoção:</strong> Criar campanha para Suculentas no próximo mês
              </p>
            </div>
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-sm text-teal-800">
                <strong>💝 Preparação:</strong> Aumentar estoque de Rosas para Dia dos Namorados
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 