"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { recipes } from "../../data/recipes";
import RecipeCard from "../../components/RecipeCard";
import styles from "./recipes.module.css";

function RecipesContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredRecipes = selectedCategory ? recipes.filter((recipe) => recipe.category === selectedCategory) : recipes;

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Recipes</h1>
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${selectedCategory === null ? styles.active : ""}`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === "Pakistani" ? styles.active : ""}`}
          onClick={() => handleCategoryClick("Pakistani")}
        >
          Pakistani
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === "Chinese" ? styles.active : ""}`}
          onClick={() => handleCategoryClick("Chinese")}
        >
          Chinese
        </button>
        <button
          className={`${styles.categoryButton} ${selectedCategory === "Dessert" ? styles.active : ""}`}
          onClick={() => handleCategoryClick("Dessert")}
        >
          Dessert
        </button>
      </div>
      <div className={styles.grid}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default function Recipes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipesContent />
    </Suspense>
  );
}
