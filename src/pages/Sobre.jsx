import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Heart,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Footer from "@/components/Footer";

import Quizito from "../imagens/quizito.png";

export default function Sobre() {
  const stats = [
    { icon: Calendar, value: "5+", label: "Anos de Experiência" },
    { icon: Users, value: "10.000+", label: "Clientes Satisfeitos" },
    { icon: Heart, value: "50.000+", label: "Buquês Entregues" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
  ];

  const team = [
    {
      name: "Quizito Cristiano",
      role: "Fundador & CEO",
      image: Quizito,
      description:
        "Especialista em floricultura com mais de 15 anos de experiência.",
    },
    {
      name: "João Santos",
      role: "Diretor Criativo",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description:
        "Designer floral premiado, criador de arranjos únicos e memoráveis.",
    },
    {
      name: "Ana Costa",
      role: "Gerente de Atendimento",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description:
        "Especialista em experiência do cliente e satisfação garantida.",
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Melhor Floricultura",
      organization: "Prêmio São Paulo",
    },
    {
      year: "2022",
      title: "Excelência em Atendimento",
      organization: "Associação Comercial",
    },
    {
      year: "2021",
      title: "Inovação em Design Floral",
      organization: "Feira de Flores",
    },
  ];

  return (
    <div className="min-h-screen bg-background space-y-12">
      {/* Hero Section */}
      <section className="relative py-20 from-purple-50 to-pink-50 border-[1px] border-gray-200 dark:border-gray-800 rounded-xl dark:bg-transparent">
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full blur-2xl opacity-25 bg-purple-600 dark:bg-purple-700"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl opacity-25 bg-purple-700 dark:bg-purple-800"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
              Nossa História de
              <span className="text-purple-600"> Amor pelas Flores</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desde 2019, a Nivara tem sido sinônimo de beleza, qualidade e
              inovação no mundo das flores. Nossa missão é transformar momentos
              especiais em memórias inesquecíveis através da arte floral.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Conheça Nossa Equipe
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
              >
                Ver Galeria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Missão, Visão e Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Guiados por princípios sólidos, buscamos sempre a excelência em
              tudo que fazemos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa Missão
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transformar momentos especiais em experiências inesquecíveis
                  através da beleza e delicadeza das flores, proporcionando
                  alegria e emoção em cada entrega.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossa Visão
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ser a referência nacional em floricultura, reconhecida pela
                  excelência, inovação e compromisso com a satisfação total do
                  cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <CardContent>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Nossos Valores
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Qualidade, transparência, inovação, responsabilidade social e
                  paixão pelo que fazemos são os pilares que sustentam nossa
                  empresa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white dark:bg-gray-900 rounded-xl">


        
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Uma Jornada de Paixão e Dedicação
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  A Nivara nasceu do sonho de uma florista apaixonada que queria
                  transformar a forma como as pessoas se conectam através das
                  flores. Em 2019, com apenas um pequeno ateliê e muito amor,
                  começamos nossa jornada.
                </p>
                <p>
                  Hoje, somos uma equipe de profissionais dedicados que
                  compartilham a mesma paixão: criar momentos especiais através
                  da arte floral. Cada buquê, cada arranjo, cada detalhe é
                  pensado com carinho e cuidado.
                </p>
                <p>
                  Nossa história é marcada por milhares de sorrisos, abraços
                  emocionados e momentos que ficaram para sempre na memória de
                  nossos clientes. E é isso que nos motiva a continuar crescendo
                  e inovando.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌹</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Desde 2019
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transformando momentos em memórias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Profissionais apaixonados que fazem da Nivara uma empresa
              especial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent>
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prêmios e Reconhecimentos */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Prêmios e Reconhecimentos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nossa dedicação e excelência têm sido reconhecidas ao longo dos
              anos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="p-6 border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600"
              >
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-gray-900 dark:rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-purple-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Deixe-nos transformar seus momentos especiais em memórias
            inesquecíveis. Entre em contato e descubra como podemos ajudar você.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Fazer Pedido
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Falar Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
