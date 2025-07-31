import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  X, 
  Plus, 
  Minus, 
  Trash2,
  CreditCard
} from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "sonner";

export default function ShoppingCart() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    incrementQuantity, 
    decrementQuantity, 
    removeFromCart,
    getCartTotalPrice,
    clearCart
  } = useGlobalContext();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRemoveItemClick = (itemId) => {
    setItemToRemove(itemId);
    setOpenConfirm(true);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove);
    }
    setOpenConfirm(false);
    setItemToRemove(null);
  };

  const handleCancelRemove = () => {
    setOpenConfirm(false);
    setItemToRemove(null);
  };

  const handleFinalizarCompra = () => {
    if (cartItems.length === 0) {
      setModalMessage("Seu carrinho está vazio!");
      setIsWishlistModalOpen(true);
      return;
    }
    
    setModalMessage("Pedido realizado com sucesso! Entraremos em contato em breve.");
    setIsWishlistModalOpen(true);
  };

  const toggleWishlistModal = () => {
    setIsWishlistModalOpen(false);
    if (modalMessage.includes("sucesso")) {
      closeCart();
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-start justify-end pt-16">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={closeCart}
        />
        
                 {/* Cart Panel */}
         <div className="relative w-full sm:w-96 md:w-[450px] lg:w-[400px] h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 shadow-xl">
          <div className="flex flex-col h-full">
                         {/* Header */}
             <div className="flex items-center justify-between p-3 sm:p-4 border-b border-purple-200 dark:border-purple-700">
               <h2 className="text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-300">| Minha Sacola de Compras</h2>
               <div className="flex items-center gap-2">
                 <Button 
                   variant="outline" 
                   size="sm" 
                   onClick={closeCart} 
                   className="text-purple-600 hover:text-purple-700 border-purple-300 hover:border-purple-400 dark:text-purple-300 dark:border-purple-600 dark:hover:border-purple-500 text-xs"
                 >
                   Fechar
                 </Button>
                 <Button variant="ghost" size="icon" onClick={closeCart} className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 h-8 w-8 sm:h-9 sm:w-9">
                   <X className="h-4 w-4" />
                 </Button>
               </div>
             </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-[300px] sm:min-h-[400px]">
                             {cartItems.length === 0 ? (
                 <div className="text-center py-6 sm:py-8">
                   <div className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400 dark:text-purple-300 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                     <CreditCard className="h-6 w-6 sm:h-8 sm:w-8" />
                   </div>
                   <p className="text-sm sm:text-base text-purple-600 dark:text-purple-300">Seu carrinho está vazio</p>
                   <p className="text-xs sm:text-sm text-purple-500 dark:text-purple-400">Adicione alguns produtos para começar</p>
                 </div>
              ) : (
                                 cartItems.map((item, index) => (
                   <Card key={item.id} className="overflow-hidden bg-purple-50/80 dark:bg-gray-800/80 border-purple-200/60 dark:border-purple-700/60 shadow-md backdrop-blur-sm">
                     <CardContent className="p-3 sm:p-4">
                       <div className="flex items-center gap-3 sm:gap-4">
                         {/* Imagem à esquerda */}
                         <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                           <img
                             src={item.image}
                             alt={item.name}
                             className="w-full h-full object-cover rounded-lg"
                           />
                         </div>
                         
                         {/* Detalhes no centro */}
                         <div className="flex-1 min-w-0">
                           <div className="space-y-1">
                             <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-bold">Nome: <span className="font-medium text-purple-900 dark:text-purple-100 truncate">{item.name}</span></p>
                                                          <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-bold">Preço: <span className="font-semibold text-purple-700 dark:text-purple-200">R$ {typeof item.price === 'number' ? item.price.toFixed(2).replace('.', ',') : item.price}</span></p>
                             <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-300 font-bold">Quantidade: <span className="font-medium text-purple-900 dark:text-purple-100">{item.quantity}</span></p>
                           </div>
                         </div>
                        
                        {/* Controles à direita */}
                        <div className="flex flex-col items-end gap-1 sm:gap-2">
                          {/* Ícone de remover */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItemClick(item.id)}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          
                          {/* Botões de quantidade */}
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => decrementQuantity(item.id)}
                              disabled={item.quantity <= 1}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700 rounded-full"
                            >
                              <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => incrementQuantity(item.id)}
                              className="h-6 w-6 sm:h-8 sm:w-8 p-0 bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700 rounded-full"
                            >
                              <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

                         {/* Footer */}
             {cartItems.length > 0 && (
               <div className="border-t border-purple-200 dark:border-purple-700 p-3 sm:p-4 space-y-3 sm:space-y-4">
                 <div className="flex justify-between items-center">
                   <span className="font-semibold text-sm sm:text-base text-purple-800 dark:text-purple-300">Total:</span>
                   <span className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-200">
                     {getCartTotalPrice().toLocaleString("pt-BR", {
                       style: "currency",
                       currency: "BRL",
                     })}
                   </span>
                 </div>
                
                <Button 
                  onClick={handleFinalizarCompra}
                  disabled={isCheckingOut}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-base"
                  size="lg"
                >
                  {isCheckingOut ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Processando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      FINALIZAR COMPRA
                    </div>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de confirmação de remoção */}
      {openConfirm && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Remover Item</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Tem certeza que deseja remover este item do carrinho?</p>
            <div className="flex gap-2 sm:gap-3 justify-end">
              <Button
                onClick={handleCancelRemove}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmRemove}
                className="bg-red-500 hover:bg-red-600 text-white text-sm"
              >
                Remover
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de finalização */}
      {isWishlistModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{modalMessage}</h3>
            <div className="flex gap-2 sm:gap-3 justify-end">
              <Button
                onClick={toggleWishlistModal}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
              >
                {modalMessage.includes("sucesso") ? "OK" : "Voltar"}
              </Button>
              {!modalMessage.includes("sucesso") && (
                <Button
                  onClick={() => {
                    toggleWishlistModal();
                    // Aqui você pode adicionar navegação para formulário de entrega
                    toast("Redirecionando para formulário de entrega...");
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
                >
                  Preencher Entrega
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 