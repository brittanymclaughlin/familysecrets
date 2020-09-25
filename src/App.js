import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import Header from './components/Header';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import RecipeList from "./components/RecipeList";
import RecipeCard from './components/RecipeCard';
import AddRecipeForm from './components/AddRecipeForm';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
    <Header/>
    <Route path="/login" component={LogIn} />
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <PrivateRoute path="/recipe-list" component={RecipeList}/>
    <PrivateRoute path="/recipe-card/:recipeId" component={RecipeCard}/>
    <PrivateRoute path="/add-recipe" component={AddRecipeForm}/>
    <Footer />
    </div>
  )
}

export default App;