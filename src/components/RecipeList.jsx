import React, {useContext} from 'react'
import Recipe from './Recipe';
import {RecipesContext} from '../context/RecipesContext';

const RecipeList = () => {
    //Extract recipe
    const {recipe} = useContext(RecipesContext);

    return (  
        <div className="row mt-5">
            {recipe.map(recip => (
                <Recipe 
                    key={recip.idDrink}
                    recip={recip}
                />
            ))}
        </div>
    );
}
 
export default RecipeList;