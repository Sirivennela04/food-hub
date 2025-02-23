import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../RecipeContext';

function RecipeList() {
  const { recipes } = useContext(RecipeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <h2 className="mb-4">All Recipes</h2>
      <form className="mb-4" onSubmit={handleSearch}>
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Search Recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-md-4 d-flex align-items-end">
            <button className="btn btn-primary custom-button" type="submit">Search</button>
          </div>
        </div>
      </form>
      <div className="row">
        {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map((recipe, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    {recipe.cuisine} • {recipe.timeRequired}
                  </small>
                </p>
                <Link to={`/recipe/${index + 1}`} className="btn btn-primary">View Recipe</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;