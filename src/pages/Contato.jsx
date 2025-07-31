import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(+55) 11 99999-9999",
      subtitle: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@nivara.com.br",
      subtitle: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Flores, 123 - Jardins",
      subtitle: "São Paulo, SP - 01234-567"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sábado",
      subtitle: "8h às 18h (Domingo: 9h às 14h)"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", url: "#", followers: "15.2k" },
    { icon: Facebook, name: "Facebook", url: "#", followers: "8.9k" },
    { icon: Twitter, name: "Twitter", url: "#", followers: "5.1k" },
    { icon: Youtube, name: "YouTube", url: "#", followers: "2.3k" }
  ];

  const faq = [
    {
      question: "Qual o prazo de entrega?",
      answer: "Entregamos em até 2 horas na sua região para pedidos feitos até 16h. Para outras regiões, o prazo pode variar entre 2-4 horas."
    },
    {
      question: "Vocês fazem entregas aos domingos?",
      answer: "Sim! Fazemos entregas aos domingos das 9h às 14h. É necessário fazer o pedido com pelo menos 24h de antecedência."
    },
    {
      question: "Posso personalizar meu buquê?",
      answer: "Claro! Oferecemos personalização completa. Você pode escolher as flores, cores, tamanho e adicionar mensagens especiais."
    },
    {
      question: "E se eu não gostar do produto?",
      answer: "Oferecemos garantia de satisfação. Se não ficar satisfeito, devolvemos seu dinheiro ou refazemos o arranjo gratuitamente."
    },
    {
      question: "Vocês fazem entregas para outras cidades?",
      answer: "Atualmente atendemos São Paulo e região metropolitana. Para outras cidades, consulte nossa equipe de vendas."
    },
    {
      question: "Como posso rastrear minha entrega?",
      answer: "Após a confirmação do pedido, você receberá um link para acompanhar sua entrega em tempo real."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      
      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nome && formData.email && formData.mensagem;

  return (
    <div className="min-h-screen bg-background space-y-12">
      {/* Hero Section */}
      <section className="relative py-20 from-purple-50 to-pink-50 dark:bg-transparent">
        <div className="absolute top-10 left-0 w-40 h-40 rounded-full blur-2xl opacity-25 bg-purple-600 dark:bg-purple-700"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl opacity-25 bg-purple-700 dark:bg-purple-800"></div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Entre em
              <span className="text-purple-600"> Contato</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">
              Estamos aqui para ajudar você a criar momentos especiais. 
              Entre em contato conosco e descubra como podemos transformar sua ocasião.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Nos Encontrar
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Múltiplas formas de entrar em contato conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
                <CardContent>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                  <p className="text-gray-900 dark:text-white font-medium mb-2">{info.info}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-[1px] border-gray-200 dark:border-gray-800 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Envie sua Mensagem
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Assunto
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      placeholder="Como podemos ajudar?"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre sua ocasião especial..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center dark:text-white">
                      <Send className="w-4 h-4 mr-2 dark:text-white" />
                      Enviar Mensagem
                    </div>
                  )}
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  * Campos obrigatórios. Resposta garantida em até 2 horas.
                </p>
              </form>
            </div>

            {/* Mapa e Informações Adicionais */}
            <div className="space-y-8">
              {/* Mapa */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nossa Localização</h3>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Mapa interativo</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Rua das Flores, 123 - Jardins, São Paulo</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Siga-nos nas Redes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <Card key={index} className="p-4 border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="flex items-center justify-between">
                        <div className="flex items-center">
                          <social.icon className="w-5 h-5 text-purple-600 mr-3" />
                          <span className="font-medium">{social.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{social.followers}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Atendimento Rápido */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 dark:text-white">Atendimento Rápido</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-green-900">Resposta em até 2 horas</p>
                      <p className="text-sm text-green-700">Segunda a Sexta</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-blue-900">WhatsApp Business</p>
                      <p className="text-sm text-blue-700">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <p className="font-medium text-purple-900">Horário Estendido</p>
                      <p className="text-sm text-purple-700">Sábados até 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              Respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </div>

          <div className="max-w-4xl mx-auto ">
            <div className="space-y-6">
              {faq.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center dark:text-white">
                      <AlertCircle className="w-5 h-5 text-purple-600 mr-3" />
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed dark:text-gray-400">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

               {/* CTA Section */}
         <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-gray-900 border-[1px] border-gray-200 dark:border-gray-800 rounded-xl">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6 ">
               Pronto para Criar seu Momento Especial?
             </h2>
             <p className="text-xl text-purple-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
               Nossa equipe está pronta para ajudar você a escolher o produto perfeito 
               e criar uma experiência inesquecível.
             </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Fazer Pedido Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
} 