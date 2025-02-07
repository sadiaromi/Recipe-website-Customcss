import { recipes } from "../../../data/recipes"
import RecipeDetail from "../../../components/RecipeDetail"
import { notFound } from "next/navigation"

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === Number.parseInt(params.id))

  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} />
}

