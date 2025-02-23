import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../RecipeContext';

function RecipeDetail() {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext); // Get recipes from context
  const recipe = recipes[id - 1]; // Assuming id is 1-based and matches the index

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  // Split the instructions by line breaks or a specific delimiter
  const instructionsList = recipe.instructions.split('\n'); // Assuming instructions are separated by new lines

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={recipe.image} className="img-fluid rounded" alt={recipe.title} />
      </div>
      <div className="col-md-6">
        <h2>{recipe.title}</h2>
        <p className="text-muted">{recipe.cuisine} • {recipe.timeRequired}</p>
        
        <h4 className="mt-4">Ingredients</h4>
        <ul className="list-group mb-4">
          {recipe.ingredients.split(',').map((ingredient, index) => (
            <li key={index} className="list-group-item">{ingredient.trim()}</li>
          ))}
        </ul>

        <h4>Instructions</h4>
        <ol className="list-group mb-4">
          {instructionsList.map((instruction, index) => (
            <li key={index} className="list-group-item">{instruction.trim()}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;