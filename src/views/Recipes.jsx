import { recipes } from "../data/courses"
export default function Recipes() {
    return (
        <div>
            <h2>Recipes</h2>
            {
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <ol>
                            {
                                recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>
                                )}
                        </ol>
                    </div>
                )
            }
        </div>
    )
}
