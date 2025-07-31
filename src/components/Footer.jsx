import React from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t text-foreground w-full">
      
      {/* Top Contact Information Section */}
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              (+55) 11 99999-9999
            </span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              contato@nivara.com.br
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm text-muted-foreground">
              São Paulo, SP - Brasil
            </span>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-border"></div>

      {/* Middle Navigation and Subscription Section */}
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Prêmios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Carreira
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-purple-600 transition-colors text-sm"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          

          {/* Subscribe Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Inscrever-se
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-background border border-input text-foreground rounded-lg pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
            <p className="text-muted-foreground text-xs">
              Receba atualizações sobre flores e ofertas especiais
            </p>
          </div>
        </div>
      </div>

      

      {/* Bottom Social Media and Copyright Section */}
      <div className="border-t border-border w-full">
        <div className="w-full px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-white" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 - Nivara Flores. Todos os direitos reservados.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-0 w-40 h-40 rounded-full blur-2xl opacity-25 bg-purple-600 dark:bg-purple-700"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl opacity-25 bg-purple-700 dark:bg-purple-800"></div>
    </footer>
  );
}
