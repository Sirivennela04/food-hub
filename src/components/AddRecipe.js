import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext';

function AddRecipe() {
  const { addRecipe } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({
    title: '',
    cuisine: '',
    ingredients: '',
    instructions: '',
    timeRequired: '',
    image: '', // Change to an empty string for URL input
    username: JSON.parse(localStorage.getItem('user')).username // Add username here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe); // Add the recipe to the context
    setRecipe({ title: '', cuisine: '', ingredients: '', instructions: '', timeRequired: '', image: '', username: recipe.username }); // Reset form
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Share Your Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Recipe Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Cuisine</label>
            <input
              type="text"
              className="form-control"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients (comma separated)</label>
            <input
              type="text"
              className="form-control"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructions</label>
            <textarea
              className="form-control"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time Required</label>
            <input
              type="text"
              className="form-control"
              name="timeRequired"
              value={recipe.timeRequired}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Share Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;