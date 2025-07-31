import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  Mail,
  Shield
} from "lucide-react";

export default function UserAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dados do usuário (pode vir de um contexto ou props)
  const user = {
    name: "Quizito",
    email: "quizito@nivara.com",
    avatar: "https://github.com/leerob.png",
    role: "Administrador"
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-9 w-auto px-2 rounded-full hover:bg-accent"
        >
          <div className="flex items-center space-x-2">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src={user.avatar}
                alt={user.name}
              />
              <AvatarFallback className="text-xs font-medium bg-primary text-primary-foreground">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-sm font-medium text-foreground">
                {user.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {user.role}
              </span>
            </div>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        className="w-56" 
        align="end" 
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="cursor-pointer">
          <Mail className="mr-2 h-4 w-4" />
          <span>Mensagens</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="cursor-pointer">
          <Shield className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 