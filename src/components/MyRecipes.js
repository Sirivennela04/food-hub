import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext';

function MyRecipes() {
  const { recipes, setRecipes } = useContext(RecipeContext);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = JSON.parse(localStorage.getItem('user'));

  if (!isLoggedIn) {
    return <div>Please log in to see your recipes.</div>;
  }

  const userRecipes = recipes.filter(recipe => recipe.username === user.username);

  const handleDelete = (index) => {
    const updatedRecipes = userRecipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <div>
      <h2>My Recipes</h2>
      {userRecipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul className="list-group">
          {userRecipes.map((recipe, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {recipe.title}
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyRecipes; 