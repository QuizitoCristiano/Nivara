import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Flower,
  Flower2,
  Heart,
  Star
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Servicos() {
  const services = [
    {
      icon: Flower,
      title: "Buquês Especiais",
      description: "Arranjos únicos para ocasiões especiais como aniversários, casamentos e declarações de amor.",
      features: ["Personalização completa", "Flores frescas", "Entrega no mesmo dia"],
      price: "A partir de R$ 89,90"
    },
    {
      icon: Flower2,
      title: "Flores Avulsas",
      description: "Flores individuais de alta qualidade para decoração ou presentes simples.",
      features: ["Variedade de espécies", "Qualidade premium", "Embalagem especial"],
      price: "A partir de R$ 15,90"
    },
    {
      icon: Flower,
      title: "Plantas de Interior",
      description: "Plantas que purificam o ar e trazem vida aos ambientes internos.",
      features: ["Plantas resistentes", "Vasos decorativos", "Guia de cuidados"],
      price: "A partir de R$ 45,90"
    },
    {
      icon: Flower2,
      title: "Cactos e Suculentas",
      description: "Plantas resistentes e fáceis de cuidar, perfeitas para iniciantes.",
      features: ["Baixa manutenção", "Variedade de tamanhos", "Kits completos"],
      price: "A partir de R$ 25,90"
    }
  ];

  const specialServices = [
    {
      icon: Flower,
      title: "Entrega Express",
      description: "Entrega em até 2 horas na sua região",
      details: "Disponível para pedidos feitos até 16h"
    },
    {
      icon: Flower2,
      title: "Agendamento",
      description: "Escolha a data e horário da entrega",
      details: "Perfeito para surpresas e eventos"
    },
    {
      icon: Heart,
      title: "Personalização",
      description: "Criamos arranjos únicos para você",
      details: "Conte-nos sobre a ocasião especial"
    },
    {
      icon: Star,
      title: "Garantia de Qualidade",
      description: "Satisfação garantida ou seu dinheiro de volta",
      details: "7 dias de garantia em todos os produtos"
    }
  ];

  const occasions = [
    {
      title: "Aniversários",
      icon: "🎂",
      description: "Celebre com flores que falam por você"
    },
    {
      title: "Casamentos",
      icon: "💒",
      description: "Arranjos únicos para o dia mais especial"
    },
    {
      title: "Dia dos Namorados",
      icon: "💕",
      description: "Declare seu amor com nossas flores"
    },
    {
      title: "Dia das Mães",
      icon: "👩‍👧‍👦",
      description: "Homenageie com carinho e beleza"
    },
    {
      title: "Formatura",
      icon: "🎓",
      description: "Parabenize com elegância"
    },
    {
      title: "Condolências",
      icon: "🤍",
      description: "Expressamos sua solidariedade"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Escolha seu Produto",
      description: "Navegue por nossa coleção e escolha o produto ideal para sua ocasião."
    },
    {
      step: "02",
      title: "Personalize",
      description: "Adicione mensagens, escolha cores e faça ajustes especiais."
    },
    {
      step: "03",
      title: "Agende a Entrega",
      description: "Escolha a data e horário perfeitos para a entrega."
    },
    {
      step: "04",
      title: "Receba com Amor",
      description: "Nossa equipe entrega com carinho e cuidado."
    }
  ];

  return (
    <div className="min-h-screen space-y-12">
      {/* Hero Section */}
      <section className="relative py-20  from-purple-50 to-pink-50 dark:bg-transparent">
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full blur-2xl opacity-25 bg-purple-600 dark:bg-purple-700"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl opacity-25 bg-purple-700 dark:bg-purple-800"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Nossos
              <span className="text-purple-600"> Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Oferecemos uma ampla variedade de produtos e serviços para transformar 
              seus momentos especiais em memórias inesquecíveis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Produtos */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cada produto é cuidadosamente selecionado e preparado com amor e dedicação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Star className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4">{service.price}</div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Ver Produtos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Especiais */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Serviços Especiais
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Vamos além da venda de flores. Oferecemos uma experiência completa e personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialServices.map((service, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <CardContent>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{service.description}</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ocasiões Especiais */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Para Todas as Ocasiões
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Temos a solução perfeita para cada momento especial da sua vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
                <CardContent>
                  <div className="text-4xl mb-4">{occasion.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{occasion.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{occasion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Processo simples e rápido para garantir sua satisfação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias e Políticas */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossas Garantias
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compromisso total com a qualidade e satisfação do cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Garantia de Qualidade</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Todos os nossos produtos passam por rigoroso controle de qualidade. 
                  Flores frescas e arranjos perfeitos garantidos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flower2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Entrega Pontual</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Compromisso com horários. Entregamos no dia e horário agendados, 
                  ou sua compra é gratuita.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Satisfação Garantida</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Se não ficar satisfeito, devolvemos seu dinheiro. 
                  Sua felicidade é nossa prioridade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-gray-900 border-[1px] border-gray-200 dark:border-gray-800 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6">
            Pronto para Transformar seu Momento?
          </h2>
          <p className="text-xl text-purple-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o produto perfeito 
            para sua ocasião especial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Fazer Pedido
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 