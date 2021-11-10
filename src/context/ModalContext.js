import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //Provider's state
    const [idRecipe, setIdRecipe] = useState(null);
    const [ information, setRecipe] = useState({});
    //Once we have a recipe, call API
    useEffect(() => {
        const obtainRecipe = async () => {
            if(!idRecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const result = await axios.get(url);

            setRecipe(result.data.drinks[0]);
        }
        obtainRecipe();
    }, [idRecipe]);

    return (  
        <ModalContext.Provider
        value={{
            information,
            setIdRecipe,
            setRecipe
        }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;