import React from "react";
import { Home, MapPin, Heart, MessageCircle, User } from "lucide-react";

const BottomNavigation = ({ activeTab = "home" }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: MapPin },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation; 