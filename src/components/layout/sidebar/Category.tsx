import { Plus } from "lucide-react";
import React from "react";

const Category = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2>Kategorie</h2>
        <Plus className="w-4 m-2 h-4 hover:h-6 hover:w-6 hover:m-1 transition-all duration-200" />
      </div>
    </div>
  );
};

export default Category;
