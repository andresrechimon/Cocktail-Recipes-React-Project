import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipe, setRecipe] = useState([]);
    const [search, searchRecipe] = useState({
        name: '',
        category: ''
    });
    const [ consult, setConsult] = useState(false);

    const { name, category} = search;

    useEffect(() => {
        if(consult) {
            const obtainRecipe = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

                const result = await axios.get(url);

                setRecipe(result.data.drinks);
            }

            obtainRecipe();
        }

    }, [search]);

    return ( 
        <RecipesContext.Provider
            value={{
                recipe,
                searchRecipe, 
                setConsult
            }}
        >
            {props.children}
        </RecipesContext.Provider>
     );
}
 
export default RecipesProvider;