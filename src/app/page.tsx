import Image from "next/image"
import Link from "next/link"
import { recipes } from "../data/recipes"
import RecipeCard from "../components/RecipeCard"
import styles from "./page.module.css"

export default function Home() {
  const featuredRecipes = recipes.slice(0, 4)

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Welcome to Tasty Recipes</h1>
          <p className={styles.description}>Discover delicious recipes from around the world!</p>
          <Link href="/recipes" className={styles.ctaButton}>
            Explore Recipes
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image src="/hero.img.jpg" alt="Delicious Food" width={600} height={400} />
        </div>
      </section>

      <section className={styles.featuredRecipes}>
        <h2 className={styles.sectionTitle}>Featured Recipes</h2>
        <div className={styles.grid}>
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Recipe Categories</h2>
        <div className={styles.categoryGrid}>
          <Link href="/recipes?category=Pakistani" className={styles.categoryCard}>
            <Image src="/biryani.jpg" alt="Pakistani Cuisine" width={300} height={200} />
            <h3>Pakistani Cuisine</h3>
          </Link>
          <Link href="/recipes?category=Chinese" className={styles.categoryCard}>
            <Image src="/pasta.jpg" alt="Chinese Cuisine" width={300} height={200} />
            <h3>Chinese Cuisine</h3>
          </Link>
          <Link href="/recipes?category=Dessert" className={styles.categoryCard}>
            <Image src="/rasmalai.jpg" alt="Desserts" width={300} height={200} />
            <h3>Desserts</h3>
          </Link>
        </div>
      </section>
    </div>
  )
}

