import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import Signup from './components/Signup';
import Login from './components/Login';
import MyRecipes from './components/MyRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RecipeProvider } from './RecipeContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [searchResults, setSearchResults] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSearch = (query) => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredRecipes);
  };

  return (
    <RecipeProvider>
      <Router>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} onSearch={handleSearch} />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<RecipeList recipes={searchResults} />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/my-recipes" element={<MyRecipes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App; 