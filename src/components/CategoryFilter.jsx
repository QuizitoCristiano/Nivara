import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={`rounded-full ${
            selectedCategory === category.id 
              ? "bg-purple-600 hover:bg-purple-700 border-purple-600" 
              : "border-purple-600 text-purple-600 hover:bg-purple-50"
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
} 