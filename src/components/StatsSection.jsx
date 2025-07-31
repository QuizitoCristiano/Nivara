import { Truck, Clock, Heart, Shield } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entrega em até 2 horas na sua região",
      value: "2h"
    },
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Faça seu pedido a qualquer momento",
      value: "24/7"
    },
    {
      icon: Heart,
      title: "Flores Frescas",
      description: "Garantimos a frescura das nossas flores",
      value: "100%"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Pagamento seguro e garantia de satisfação",
      value: "✓"
    }
  ];

  return (
    <section className="py-16 from-purple-50 to-lavender-50 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex justify-left items-center mb-4 text-gray-900 dark:text-white">
            Por que escolher a Nivara?
          </h2>
          <p className="text-lg text-gray-400 flex justify-left items-center dark:text-gray-300">
            Oferecemos o melhor em qualidade e serviço
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 