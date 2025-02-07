import Image from "next/image"
import Link from "next/link"
import type { Recipe } from "../data/recipes"
import styles from "./RecipCard.module.css"

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link href={`/recipes/${recipe.id}`} className={styles.card}>
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={400}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.name}</h3>
        <p className={styles.category}>{recipe.category}</p>
        <p className={styles.description}>{recipe.description}</p>
      </div>
    </Link>
  )
}

export default RecipeCard

