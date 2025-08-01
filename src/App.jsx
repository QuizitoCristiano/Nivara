import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import Header from "@/components/Header";
import AdminHeader from "@/components/AdminHeader";
import { SpecialOffersCarousel } from "@/components/ui/SpecialOffersCarousel";
import ClientHome from "@/pages/ClientHome";
import Sobre from "@/pages/Sobre";
import Servicos from "@/pages/Servicos";
import Contato from "@/pages/Contato";
import AdminDashboard from "@/pages/AdminDashboard";
import { Button } from "@/components/ui/button";
import { Store, Settings } from "lucide-react";
import Footer from "./components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";

function AppContent({ currentView, currentPage, onNavigate, onViewChange }) {
  if (currentView === "admin") {
    return (
      <>
        <AdminHeader />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdminDashboard />
        </main>
        <Footer />
      </>
    );
  }

  // Renderizar página baseada na rota atual
  const renderPage = () => {
    switch (currentPage) {
      case "sobre":
        return <Sobre />;
      case "servicos":
        return <Servicos />;
      case "contato":
        return <Contato />;
      default:
        return <ClientHome />;
    }
  };

  return (
    <>
      <Header 
        currentPage={currentPage} 
        onNavigate={onNavigate} 
        onAdminAccess={() => onViewChange("admin")}
      />
      <main className="container mx-auto px-0 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState("client");
  const [currentPage, setCurrentPage] = useState("home");

  const handleViewChange = (view) => {
    setCurrentView(view);
    toast(`Mudando para área ${view === "client" ? "do cliente" : "administrativa"}`);
  };

  const handlePageChange = (page) => {
    console.log('handlePageChange chamada com:', page);
    setCurrentPage(page);
    // Scroll para o topo da página
    window.scrollTo(0, 0);
  };

  return (
    <GlobalProvider>
      {/* Toggle entre Cliente e Admin */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant={currentView === "client" ? "default" : "outline"}
          size="sm"
          onClick={() => handleViewChange("client")}
          className="flex items-center gap-2"
        >
          <Store className="h-4 w-4" />
          Cliente
        </Button>
        <Button
          variant={currentView === "admin" ? "default" : "outline"}
          size="sm"
          onClick={() => handleViewChange("admin")}
          className="flex items-center gap-2"
        >
          <Settings className="h-4 w-4" />
          Admin
        </Button>
      </div>

      {/* Navegação de páginas (apenas para desenvolvimento) */}
      {currentView === "client" && (
        <div className="fixed top-4 left-4 z-50 flex gap-2 bg-white p-2 rounded-lg shadow-lg">
          <Button
            variant={currentPage === "home" ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange("home")}
          >
            Home
          </Button>
          <Button
            variant={currentPage === "sobre" ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange("sobre")}
          >
            Sobre
          </Button>
          <Button
            variant={currentPage === "servicos" ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange("servicos")}
          >
            Serviços
          </Button>
          <Button
            variant={currentPage === "contato" ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange("contato")}
          >
            Contato
          </Button>
        </div>
      )}

      <AppContent 
        currentView={currentView} 
        currentPage={currentPage} 
        onNavigate={handlePageChange} 
        onViewChange={handleViewChange}
      />
      <Toaster />
    </GlobalProvider>
  );
}
