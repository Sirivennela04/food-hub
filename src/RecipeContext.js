import React, { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState(() => {
        const savedRecipes = localStorage.getItem('recipes');
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });

    const addRecipe = (recipe) => {
        const updatedRecipes = [...recipes, recipe];
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes)); // Save to localStorage
    };

    return (
        <RecipeContext.Provider value={{ recipes, setRecipes, addRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};