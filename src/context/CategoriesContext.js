import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Creating context
export const CategoriesContext = createContext();

//Provider is where you find the functions and states
const CategoriesProvider = (props) => {
    //Context state
    const [categories, setCategories] = useState([]);

    //Exe API call
    useEffect(() =>{
        const obtainCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categories = await axios.get(url);

            setCategories(categories.data.drinks);
        }
        obtainCategories();
    }, []);

    return(
        <CategoriesContext.Provider
        value={{
            categories
        }}
        >
            {props.children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;