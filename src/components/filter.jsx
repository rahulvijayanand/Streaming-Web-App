import React, { useEffect } from "react";
import axios from "axios";

const Filter = ({ categories, activeCategory, onCategoryClick }) => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://ypapi.formz.in/api/public");
      const categoriesData = response.data.map((category) =>
        capitalizeFirstLetter(category)
      );
      categoriesData.unshift("All");
      categories(categoriesData);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="ml-3">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`rounded-lg px-3 py-1.5 mr-3 pops mb-4 ${
            category === activeCategory ? "bg-[#c9c4b0]" : "bg-[#072339]"
          }`}
          onClick={() => onCategoryClick(category)}
        >
          <div
            className={`text-sm font-medium ${
              category === activeCategory ? "text-black" : "text-white"
            }`}
          >
            {category}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Filter;
