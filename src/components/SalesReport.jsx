import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Download,
  Filter,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Eye,
  FileText
} from 'lucide-react';

export default function SalesReport() {
  const [reportType, setReportType] = useState('daily');
  const [dateRange, setDateRange] = useState('week');
  const [selectedProduct, setSelectedProduct] = useState('all');

  // Dados mockados para relatórios
  const dailySales = [
    { date: '01/01', revenue: 1200, orders: 8, customers: 6, avgOrder: 150 },
    { date: '02/01', revenue: 1800, orders: 12, customers: 10, avgOrder: 150 },
    { date: '03/01', revenue: 1500, orders: 10, customers: 8, avgOrder: 150 },
    { date: '04/01', revenue: 2200, orders: 15, customers: 12, avgOrder: 147 },
    { date: '05/01', revenue: 1900, orders: 13, customers: 11, avgOrder: 146 },
    { date: '06/01', revenue: 2800, orders: 18, customers: 15, avgOrder: 156 },
    { date: '07/01', revenue: 3200, orders: 22, customers: 18, avgOrder: 145 },
  ];

  const productSales = [
    { name: 'Rosas Vermelhas', quantity: 45, revenue: 2250, margin: 1462.5, percentage: 25 },
    { name: 'Buquê Azul e Branco', quantity: 38, revenue: 1900, margin: 1330, percentage: 21 },
    { name: 'Orquídea Branca', quantity: 32, revenue: 1600, margin: 880, percentage: 18 },
    { name: 'Girassóis', quantity: 28, revenue: 1400, margin: 840, percentage: 15 },
    { name: 'Cactos', quantity: 25, revenue: 750, margin: 600, percentage: 13 },
    { name: 'Buquê Rosa', quantity: 22, revenue: 1100, margin: 748, percentage: 8 },
  ];

  const customerSegments = [
    { segment: 'Novos Clientes', count: 45, revenue: 6750, percentage: 30 },
    { segment: 'Clientes Recorrentes', count: 78, revenue: 11700, percentage: 52 },
    { segment: 'Clientes VIP', count: 33, revenue: 4950, percentage: 18 },
  ];

  const paymentMethods = [
    { method: 'Cartão de Crédito', count: 85, percentage: 60 },
    { method: 'PIX', count: 45, percentage: 32 },
    { method: 'Dinheiro', count: 12, percentage: 8 },
  ];

  const topCustomers = [
    { name: 'Maria Silva', orders: 8, total: 1200, lastOrder: '2024-01-15' },
    { name: 'João Santos', orders: 6, total: 950, lastOrder: '2024-01-14' },
    { name: 'Ana Costa', orders: 5, total: 780, lastOrder: '2024-01-13' },
    { name: 'Pedro Lima', orders: 4, total: 650, lastOrder: '2024-01-12' },
    { name: 'Carla Souza', orders: 4, total: 580, lastOrder: '2024-01-11' },
  ];

  const handleExportReport = (type) => {
    console.log(`Exportando relatório ${type}`);
    // Aqui seria implementada a lógica de exportação
  };

  const getTotalRevenue = () => {
    return dailySales.reduce((sum, day) => sum + day.revenue, 0);
  };

  const getTotalOrders = () => {
    return dailySales.reduce((sum, day) => sum + day.orders, 0);
  };

  const getTotalCustomers = () => {
    return dailySales.reduce((sum, day) => sum + day.customers, 0);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Cabeçalho do Relatório */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className='flex flex-col gap-2'>
          <h3 className="text-xl sm:text-2xl font-bold">📊 Relatório de Vendas</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Análise detalhada de performance e métricas</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button variant="outline" onClick={() => handleExportReport('pdf')} className="text-sm">
            <FileText className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Exportar PDF</span>
            <span className="sm:hidden">PDF</span>
          </Button>
          <Button variant="outline" onClick={() => handleExportReport('excel')} className="text-sm">
            <Download className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Exportar Excel</span>
            <span className="sm:hidden">Excel</span>
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-medium text-sm sm:text-base">Período:</span>
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="week">Última Semana</option>
                  <option value="month">Último Mês</option>
                  <option value="quarter">Último Trimestre</option>
                  <option value="year">Último Ano</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="font-medium text-sm sm:text-base">Tipo:</span>
                <select 
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="daily">Diário</option>
                  <option value="weekly">Semanal</option>
                  <option value="monthly">Mensal</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resumo Executivo */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-green-600">
              R$ {getTotalRevenue().toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-muted-foreground">
              +15% vs período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Pedidos</CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-blue-600">{getTotalOrders()}</div>
            <p className="text-xs text-muted-foreground">
              +12% vs período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Únicos</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-purple-600">{getTotalCustomers()}</div>
            <p className="text-xs text-muted-foreground">
              +8% vs período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg sm:text-2xl font-bold text-orange-600">
              R$ {(getTotalRevenue() / getTotalOrders()).toFixed(2).replace('.', ',')}
            </div>
            <p className="text-xs text-muted-foreground">
              +3% vs período anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Evolução de Vendas */}
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailySales}>
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

        {/* Vendas por Produto */}
        <Card>
          <CardHeader>
            <CardTitle>Vendas por Produto</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8B5CF6" name="Receita (R$)" />
                <Bar dataKey="margin" fill="#10B981" name="Margem (R$)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Clientes */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Segmentação de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ segment, percentage }) => `${segment} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8B5CF6', '#EC4899', '#10B981'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métodos de Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ method, percentage }) => `${method} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8B5CF6', '#EC4899', '#F59E0B'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Clientes */}
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCustomers.map((customer, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base truncate">{customer.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {customer.orders} pedidos • Último: {customer.lastOrder}
                    </p>
                  </div>
                </div>
                <div className="text-right w-full sm:w-auto">
                  <p className="font-bold text-green-600 text-sm sm:text-base">
                    R$ {customer.total.toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Cliente {index < 2 ? 'VIP' : 'Regular'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights e Recomendações */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>📈 Principais Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>✅ Crescimento Consistente:</strong> Receita aumentou 15% vs período anterior
              </p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>🎯 Alta Conversão:</strong> 78% dos clientes são recorrentes
              </p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-800">
                <strong>💳 Pagamento Digital:</strong> 92% das vendas são digitais (PIX + Cartão)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Ações Estratégicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>🎁 Programa de Fidelidade:</strong> Implementar para clientes recorrentes
              </p>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-sm text-indigo-800">
                <strong>📱 App Mobile:</strong> 60% dos clientes usam mobile para compras
              </p>
            </div>
                            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <strong>🌟 Produtos Premium:</strong> Focar em produtos com margem {'>'}70%
                  </p>
                </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 