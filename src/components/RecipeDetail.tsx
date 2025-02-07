import Image from "next/image"
import type { Recipe } from "../data/recipes"
import styles from "./RecipeDetail.module.css"

interface RecipeDetailProps {
  recipe: Recipe
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className={styles.recipeDetail}>
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={600}
        height={400}
        className={styles.image}
      />
      <h1 className={styles.title}>{recipe.name}</h1>
      <p className={styles.category}>{recipe.category}</p>
      <p className={styles.description}>{recipe.description}</p>

      <h2 className={styles.sectionTitle}>Ingredients</h2>
      <ul className={styles.list}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className={styles.sectionTitle}>Instructions</h2>
      <ol className={styles.list}>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetail

